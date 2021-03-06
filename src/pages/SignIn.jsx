import React from 'react'
import {Link, Redirect} from 'react-router-dom'
// import {InputForm} from '../components/index'
// import {InputUser} from '../components/InputUser'
import {useDispatch,useSelector} from 'react-redux'
import {signInAsync, 
        selectUser, 
        // listenAuthState 
    } from '../features/auth/authSlice'
import {LoadingSpiner} from '../components/index'

// react-hook-form 
import {TextField,Button} from '@mui/material'
import {useForm, Controller} from 'react-hook-form'

import './page.scss'  

const SignIn = () => {
    // console.log('Singin -------------------')
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    // console.log('profile',profile);
    // const feilds = [
    //     {id:'01',label:"メールアドレス",name:'email',type:'email',},
    //     {id:'02',label:"パスワード",name:'password',type:'password',}
    // ]
    // const [values, handleChange] = InputUser({
    //     email:"",
    //     password:""
    // })
    // const signIn = (e) => {
    //     e.preventDefault()
    //     dispatch(signInAsync(values))　
    // }
    // react-hook-form 
    const {handleSubmit, control} = useForm()
    const onSubmit = data => {
        // console.log('input form data', data)
        // e.preventDefault()
        dispatch(signInAsync(data))
        // dispatch(listenAuthState()) 
    }
    // test code
    // const handleClickError = () => {
    //     console.log('handleClickError');
    //     const data = {email:'not_found_user@gmail.com', password:'user0000'}
    //     dispatch(signInAsync(data))
    // }

    // const handleClickAuthMailLink = () => {
    //     console.log('email link authenthication');
    // }
    // const handleClickSingin = () => {
    //     dispatch(listenAuthState())
    // }
    return (
        <div className="page-container"> 

           {profile.isSignIn === true && profile.emailVerified === true
            ? 
            <Redirect push to="/" /> 
            :profile.isSignIn === true && profile.emailVerified === false
            ?
            <div>
                <div>アカウントを有効化してください。</div>
                <Link to='/createaccount'>
                    <Button variant='outlined'>
                            アカウントを有効化する。
                    </Button>
                </Link>
                {/* <div onClick={handleClickSingin}>
                    <Button variant='outlined'>
                        メールを確認しました。
                    </Button>
                </div> */}
            </div>
            :
            <div>
                {/* <div>
                    <div>サインインしてください。</div>

                    <form onSubmit={signIn}>
                        {feilds.map(field=>(
                            <InputForm 
                                key={field.id} 
                                label={field.label}
                                id={field.name}
                                name={field.name}
                                type={field.type}
                                value={values[field.name]}//value={email} 
                                onChange={handleChange}// onChange={e => setEmail(e.target.value)}
                            />
                        ))}
                        <div>
                            <input type="submit"  value="サインイン"/>
                        </div>
                    </form>
                </div> */}
                {/* react-fook-from */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Controller
                                name="email"
                                control={control}　
                                defaultValue=""
                                render={({field:{onChange,value},fieldState:{error}})=>
                                    <TextField 
                                        id="email"
                                        label="メールアドレス"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        margin="normal"
                                    />
                                }
                                rules={{
                                    required:'メールアドレスは必須です。',
                                    maxLength : {
                                        value: 40,
                                        message: 'メールアドレスは4０文字以内です。' 
                                    },
                                    pattern: {
                                        // value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'メールアドレスの形式が不正です',
                                    },
                                }}
                                
                            />
                        </div> 
                        <div>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({field:{onChange,value},fieldState:{error}})=>
                                    <TextField 
                                        id="password"
                                        label="パスワード"
                                        type="password"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        margin="normal"
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
                        </div>
                        <Button type='submit' variant='outlined'>
                        サインイン
                        </Button>
                    </form>
                </div>
                {/* test code ----------------------------------------------*/}
                {/* <div>
                    <button onClick={handleClickError}>
                        サインイン　エラー　テスト
                    </button>
                </div> */}


                <div>
                    {(profile.code === '' ||  profile.code === null) ? null :<div>{profile.msg}</div> }
                </div>
                {/* <br />
                <div onClick={handleClickAuthMailLink}>
                    <Button>メールリンク認証</Button>
                </div> */}
                <br />
                <br />
                <div>
                    <Link to='/createaccount'>
                        <Button>アカウント作成</Button>
                    </Link>
                </div>
                <div>
                    <Link to='/resetpassword'>
                        <Button>パスワードリセット</Button>
                    </Link>
                </div>
            </div>
           }
           <LoadingSpiner isLoading={profile.status}/>  
        </div>
    )
}

export default SignIn 
