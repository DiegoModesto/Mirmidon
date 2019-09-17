import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { RouteWithLayout } from './components'
import {
    Minimal as MinimalLayout,
    Main as MainLayout
} from './layouts'

import {
    SignIn as SignInView,
    Dashboard as DashboardView
} from './views'

const Routes = () => {
    return(
        <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <RouteWithLayout
                component={DashboardView}
                exact
                layout={MainLayout}
                path="/dashboard"
            />
            <RouteWithLayout 
                component={SignInView} 
                exact 
                layout={MinimalLayout}
                path={"/sign-in"}
            />
        </Switch>
    )
}

export default Routes