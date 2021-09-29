import React from 'react'
import {Redirect} from 'react-router-dom'
import {InputForm} from '../components/index'
import {InputUser} from '../components/InputUser'
import {useSelector} from 'react-redux'
import {selectIsSignIn} from '../features/auth/authSlice'
import { useHistory } from 'react-router-dom'
import './page.css'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const styles={
    wraper:{
        width:"100%",
        padding:".8rem",
    }
}

const ResetPassword = () => {
    // const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    const history = useHistory()
    const [values, handleChange] = InputUser({
        email:""
    })
    const resetPasswordSendEmail = () => {
        console.log('resetPasswordSendEmail');
        const auth = getAuth();
        sendPasswordResetEmail(auth, values.email)
        .then(() => {
            console.log('Password reset email sent!');
            alert('パスワードリセット用のメールを' + 
                values.email + 
                'に送信しました。メールから新しいパスワードを設定してください。' )
            history.push('/signin')
        })
        .catch((error) => {
            console.log('error code',error.code);
            console.log('errorMessage',error.message);
        });
    }
    const resetPassword = e => {
        e.preventDefault()
        // alert('resetPassword email: ' + values.email)
        
        // dispatch(resetPasswordAsync(values))
        resetPasswordSendEmail()
        
    }
    // useEffect(()=>{
    //     if(isSignIn !== true){
    //         dispatch(listenAuthState())
    //     }
    // },[isSignIn,dispatch])
    return (
        <div className="page-container"> 
            {isSignIn === true
            ?
            <div>
                <Redirect push to='/signout' />  
            </div>
            :
            <div>
                <div style={styles.wraper}>
                <div>サインインしてください。</div>
                        <form onSubmit={resetPassword}>
                            <InputForm 
                                label='メールアドレス'
                                id='email'
                                name='email'
                                type='email'
                                value={values.email}//value={email} 
                                onChange={handleChange}// onChange={e => setEmail(e.target.value)}
                            />
                            <div>
                                <input type="submit"  value="パスワードリッセット"/>
                            </div>
                        </form>
                </div>
            </div>
            }           
        </div>
    )
}

export default ResetPassword
