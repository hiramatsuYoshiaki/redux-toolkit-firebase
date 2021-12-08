import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { selectUser } from '../features/auth/authSlice'
import {Button, TextField} from '@mui/material'
import {useForm, Controller} from 'react-hook-form'


const UpdateAccountName = () => {
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    console.log(profile);
    const {handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input-form-data',data)
    }
    return (
        <div className="page-fexed-container"> 
            {profile.username}
            <div>アカウント名を変更します。</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='username'
                    control={control}
                    defaultValue={profile.usename}
                    render={({ field: { onChange, value }, fieldState: { error } }) =>
                                <TextField
                                    id="username" 
                                    label="ユーザー名"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    fullWidth
                                    margin="normal"
                                />
                            } 
                            rules={{
                                required:'ユーザー名は必須です。',
                                maxLength : {
                                    value: 50,
                                    message: 'ユーザー名は５０文字以内です。' 
                                }
                            }}
                />
                <div>
                   <Button type='submit'>
                       変更する
                   </Button>
                </div>
            </form>

        </div>
    )
}

export default UpdateAccountName
