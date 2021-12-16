import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TopAppBar } from './components/index'
import { Home, 
        SignIn, 
        SignOut, 
        CreateAccount, 
        // EmailVerified,
        RemoveAccount,
        Account,
        ResetPassword,
        UpdateEmail,
        UpdateAccountName,
        UpdateAccountPhoto,
        NotFound, 
         } from './pages/index'

import { Todo, 
         Feeds, 
         Detail, 
         Planning, 
         PutteringTop, 
         Puttering, 
         PutteringDetail , 
         PutteringTimeline,
         PutteringChats,
         PutteringConfig,
        } from './pages/activities/index'


import AuthenticatedGuardSports from './pages/sports/AuthenticatedGuardSports'
import SportsRouter from './pages/sports/SportsRouter'
// import Auth from './Auth'
// import PrivateRoute from './PrivateRoute'
// import Verified from './Verified'
// import VerifiedRoute from './VerifiedRoute'

import './App.scss';

const AppRouter = () => { 
    console.log('react-router-dom ')
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
                            <Route exact path="/removeaccount" component={RemoveAccount} />
                            <Route exact path="/account" component={Account} />
                            <Route exact path="/resetpassword" component={ResetPassword}/>
                            <Route exact path="/updatemail" component={UpdateEmail} />
                            <Route exact path="/updateaccountname" component={UpdateAccountName} />
                            <Route exact path="/updateaccountphoto" component={UpdateAccountPhoto} />
                           
                            {/* <Route exact path="/emailVerified" component={EmailVerified} />
                             */}
                            {/* <Auth> */}
                                {/* <Switch> */}
                                    {/* <Route exact path="/editProfile" component={EditProfile} />
                                    <Route exact path="/updateemail" component={UpdateEmail} />
                                    <Route exact path="/resetpassword" component={ResetPassword} /> 
                                     /> 
                                    <Route exact path="/account" component={Account} />
                                    <Route exact path="/activities" component={Activities} /> */}
                                   
                                    <Route exact path="/activities/todos" component={Todo} />
                                    <Route exact path="/activities/detail" component={Detail} />
                                    <Route exact path="/activities/feeds" component={Feeds} />
                                    <Route exact path="/activities/planning" component={Planning} />

                                    <Route exact path="/activities/putteringTop" component={PutteringTop} />
                                    <Route exact path="/activities/puttering" component={Puttering} />
                                    <Route exact path="/activities/putteringDetail" component={PutteringDetail} />
                                    <Route exact path="/activities/putteringTimeline" component={PutteringTimeline} />
                                    <Route exact path="/activities/putteringChats" component={PutteringChats} />
                                    <Route exact path="/activities/putteringConfig" component={PutteringConfig} />
                                    <Route path="/sports" >
                                        <AuthenticatedGuardSports>
                                            <SportsRouter /> 
                                        </AuthenticatedGuardSports>
                                    </Route>
                                    <Route   component={NotFound} />
                                    {/* <Route   component={NotFound} />  */}
                                {/* </Switch> */}
                            {/* </Auth> */}
                            {/* <Auth>
                                <PrivateRoute  /> 　
                            </Auth> */}
                             {/* <Verified>
                                <VerifiedRoute  /> 
                            </Verified> */}
                        </Switch> 
                    </main>
                </div>
            </div>
        </Router> 
    )
}       

export default AppRouter
