import React, {useState} from 'react'
import {  useSelector } from 'react-redux'
import {selectUser} from '../features/auth/authSlice'
// import { getAuth, isSignInWithEmailLink,  reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth"
import {getAuth, reauthenticateWithCredential, EmailAuthProvider} from 'firebase/auth'
import {Link} from 'react-router-dom'
import {Button, TextField} from '@mui/material';
import {useForm, Controller} from 'react-hook-form'
import {EmailUpdateForm} from '../components/account/index'
import {Alerts, Confirm} from '../components/dialog/index'
import {LoadingSpiner} from '../components/index'



const UpdateEmail = () => {
    // const history = useHistory()
    // const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    console.log(profile);
    

    // const[isAuth, setIsAuth] = useState(false)
    // const handleClick= ()=>{
    //     console.log('handleClick');
    //     const auth = getAuth()
    //     if (isSignInWithEmailLink(auth, window.location.href)) {
    //         let email = window.localStorage.getItem('emailForSignIn')
    //         if (!email) {
    //             email = window.prompt('確認のために現在のメールアドレスを入力してください');
    //         }
    //         const credential = EmailAuthProvider.credentialWithLink(
    //             email, window.location.href)
    //         reauthenticateWithCredential(auth.currentUser, credential)
    //         .then((usercred) => {
    //             console.log('reauthenticateWithCredential----------------------------');
    //             window.localStorage.removeItem('emailForSignIn');// Clear email from storage.
    //             setIsAuth(true)
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code
    //             const errorMessage = error.message
    //             console.log(errorCode)
    //             console.log(errorMessage)
    //             alert('ユーザーの再認証ができませんでした。アカウント画面からメールアドレスの変更をしてください。')

    //             history.push('/account')
    //         })
    //     }else{
    //         alert('ユーザーの再認証ができませんでした。アカウント画面からメールアドレスの変更をしてください。')
    //         history.push('/account')
    //     }

    const [open, isOpen] = useState(false)
    const [openConfirm, isOpenConfirm] = useState(false)
    const [resultConfirm, setResultConfirm] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
   
    const {handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input form data', data)
        // .......
        const auth = getAuth()
        const user = auth.currentUser
        const credential = EmailAuthProvider.credential(
            user.email, 
            data.password
        )
        reauthenticateWithCredential(user,credential)
        .then(()=>{
            console.log('reauthenticationWithCredential ok')
            isOpenConfirm(true)
        })
        .catch((error)=>{
            console.log('reauthenticationWithCredential error')
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage) 
            let msg = ''
            if(error.code === 'auth/wrong-password') {
                msg ='パスワードが間違っています'
            }else{
                msg =error.message
            }
            setErrorMsg(msg)
            isOpen(true)
        })
        // .......
    }
    // const handleUpdateEmail = () => {
    //     console.log('handleUpdateEmail')
    //     alert('update email adress')
    // }

    return (
        <div className="page-fexed-container">
             {profile.isSignIn === true && profile.emailVerified === true
            ? 
            <div>
                {resultConfirm
                ?
                <div>
                    <EmailUpdateForm /> 
                    {/* <div onClick={handleUpdateEmail}>
                        <Button  variant='outlined'>
                            メールアドレス変更
                        </Button>
                    </div> */}
                </div>
                
                :
                <div>
                    <div>パスワードを入力してください。</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Controller 
                            name='password'
                            control={control}
                            defaultValue=''
                            render={({field:{onChange,value},fieldState:{error}})=>
                                <TextField 
                                    id='password'
                                    type='password'
                                    label='パスワード'
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error?error.message:null}
                                    fullWidth
                                    margin='normal'
                                />
                            }
                            rules={{
                                required:'パスワードは必須です。',
                                minLength : {
                                    value: 8,
                                    message: 'ユーザー名は8文字以上です。' 
                                }
                            }}
                                
                            />
                            <Button type='submit'>
                                メールアドレスの変更を始める。
                            </Button>
                        </div>
                    </form>
                </div> 
                }
                
                <Alerts open={open} 
                        isOpen={isOpen} 
                        title='再認証ができませんでした' 
                        message={errorMsg}/>
                <Confirm  
                    openConfirm={openConfirm} 
                    isOpenConfirm={isOpenConfirm}
                    title='メールアドレスの変更'
                    message='メールアドレスの変更をしますか？'
                    result={resultConfirm}
                    setResultConfirm={setResultConfirm}
                />

            </div>
            :
            <div>
                <div>サインインしてください。</div>
                <div>
                    <Link to='/signin'>
                        <Button variant='outlined'>サインイン</Button>
                    </Link>
                </div>
                
            </div>
            }
            
            {/* {isAuth 
                ? 
                <div>
                    <EmailUpdateForm />
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
            } */}
        <LoadingSpiner isLoading={profile.status}/>
        </div>
    )   
}

export default UpdateEmail
