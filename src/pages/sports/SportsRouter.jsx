import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Sports, Feeds, Activities, New, Persons, Config, Add, Edit, Done} from './index'
import {NotFound} from '../index'
import {BottomMenuBar} from '../../components/sports/index'

const SportsRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/sports' component={Sports} />
                <Route exact path='/sports/feeds' component={Feeds} />
                <Route exact path='/sports/activities' component={Activities} />
                <Route exact path='/sports/new' component={New} />
                <Route exact path='/sports/add' component={Add} />
                <Route exact path='/sports/edit' component={Edit} />
                <Route exact path='/sports/done' component={Done} />
                <Route exact path='/sports/persons' component={Persons} />
                <Route exact path='/sports/config' component={Config} />
                <Route  component={NotFound} /> 
            </Switch> 
            <BottomMenuBar /> 
        </div>
       
    ) 
}

export default SportsRouter
