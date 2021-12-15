import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SportsTop } from  './pages/sports/index'
import { NotFound } from './pages/index'

const PrivateRoute = () => {
    return (
        <Switch>
            <Route exact path="/sports/top" component={SportsTop} />
            {/* <Route   component={NotFound} />  */}
            <Route   component={NotFound} />
        </Switch> 
    )
}

export default PrivateRoute
