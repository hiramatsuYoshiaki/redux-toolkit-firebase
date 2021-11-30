import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, 
    SignIn, 
    SignOut, 
    CreateAccount, 
    EditProfile,
    ResetPassword, 
    UpdateEmail,
    EmailVerified, 
    Account, 
    NotFound, 
    Welcom, 
    Activities,
     } from './pages/index'

const PrivateRoute = () => {
    return (
        <Switch>
           
            <Route exact path="/account" component={Account} />
            <Route exact path="/activities" component={Activities} />
            <Route   component={NotFound} />
        </Switch> 
    )
}

export default PrivateRoute
