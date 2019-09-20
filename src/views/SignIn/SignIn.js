import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import validate from 'validate.js'
import { authenticationService } from '../../services'
import { useSnackbar } from 'notistack'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import {
    Grid,
    Button,
    TextField,
} from '@material-ui/core'

//Schema do formulário
const schema = {
    user: {
        presence: { allowEmpty: false, message: 'E-mail é obrigatório' },
        email: false,
        length: {
            min: 11,
            maximum: 64
        }
    },
    password: {
        presence: { allowEmpty: false, message: 'Senha é obrigatório' },
        length: {
            maximum: 128
        }
    }
}
//Estilos do formulário
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        height: '100%'
    },
    grid: {
        height: '100%'
    },
    quoteContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    quote: {
        backgroundColor: theme.palette.neutral,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/images/auth.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    quoteInner: {
        textAlign: 'center',
        flexBasis: '600px'
      },
      quoteText: {
        color: theme.palette.white,
        fontWeight: 300
      },
      name: {
        marginTop: theme.spacing(3),
        color: theme.palette.white
      },
      bio: {
        color: theme.palette.white
      },
      contentContainer: {},
      content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      contentHeader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        paddingBototm: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      },
      logoImage: {
        margin: '0 auto',
        display: 'flex',
        alignContent: 'center',
        width: '20%'
      },
      contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center'
        }
      },
      form: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down('sm')]: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2)
        }
      },
      socialButtons: {
        marginTop: theme.spacing(3)
      },
      socialIcon: {
        marginRight: theme.spacing(1)
      },
      sugestion: {
        marginTop: theme.spacing(2)
      },
      textField: {
        marginTop: theme.spacing(2)
      },
      signInButton: {
        margin: theme.spacing(2, 0)
      }
}))

const SignIn = props => {
    const { history } = props
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar()
    
    const [formState, setFormState] = useState({
        isvalid: false,
        values: {},
        touched: {},
        errors: {}
    })

    useEffect(() => {
        const errors = validate(formState.values, schema)

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || []
        }))
    }, [formState.values])

    const handleChange = event => {
        event.persist()

        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                        ? event.target.checked
                        : event.target.value
            },
            touched: {
                ...formState.values,
                [event.target.name]: true
            }
        }))
    }

    const handleSingnIn = event => {
        event.preventDefault()
        enqueueSnackbar('Porra véi', {
            variant: 'error', 
            preventDuplicate: true,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            }
        })
        
        //enqueueSnackbar('Teste lindo')
        //201909192212
        //eSecurity@1qaz2wsx

        /*authenticationService.login(formState.values.user, formState.values.password)
        .then(x => {
            debugger;

            //history.push('/')
        }).catch(x => {
            debugger;


        })*/
    }

    const hasError = field => 
        formState.touched[field] && formState.errors[field] ? true : false
    

    return(
        <div className={classes.root}>
            <Grid
                className={classes.grid}
                container
            >
                <Grid
                    className={classes.quoteContainer}
                    item
                    lg={5}
                >
                    <div className={classes.quote}>
                        <div className={classes.quoteInner}>
                            
                        </div>
                    </div>
                </Grid>
                <Grid
                    className={classes.content}
                    item
                    lg={7}
                    xs={12}
                >
                    <div className={classes.content}>
                        <div className={classes.contentBody}>
                            <form
                                className={classes.form}
                                onSubmit={handleSingnIn}
                            >
                                <img
                                    alt="Logo"
                                    className={classes.logoImage}
                                    src="/images/logos/logo192x192.png"
                                />
                                <TextField
                                    className={classes.textField}
                                    error={hasError('user')}
                                    fullWidth
                                    helperText={hasError('user') ? formState.errors.user[0] : null}
                                    label="Usuário"
                                    name="user"
                                    onChange={handleChange}
                                    type="text"
                                    value={formState.values.user || ''}
                                    variant="outlined"
                                />
                                <TextField
                                    className={classes.textField}
                                    error={hasError('password')}
                                    fullWidth
                                    helperText={hasError('password') ? formState.errors.password[0] : null}
                                    label="Senha"
                                    name="password"
                                    onChange={handleChange}
                                    type="password"
                                    value={formState.values.password || ''}
                                    variant="outlined"
                                />
                                <Button
                                    className={classes.signInButton}
                                    color="primary"
                                    disabled={!formState.isValid}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Entrar
                                </Button>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

SignIn.propTypes = {
    history: PropTypes.object
}

export default withRouter(SignIn)