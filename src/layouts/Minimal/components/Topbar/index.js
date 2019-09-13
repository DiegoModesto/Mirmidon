import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        boxShadow: 'none'
    },
    linkBeauty: {
        color: '#CCC',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImage: {
        width: '32px',
        height: '32px'
    },
    logoText: {
        paddingLeft: '1em',
        display: 'flex',
        lineHeight: '32px',
        height: '32px',
    }
}))

const Topbar = props => {
    const { className, ...rest } = props
    const classes = useStyles()

    return(
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
            color="primary"
            position="fixed"
        >
            <Toolbar>
                <RouterLink to="/" className={classes.linkBeauty}>
                    <img
                        className={classes.logoImage}
                        alt="Logo"
                        src="/images/logos/logo32x32.png"
                    />
                    <span className={classes.logoText}>
                        eSecurity - Cyber Security
                    </span>
                </RouterLink>
            </Toolbar>

        </AppBar>
    )
}

Topbar.propTypes = {
    className: PropTypes.string
}

export default Topbar