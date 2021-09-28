import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { selectUser,selectIsSignIn } from '../features/auth/authSlice';
import './TopAppBar.css';

const TopAppBar = () => {
    const isSignIn = useSelector(selectIsSignIn)
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
                                <button className="TopAppBar-button">User</button>
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
        </div>
    )
}

export default TopAppBar
