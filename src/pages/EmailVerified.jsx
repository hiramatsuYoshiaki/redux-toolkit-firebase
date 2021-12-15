import React from 'react'
import {Redirect,useHistory} from 'react-router-dom'
import { useSelector} from 'react-redux'
import { selectUser} from '../features/auth/authSlice'
import { getAuth, sendEmailVerification } from "firebase/auth";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {LoadingSpiner} from '../components/index'

//メールにんしょう
const EmailVerified = () => {
    const history = useHistory()
    const profile = useSelector(selectUser)
    console.log(profile);
    console.log(profile.isSignIn);
    console.log(profile.emailVerified);
    //メールアドレスの有効化
    const handleClickEmailActivation = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log('sendEmailVerification ok')
        })
        .catch((error) => {
            console.log('sendEmailVerification error')
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage) 
        })
        history.push('/signin')　
    }
   
    return (
        <div className="page-fexed-container">
           {(profile.isSignIn === true && profile.emailVerified === true)
            ? <Redirect push to="/activities" />
            :(profile.isSignIn === true && profile.emailVerified === false)
                ?
                <Stack direction="column" spacing={1}>
                    <div>アクティベーションしてください</div> 
                    <h6>アカウント作成で登録した</h6> 
                    <h6>{profile.email}は</h6> 
                    <h6>まだ有効化されていません。</h6> 
                    <h6>[有効化]ボタンを押すと</h6> 
                    <h6>{profile.email}にメールを送信します。</h6> 
                    <h6>メールを開いてアクティベーションをしてください。</h6> 
                    <Button variant="outlined" onClick={handleClickEmailActivation}> 
                        有効化する
                    </Button>
                </Stack>
                : <Redirect push to="/signin" />
            }
            <LoadingSpiner isLoading={profile.status}/>
        </div>
    )
}

export default EmailVerified
