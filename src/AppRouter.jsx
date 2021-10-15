import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, 
        SignIn, 
        SignOut, 
        CreateAccount, 
        ResetPassword, 
        Account, 
        NotFound, 
        Welcom, 
        Activities,
         } from './pages/index'
import { Todo,Feeds,Detail,Planning } from './pages/activities/index'
import { TopAppBar } from './components/index'
// import  Auth  from './features/auth/Auth'
import './App.scss';

const AppRouter = () => {
    return (
        <Router>
            <div className="App-wraper">
                <div className="App-container">
                    <header className="App-header">
                        <TopAppBar />
                    </header>
                    <main className="App-main">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/signin" component={SignIn} />
                            <Route exact path="/signout" component={SignOut} />
                            <Route exact path="/createaccount" component={CreateAccount} />
                            <Route exact path="/resetpassword" component={ResetPassword} />
                            <Route exact path="/welcom" component={Welcom} />
                            <Route exact path="/account" component={Account} />
                            <Route exact path="/activities" component={Activities} />
                            <Route exact path="/activities/todos" component={Todo} />
                            <Route exact path="/activities/detail" component={Detail} />
                            <Route exact path="/activities/feeds" component={Feeds} />
                            <Route exact path="/activities/planning" component={Planning} />
                            <Route exact component={NotFound} />
                        </Switch> 
                    </main>
                </div>
            </div>
        </Router> 
    )
}       

export default AppRouter
