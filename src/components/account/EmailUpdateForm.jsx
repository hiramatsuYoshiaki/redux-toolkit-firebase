import React from 'react'
import {useForm, Controller} from  'react-hook-form' 
import { Button,TextField } from '@mui/material'
import { useDispatch} from 'react-redux'
import { updateEmailAsync } from '../../features/auth/authSlice'
import {useHistory} from 'react-router-dom'


const EmailUpdateForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { handleSubmit, control} = useForm()
    const onSubmit = data => {
        // console.log('input form data',data) 
        // alert(data.email)
        dispatch(updateEmailAsync(data.email))
        alert('ログイン用のメールアドレスが変更されました。')
        history.push('/account')
    }  
    return (
        <div>
            <div>新しいメールアドレス</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='email'
                    control={control}
                    defaultValue=''
                    render={({field:{onChange,value},fieldState:{error}})=>
                        <TextField 
                            id='email'
                            label='メールアドレス'
                            value={value}
                            onChange={onChange}
                            error={error}
                            helperText={error ? error.message : null}
                            fullWidth
                            margin='normal'
                        />
                    }
                    rules={{
                        required:'メールアドレスは必須です',
                        maxLength : {
                            value: 50,
                            message: 'メールアドレスは50文字以内です。', 
                        },
                        pattern : {
                            value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/,
                            message: 'メールアドレスの形式が無効です。',
                        }
                        
                    }}
                />
                <div>
                    <Button type='submit'>
                        変更
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EmailUpdateForm
