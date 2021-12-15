import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
// import {InputForm} from '../components/index'
// import {InputUser} from '../components/InputUser'
import {useSelector,useDispatch} from 'react-redux'
import {signOutAsync,selectUser} from '../features/auth/authSlice'
import { useHistory, Link } from 'react-router-dom'
import './page.scss'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {Button, TextField} from '@mui/material'
import {useForm, Controller} from 'react-hook-form'
import {LoadingSpiner} from '../components/index'

// const styles={
//     wraper:{
//         width:"100%",
//         padding:".8rem",
//     }
// }

const ResetPassword = () => {
    console.log('reset password start----------------++++++');
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    const history = useHistory()
    const [isSended,setIsSended] = useState(false)
    const [inputEmail,setInputEmail] = useState('')
    //react-hook from
    const {handleSubmit, control} = useForm()
    // const resetPasswordSendEmail = (email) => {
    //     console.log('resetPasswordSendEmail')
    //     const auth = getAuth();
    //     sendPasswordResetEmail(auth, email)
    //     .then(() => {
    //         console.log('Password reset email sent!')
    //         setIsSended(true)
    //         dispatch(signOutAsync())
    //         history.push('/signin')
    //     })
    //     .catch((error) => {
    //         console.log('error code',error.code);
    //         console.log('errorMessage',error.message)
    //     });
    // }
    // const onSubmit = data => {
    //     console.log('input-form-data',data)
    //     setInputEmail(data.email)
    //     resetPasswordSendEmail(data.email)
    // }
    const resetPasswordSendEmail = (email) =>{
        return new Promise((resolve,reject)=>{
            console.log('resetPasswordSendEmail++++++++++++++++++++++++++++')
            const auth = getAuth();
            sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Password reset email sent!++++++++++++++++++++++++')
                setIsSended(true)
                dispatch(signOutAsync())
                resolve ()
            })
            .catch((error) => {
                console.log('error code',error.code);
                console.log('errorMessage',error.message)
                reject()
            });
        })
    }
    const onSubmit = async(data) => {
        console.log('input-form-data',data)
        try{
            console.log('try++++++++++++++++++++++++++++++++++++')
            await resetPasswordSendEmail(data.email)
            setInputEmail(data.email)
            console.log('push /singin+++++++++++++++++++++++++++')
            // history.push('/signin')
        }catch(error){
            console.log('catch',error);
        }
    }
    




    // const [values, handleChange] = InputUser({
    //     email:""
    // })
    // const resetPasswordSendEmail = () => {
    //     console.log('resetPasswordSendEmail');
    //     const auth = getAuth();
    //     sendPasswordResetEmail(auth, values.email)
    //     .then(() => {
    //         console.log('Password reset email sent!');
    //         alert('パスワードリセット用のメールを' + 
    //             values.email + 
    //             'に送信しました。メールから新しいパスワードを設定してください。' )
    //         history.push('/signin')
    //     })
    //     .catch((error) => {
    //         console.log('error code',error.code);
    //         console.log('errorMessage',error.message);
    //     });
    // }
    // const resetPassword = e => {
    //     e.preventDefault()
    //     // dispatch(resetPasswordAsync(values))
    //     resetPasswordSendEmail()
        
    // }
    return (
        <div className="page-container"> 
            {profile.isSignIn === false
            ?
            <div>
                <div>サインインしてください</div>
                <Link to='/signin'>
                    <Button  variant="outlined">
                        サインイン
                    </Button>
                </Link>
            </div>
            :
            <div>
                {/* <div style={styles.wraper}>
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
                </div> */}
                <h3>パスワードリセット</h3>
                <h5>パスワードリセット用のメールが送信されます。</h5>
                <h5>送信されたメールのリンクをクリックして、</h5>
                <h5>パスワードを再設定してください。</h5>
                <h5>新しいパスワードでサインインできます。</h5>
                <div>メールアドレスを入力してください</div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Controller 
                                name='email'
                                defaultValue=''
                                control={control}
                                render={({field:{onChange,value},fieldState:{error}})=>
                                    <TextField
                                        id='email'
                                        value={value} 
                                        label='メールアドレス'
                                        // type='email'
                                        onChange={onChange} 
                                        //onChange={(e) => onChange(parseInt(e.target.value))} 
                                        error={!!error}
                                        helperText={error?error.message:null}
                                        margin='normal'
                                    />
                                }
                                rules={{
                                    required:'メールアドレスは必須です。',
                                    maxLength : {
                                        value: 40,
                                        message: 'メールアドレスは4０文字以内です。' 
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'メールアドレスの形式が不正です',
                                    },
                                }}
                            />
                            <div>
                                <Button type='submit' variant="outlined">
                                    リセットメール送信
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
            }       
            <LoadingSpiner isLoading={profile.status}/>      
        </div>
    )
}

export default ResetPassword
