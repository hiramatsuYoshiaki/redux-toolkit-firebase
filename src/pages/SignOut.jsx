import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {signOutAsync,
        selectUser,
        selectIsSignIn,
        } from '../features/auth/authSlice'
import { Redirect} from 'react-router-dom'
import {Button} from '@mui/material'
import {LoadingSpiner} from '../components/index'

import './page.scss'
const styles={
    // wraper:{
    //     width:"100%",
    //     padding:".8rem", 
    // },
    container:{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center', 
        flexDirection:'column',
        // borderBottom: '1px solid grey',
        margin: 0,
        padding: '8px 8px',
    },
    avater:{
        borderRadius: '50%',
        width:"100%",
        height:"100%",  
        border:"1px solid gery",  
    },
    spacer16:{
        width:'100%',
        height:'16px'
    }
}
const SingOut = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    // const isLoding = useSelector(selectStatus)

    const profile = useSelector(selectUser)
    const signout = () => {
        dispatch(signOutAsync())
    }
    return (
        <div className="page-fexed-container"> 
            {isSignIn === false 
            ?
            <Redirect push to='/' />
            :
            <div style={styles.container}>
                <div className="page-avaterContainer"> 
                    <img src={profile.photoURL} alt="avater" style={styles.avater} />
                </div>
                <div>{profile.username}</div>    
                {/* <div>
                    <div>{profile.email}さん。</div>
                    <div>isSignIn:{profile.isSignIn? 'true' : 'false'}</div> 
                    <div>role:{profile.role}</div>
                    <div>uid:{profile.uid}</div>
                    <div>username:{profile.username}</div>
                    <div>E-mail:{profile.email}</div>
                    <div>photoURL:{profile.photoURL}</div> 
                </div> */}
                <div style={styles.spacer16}></div>
                <div>サインアウトしますか？</div>
                <div >
                    <Button onClick={signout} variant="outlined">
                        サインアウト
                    </Button>
                </div>
            </div> 
            }
            <LoadingSpiner isLoading={profile.status}/>
        </div>
    )
}

export default SingOut
