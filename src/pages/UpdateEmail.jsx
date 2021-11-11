import React, {useState} from 'react'
import { getAuth, isSignInWithEmailLink, signInWithEmailLink, reauthenticateWithCredential,linkWithCredential, EmailAuthProvider } from "firebase/auth"
import {useHistory,Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const UpdateEmail = () => {
    const history = useHistory()
    const[isAuth, setIsAuth] = useState(false)
    
    const handleClick= ()=>{
        console.log('handleClick');
        const auth = getAuth()
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let email = window.localStorage.getItem('emailForSignIn')
            if (!email) {
                email = window.prompt('確認のためにメールアドレスを入力してください');
            }
            const credential = EmailAuthProvider.credentialWithLink(
                email, window.location.href)
            // console.log('credential',credential.EmailAuthCredential);
            console.log('email',email);
            console.log('window.location.href',window.location.href);
            console.log('credential',credential);
            reauthenticateWithCredential(auth.currentUser, credential)
            .then((usercred) => {
                console.log('reauthenticateWithCredential----------------------------');
                window.localStorage.removeItem('emailForSignIn');// Clear email from storage.
                // console.log(usercred);
                // console.log('ユーザーを再認証が完了しました。');
                // alert('ユーザーを再認証が完了しました。')
                setIsAuth(true)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode)
                console.log(errorMessage)
                alert('ユーザーを再認証ができませんでした。')
                history.push('/account')

            })
        }

    }

    return (
        <div className="page-fexed-container">
            
            {isAuth 
            ? 
            <div>
                {window.localStorage.getItem('emailForSignIn')}
                <h3>新しいメールアドレスを入力してください</h3>
                <Link to='/account'>
                戻る
                </Link>
            </div>
            : 
            <div onClick={handleClick}>
                <Button>
                    メールアドレスを変更する。
                </Button>
            </div>      
        }
        </div>
    )
}

export default UpdateEmail
