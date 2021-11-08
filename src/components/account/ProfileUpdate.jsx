import React from 'react'
import { TextField, Button } from '@mui/material'
import { useForm, Controller } from "react-hook-form"
import {useDispatch} from 'react-redux'
import {updateProfileAsync, updateEmailAsync} from '../../features/auth/authSlice'

const ProfileUpdate = ({username,email}) => {
    const dispatch = useDispatch()
    const { handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input form data',data) 
        if(username !== data.username){
            console.log('chenge username');
            console.log('username',username);
            console.log('data.username',data.username);
            dispatch(updateProfileAsync(data.username))
        }else{
            console.log('not change username');
        }
        if(email !== data.email){
            console.log('chenge email');
            console.log('email',email);
            console.log('data.email',data.email);
            dispatch(updateEmailAsync(data.email))
        }else{
            console.log('not change email ');
        }
        // const inputValues = {
        //     uid:user.uid,
        //     data:{
        //         course:data.course,
        //         datePicker:Timestamp.fromDate(data.datePicker),//js date --> firebase timestamp
        //         title:data.title
        //     },
        //     done:false,
        // }
        // dispatch(addPuttering(inputValues)) 
    }
    return (
        <div >  
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                            name="username"
                            control={control}
                            defaultValue={username}
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
                    <Controller
                            name="email"
                            control={control}
                            defaultValue={email}
                            render={({ field: { onChange, value }, fieldState: { error } }) =>
                                <TextField
                                    id="email" 
                                    label="メールアドレス"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    fullWidth
                                    margin="normal"
                                />
                            }
                            rules={{
                                required:'メールアドレスは必須です。',
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
                    <Button type='submit'>
                        SUBMIT
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ProfileUpdate
