import React, {useState} from 'react'
import { getAuth, isSignInWithEmailLink,  reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth"
import {useHistory,Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import {EmailUpdateForm} from '../components/account/index'

const UpdateEmail = () => {
    const history = useHistory()
    const[isAuth, setIsAuth] = useState(false)
    const handleClick= ()=>{
        console.log('handleClick');
        const auth = getAuth()
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let email = window.localStorage.getItem('emailForSignIn')
            if (!email) {
                email = window.prompt('確認のために現在のメールアドレスを入力してください');
            }
            const credential = EmailAuthProvider.credentialWithLink(
                email, window.location.href)
            // console.log('credential',credential.EmailAuthCredential);
            // console.log('email',email);
            // console.log('window.location.href',window.location.href);
            // console.log('credential',credential);
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
                alert('ユーザーの再認証ができませんでした。アカウント画面からメールアドレスの変更をしてください。')

                history.push('/account')
            })
        }else{
            alert('ユーザーの再認証ができませんでした。アカウント画面からメールアドレスの変更をしてください。')
            history.push('/account')
        }

    }

    return (
        <div className="page-fexed-container">
            
            {isAuth 
            ? 
            <div>
                {/* <div>現在のメールアドレス</div>
                {window.localStorage.getItem('emailForSignIn')} */}
                <EmailUpdateForm />
                {/* <Link to='/account'> 戻る </Link> */}
            </div>
            : 
            <div>
                <div>メールアドレスを変更する。</div>
                <span onClick={handleClick}>
                    <Button variant="outlined">
                        変更
                    </Button>
                </span>
                <div>
                    <Link to='/account'> 
                        <Button variant="outlined">
                        キャンセル
                        </Button> 
                    </Link>
                </div>
                
            </div>      
        }
        </div>
    )
}

export default UpdateEmail
