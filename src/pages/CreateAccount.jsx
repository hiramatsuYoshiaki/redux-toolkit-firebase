import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
// import {InputForm} from '../components/index'
// import {InputUser} from '../components/InputUser'
import {useDispatch,useSelector} from 'react-redux'
import {createAccountAsync, selectUser,listenAuthState,signOutAsync} from '../features/auth/authSlice'
import { getAuth, sendEmailVerification } from "firebase/auth";
import Stack from '@mui/material/Stack';
import {LoadingSpiner} from '../components/index'

import {TextField,Button} from '@mui/material'
import {useForm, Controller} from 'react-hook-form'

import './page.scss' 

const CreateAccount = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    // const isSignIn = useSelector(selectIsSignIn) 
    const profile = useSelector(selectUser)
    const [isVerification,setIsVerification] = useState(false)
    // const feilds = [
    //     {id:'01',label:"メールアドレス",name:'email',type:'email',},
    //     {id:'02',label:"パスワード",name:'password',type:'password',},
    //     {id:'03',label:"名前",name:'displayName',type:'text',},
    // ]
    // const [values, handleChange] = InputUser({ 
    //     email:"", 
    //     password:"",
    //     displayName:"",
    //     photoURL:"gs://redux-toolkit-firebase-bdbac.appspot.com/users/undraw_profile_pic_ic5t.png",
    //     emailVerified:false
    // })
    // const createAccount = (e) => {
    //     e.preventDefault()
    //     dispatch(createAccountAsync(values))  //firebase auth createAccount
    //     dispatch(listenAuthState())
    // }
    // react-hook-form 
    const {handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input form data', data)
        const inputValue = {
            email:data.email, 
            password:data.password,
            displayName:data.name,
            photoURL:"gs://redux-toolkit-firebase-bdbac.appspot.com/users/undraw_profile_pic_ic5t.png",
            emailVerified:false
        }
        console.log(inputValue);
        dispatch(createAccountAsync(inputValue))  //firebase auth createAccount
        // dispatch(listenAuthState())
    }

    //メールアドレスの有効化
    const handleClickEmailActivation = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log('sendEmailVerification ok')
            setIsVerification(true)
            dispatch(signOutAsync())
            history.push('/signin')
        })
        .catch((error) => {
            console.log('sendEmailVerification error')
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage) 
        })
    }
    const handleClickSingin = () => {
        dispatch(signOutAsync()) 
        history.push('/signin')
    }
    const handleClickHome = () => {
        history.push('/')
    }
    return (
        <div className="page-fexed-container">  

            {profile.isSignIn === true  
            ? 
                profile.isSignIn === true && profile.emailVerified
                ?
                <Stack direction="column" spacing={1}>
                    <div>サインインしています。</div>
                    <Button variant="outlined" onClick={handleClickHome}> 
                                HOMEへ
                    </Button>
                </Stack>　
                :
                    <Stack direction="column" spacing={1}>
                         
                        {isVerification 
                        ? 
                            <div>
                                <h6>{profile.email}に送信した、</h6> 
                                <div>メールを開いてください。</div> 
                                <h5>メールアドレスは確認済みです。</h5> 
                                <h5>新しいアカウントでログインできるようになりました</h5> 
                                <div>が表示されるとアカウントの有効化が完了します。</div> 
                                <Button variant="outlined" onClick={handleClickSingin}> 
                                    メールを確認しました。
                                </Button>
                            </div>
                        :   <div>
                            <div>アカウントを有効化してください。</div>
                            <h6>アカウント作成で登録した</h6> 
                            <h6>{profile.email}は</h6> 
                            <h6>まだ有効化されていません。</h6> 
                            <h6>[有効化]ボタンを押すと</h6> 
                            <h6>{profile.email}にメールを送信します。</h6> 
                            <h6>メールを開いてメールアドレスの確認をしてください。</h6> 
                            <Button variant="outlined" onClick={handleClickEmailActivation}> 
                                    有効化する
                            </Button>
                        </div>
                            
                        }
                       
                        
                    </Stack>　
            :
            <div>
                <div>アカウントを作成します。</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller 
                        name='email'
                        control={control}
                        defaultValue=''
                        render={({field:{onChange,value},fieldState:{error}})=>
                                <TextField 
                                    id='email'
                                    label='メールアドレス'
                                    type='email'
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    fullWidth
                                    margin='normal'
                                />
                        }
                        rules={{
                            required:'メールアドレスは必須です。',
                            maxLength : {
                                value: 40,
                                message: 'ユーザー名は4０文字以内です。' 
                            }
                        }}
                    />
                    <Controller 
                        name='password'
                        control={control}
                        defaultValue=''
                        render={({field:{onChange,value},fieldState:{error}})=>
                                <TextField 
                                    id='password'
                                    label='パスワード'
                                    type='password'
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    fullWidth
                                    margin='normal'
                                />
                        }
                        rules={{
                            required:'パスワードは必須です。',
                            minLength : {
                                value: 8,
                                message: 'ユーザー名は８文字以内です。' 
                            }
                        }}
                    />
                    <Controller 
                        name='name'
                        control={control}
                        defaultValue=''
                        render={({field:{onChange,value},fieldState:{error}})=>
                                <TextField 
                                    id='name'
                                    label='アカウント名'
                                    type='text'
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    fullWidth
                                    margin='normal'
                                />
                        }
                        rules={{
                            required:'名前は必須です。',
                            maxLength : {
                                value: 40,
                                message: 'ユーザー名は４０文字以内です。' 
                            }
                        }}
                    />
                    <div>
                        <Button type='submit' variant="outlined">
                            アカウント作成
                        </Button>
                    </div>
                </form>
            </div>
            }
            <div>
                {(profile.code === '' ||  profile.code === null) ? null :<div>{profile.msg}</div> }
            </div>
            
            <LoadingSpiner isLoading={profile.status}/> 
        </div>
    )
}

export default CreateAccount
