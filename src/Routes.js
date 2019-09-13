import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { RouteWithLayout } from './components'
import { SignIn as SignInLayout } from './layouts'

import {
    SignIn as SignInView
} from './views'

const Routes = () => {
    return(
        <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <RouteWithLayout 
                component={SignInView} 
                exact 
                layout={SignInLayout}
                path={"/sign-in"}
            />
        </Switch>
    )
}

export default Routes