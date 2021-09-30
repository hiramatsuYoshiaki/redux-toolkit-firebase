import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux'
import { listenAuthState,selectUser,selectIsSignIn,selectStatus } from '../features/auth/authSlice';
import {LoadingSpiner} from '../components/index'

import './TopAppBar.scss';

const TopAppBar = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    const isLoding = useSelector(selectStatus)
    // const {username} = useSelector(selectUser)
    useEffect(()=>{
        if(isSignIn !== true){
            dispatch(listenAuthState())
        }
    },[isSignIn,dispatch])
    return (
        <div className="TopAppBar-containe">
            <div>
                <Link to={"/"} >
                    <button className="TopAppBar-button" >TODO</button>
                </Link>
            </div>
            <div>
                {isSignIn === true 
                    ?
                        <div>
                            <Link to={"/account"} >
                                <button className="TopAppBar-button">Account</button>
                            </Link>
                            <Link to={"/signout"} >
                                <button className="TopAppBar-button">Sing-Out</button>
                            </Link>
                        </div>
                    :
                        <Link to={"/signin"} >
                        <button className="TopAppBar-button" >Sing-In</button>
                        </Link>
                }
            </div>
            <LoadingSpiner isLoading={isLoding}/>
        </div>
    )
}

export default TopAppBar
