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
                exact
                component={DashboardView}
                layout={MainLayout}
                path="/dashboard"
            />
            <RouteWithLayout 
                exact
                allowAnonymous
                component={SignInView} 
                layout={MinimalLayout}
                path={"/sign-in"}
            />
        </Switch>
    )
}

export default Routes