import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, 
        SignIn, 
        SignOut, 
        CreateAccount, 
        // EmailVerified,
        Account,
        ResetPassword,
        UpdateEmail,
        NotFound, 
         } from './pages/index'
// import { Home,  
//         SignIn, 
//         SignOut, 
//         CreateAccount, 
//         EditProfile,
//         ResetPassword, 
//         UpdateEmail,
//         EmailVerified,
//         Account, 
//         NotFound, 
//         Activities,
//          } from './pages/index'
// import { Todo, 
//          Feeds, 
//          Detail, 
//          Planning, 
//          PutteringTop, 
//          Puttering, 
//          PutteringDetail , 
//          PutteringTimeline,
//          PutteringChats,
//          PutteringConfig,
//         } from './pages/activities/index'
// import PrivateRoute from './PrivateRoute'
// import VerifiedRoute from './VerifiedRoute'
import { TopAppBar } from './components/index' 
// import  Auth  from './features/auth/Auth'
// import Auth from './Auth'
// import Verified from './Verified'
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
                            {/* <Route exact path="/emailVerified" component={EmailVerified} />  */}

                            <Route exact path="/account" component={Account} />
                            <Route exact path="/resetpassword" component={ResetPassword}/>
                            <Route exact path="/updateemail" component={UpdateEmail} />
                            {/* <Verified>
                                <VerifiedRoute  />
                            </Verified> */}
                            {/* <Auth>
                                <PrivateRoute  /> 
                            </Auth> */}
                            <Route   component={NotFound} />   
                           
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
                                   
                                    {/* <Route exact path="/activities/todos" component={Todo} />
                                    <Route exact path="/activities/detail" component={Detail} />
                                    <Route exact path="/activities/feeds" component={Feeds} />
                                    <Route exact path="/activities/planning" component={Planning} />
                                    <Route exact path="/activities/putteringTop" component={PutteringTop} />
                                    <Route exact path="/activities/puttering" component={Puttering} />
                                    <Route exact path="/activities/putteringDetail" component={PutteringDetail} />
                                    <Route exact path="/activities/putteringTimeline" component={PutteringTimeline} />
                                    <Route exact path="/activities/putteringChats" component={PutteringChats} />
                                    <Route exact path="/activities/putteringConfig" component={PutteringConfig} /> */}
                                    {/* <Route   component={NotFound} />  */}
                                {/* </Switch> */}
                            {/* </Auth> */}
                            
                        </Switch> 
                    </main>
                </div>
            </div>
        </Router> 
    )
}       

export default AppRouter
