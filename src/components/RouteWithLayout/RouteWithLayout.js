import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { authenticationService } from '../../services'

const CompleteRoute = ({component: Component, layout: Layout, ...rest}) => {
    return (<Route
                {...rest}
                render={mathProps => (
                    <Layout>
                        <Component {...mathProps} />
                    </Layout>
                )}
            />)
}

const RedirectDefault = () => {
    return <Redirect to="/sign-in" />
}

const RouteWithLayout = props => {
    const isAuthorized = authenticationService.isAuthorized()
    const {component: Component, layout: Layout, ...rest} = props
    
    if(props.allowAnonymous)
        return <CompleteRoute
                    {...rest}
                    component={Component}
                    layout={Layout}
                />
    
    return <RedirectDefault />
}

RouteWithLayout.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
}

export default RouteWithLayout