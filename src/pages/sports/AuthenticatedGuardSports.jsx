import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { selectUser } from '../../features/auth/authSlice'

const AuthenticatedGuardSports = ({children}) => {
    console.log('AuthenticatedGuardSports--->chek login?')
    const profile = useSelector(selectUser)
    console.log('profile',profile)
    console.log('isSignIn',profile.isSignIn)
    console.log('emailVarified',profile.emailVerified)
    if(profile.isSignIn === true && profile.emailVerified === true){
        console.log('render children')
        return children
    } else{
        console.log('redirect to ')
        return <Redirect to='/' /> 
    }
    
}

export default AuthenticatedGuardSports
