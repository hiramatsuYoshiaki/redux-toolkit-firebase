import React from 'react'
import { TextField, Button } from '@mui/material'
import {FormControl,InputLabel,Select, MenuItem} from '@mui/material'
import {FormGroup,FormControlLabel, Checkbox} from '@mui/material'
import { useForm, Controller } from "react-hook-form"
import {useDispatch} from 'react-redux'
import {updateProfileAsync, updateEmailAsync} from '../../features/auth/authSlice'

const ProfileUpdate = ({username,email}) => {
    const dispatch = useDispatch()
    const { handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input form data', data);
    }
　
    // const onSubmit = data => { 
    //     console.log('input form data',data)  
    //     if(username !== data.username){  
    //         // console.log('chenge username');
    //         // console.log('username',username);
    //         // console.log('data.username',data.username);
    //         dispatch(updateProfileAsync(data.username))
    //     }else{
    //         console.log('not change username');
    //     } 
    //     if(email !== data.email){
    //         console.log('chenge email');
    //         console.log('email',email);
    //         console.log('data.email',data.email);
    //         // alert('パスワードを入力してください')
    //         // const text = 'パスワードを入力してください'
    //         // const value = null
    //         // const result = window.prompt( text, value )
    //         // console.log(result);
    //         const inputValue = {
    //             email:data.email,
    //             // singinEmail:email,
    //             // pass: result
    //         }

    //         dispatch(updateEmailAsync(inputValue))
            
    //     }else{
    //         console.log('not change email ');
    //     }
    //     // const inputValues = {
    //     //     uid:user.uid,
    //     //     data:{ 
    //     //         course:data.course,
    //     //         datePicker:Timestamp.fromDate(data.datePicker),//js date --> firebase timestamp
    //     //         title:data.title
    //     //     },
    //     //     done:false,
    //     // }
    //     // dispatch(addPuttering(inputValues)) 
    // }
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
                                name='age'
                                defaultValue={10}
                                control={control}
                                render={
                                    ({ field }) => 
                                    <FormControl fullWidth>
                                        <InputLabel >Age</InputLabel>
                                        <Select {...field} label="Age">
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        </Select>
                                    </FormControl>
                                  }
                            />
                            <FormGroup>
                                <Controller 
                                    name='checkBoxGroup1'
                                    defaultValue={false}
                                    control={control}
                                    render={({field:{onChange,value}}) => 
                                        <FormControlLabel 
                                            control={<Checkbox 
                                                    value={value}
                                                    onChange={onChange}
                                                    />} 
                                            label="Label1" 
                                        />
                                    }
                                />
                                <Controller  
                                    name='checkBoxGroup2'
                                    defaultValue={false}
                                    control={control}
                                    render={({field:{onChange,value}}) => 
                                        <FormControlLabel 
                                            control={<Checkbox 
                                                    value={value}
                                                    onChange={onChange}
                                                    />} 
                                            label="Label2" 
                                        />
                                    }
                                />
                            </FormGroup>

                    
                    <Button type='submit'>
                        変更
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ProfileUpdate
