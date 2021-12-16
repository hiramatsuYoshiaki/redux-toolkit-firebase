import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Sports, Feeds, Activities} from './index'
import {NotFound} from '../index'


const SportsRouter = () => {
    return (
        <Switch>
            <Route exact path='/sports' component={Sports} />
            <Route exact path='/sports/feeds' component={Feeds} />
            <Route exact path='/sports/activities' component={Activities} />
            <Route path='*' component={NotFound} />
        </Switch>

    )
}

export default SportsRouter
