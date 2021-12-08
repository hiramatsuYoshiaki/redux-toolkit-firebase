import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import {TextField, Button} from '@mui/material'
import {useForm, Controller} from 'react-hook-form'
import {getAuth, reauthenticateWithCredential, EmailAuthProvider} from 'firebase/auth'
import {useDispatch, useSelector} from 'react-redux'
import {selectUser, removeAccountAsync} from '../features/auth/authSlice'
import {Alerts, Confirm} from '../components/dialog/index'

const RemoveAccount = () => {
    const dispatch = useDispatch()
    const profile = useSelector(selectUser) 
    const [errorMsg, setErrorMsg] = useState('')

    //error dialog
    const [open, isOpen] = useState(false)
    // const handleClickOpen = () => {
    //     isOpen(true)
    // }
    //confirm dialog
    const [openConfirm, isOpenConfirm] = useState(false)
    const [resultConfirm, setResultConfirm] = useState(false)


    const {handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input form data', data)
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
    }
    const handleRemoveAccount = () => {
        dispatch(removeAccountAsync()) 
    }
    return (
        <div className="page-fexed-container" >
            {profile.isSignIn === true && profile.emailVerified === true
            ? 
            <div>
                {resultConfirm
                ?
                <div onClick={handleRemoveAccount}>
                    <Button  variant='outlined'>
                        アカウントの削除
                    </Button>
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
                                アカウントの削除を始める。
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
                    title='アカウントを削除'
                    message='アカウントを削除しますか？'
                    result={resultConfirm}
                    setResultConfirm={setResultConfirm}
                />
            </div>
            :
            <Redirect push to="/account" /> 
            }
        </div>
    )
}

export default RemoveAccount
