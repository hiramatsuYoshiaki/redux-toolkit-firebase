import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectUser,listenAuthState } from './features/auth/authSlice'

const Verified = ({children}) => {
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    console.log('Verified---------------------chek login?')
    console.log(profile)
    console.log(profile.isSignIn)
    console.log(profile.emailVerified)
    useEffect(()=>{
        console.log('useEffect Verified----listenAuthStat')
        if(!profile.isSignIn){
            dispatch(listenAuthState())
        }
    },[profile,dispatch])
    if (profile.isSignIn && !profile.emailVerified) { 
        return children
    } else{
        return <></>
    }
}
 
export default Verified
