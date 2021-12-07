import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux'
import { listenAuthState,selectStatus,selectUser } from '../features/auth/authSlice';
import {LoadingSpiner} from '../components/index'

import './TopAppBar.scss';

const TopAppBar = () => {
    console.log('TopAppBar ------> start1')
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)

    const isLoding = useSelector(selectStatus)
    console.log('email',profile.email)
    console.log('isSignIn',profile.isSignIn)
    console.log('emailVerified',profile.emailVerified) 
    useEffect(()=>{
        console.log('topappbar useEffect  2') 
        if(profile.isSignIn !== true){
            console.log('topappbar useEffect listenAuthState() -------> 3')
            dispatch(listenAuthState())
        }
    },[dispatch,profile.isSignIn])
 
    return (
        <div className="TopAppBar-containe"> 
            <div>
                <Link to="/" >
                    <button className="TopAppBar-button" >Activities</button>
                </Link>
            </div>
            <div>
                {profile.isSignIn === true && profile.emailVerified === true
                    ?
                        <div>
                            <Link to="/account" >
                                <button className="TopAppBar-button">Account</button>
                            </Link>
                            <Link to="/signout" >
                                <button className="TopAppBar-button">Sing-Out</button>
                            </Link>
                        </div>
                    :
                        <Link to="/signin" >
                        <button className="TopAppBar-button" >Sing-In</button>
                        </Link>
                }
            </div>
            <LoadingSpiner isLoading={isLoding}/> 
        </div>
    )
}

export default TopAppBar
