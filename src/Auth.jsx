import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/auth/authSlice'
// import { listenAuthState } from './features/auth/authSlice'
import { Redirect} from 'react-router-dom' 

const Auth = ({children}) => {
    const profile = useSelector(selectUser)
    // console.log('auth---------------------chek login?')
    // console.log(profile)
    // console.log(profile.isSignIn) 
    // console.log(profile.emailVerified) 

    if (profile.isSignIn === true && profile.emailVerified === true) {
        return children
    } else {
        return <Redirect push to="/signin" /> 
    } 
}
 
export default Auth  
 