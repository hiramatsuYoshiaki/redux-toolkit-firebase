import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { EmailVerified } from './pages/index'


const VerifiedRoute = () => {
    return (
        <Switch>
            <Route exact path="*" component={EmailVerified} />
            {/* <Route exact path="/account" component={EmailVerified} /> */}
            {/* <Route exact path="/emailverified" component={EmailVerified} /> */}
        </Switch> 
    )
}

export default VerifiedRoute
