import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Sports, Feeds, Activities, New, Persons, Config} from './index'
import {NotFound} from '../index'
const SportsRouter = () => {
    return (
        <Switch>
            <Route exact path='/sports' component={Sports} />
            <Route exact path='/sports/feeds' component={Feeds} />
            <Route exact path='/sports/activities' component={Activities} />
            <Route exact path='/sports/new' component={New} />
            <Route exact path='/sports/persons' component={Persons} />
            <Route exact path='/sports/config' component={Config} />
            <Route  component={NotFound} /> 
        </Switch>
    )
}

export default SportsRouter
