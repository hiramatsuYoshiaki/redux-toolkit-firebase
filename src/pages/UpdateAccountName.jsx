import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { selectUser,updateUsernameAsync } from '../features/auth/authSlice'
import {Button, TextField} from '@mui/material'
import {useForm, Controller} from 'react-hook-form'


const UpdateAccountName = () => {
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    console.log(profile);
    const {handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input-form-data',data)
        dispatch(updateUsernameAsync(data.username))
    }
    return (
        <div className="page-fexed-container"> 

        {(profile.isSignIn === true && profile.emailVerified === true) 
            ? 
            <div>
            <div>アカウント名を変更します。</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='username'
                    control={control}
                    defaultValue={profile.username}
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

        </div>
    )
}

export default UpdateAccountName
