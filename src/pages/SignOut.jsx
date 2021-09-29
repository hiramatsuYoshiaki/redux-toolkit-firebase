import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {signOutAsync,
        selectUser,
        selectIsSignIn,
        } from '../features/auth/authSlice'
import { Redirect} from 'react-router-dom'
// import {LoadingSpiner} from '../components/index'

import './page.css'
const styles={
    wraper:{
        width:"100%",
        padding:".8rem", 
    }
}
const SingOut = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    // const isLoding = useSelector(selectStatus)

    const profile = useSelector(selectUser)
    const signout = () => {
        // alert('signout')
        dispatch(signOutAsync())
    }
    return (
        <div className="page-container"> 
            {isSignIn === false 
            ?
            // <Redirect push to='/' />
            <Redirect push to='/signin' />
            :
            <div style={styles.wraper}>
                <div>
                    <div>ようこそ</div>
                    <div>{profile.email}さん。</div>
                    <div>isSignIn:{profile.isSignIn? 'true' : 'false'}</div> 
                    <div>role:{profile.role}</div>
                    <div>uid:{profile.uid}</div>
                    <div>username:{profile.username}</div>
                    <div>E-mail:{profile.email}</div>
                    <div>photoURL:{profile.photoURL}</div> 
                    </div>
                <div>
                <div>サインアウトしますか？</div>
                <button  onClick={signout}>
                        Sing-out
                </button>
                </div>

            </div>
            }
            {/* <LoadingSpiner isLoading={isLoding}/> */}
        </div>
    )
}

export default SingOut
