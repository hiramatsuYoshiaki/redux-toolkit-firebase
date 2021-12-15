import React from 'react'
import { TextField, Button } from '@mui/material'
import {FormControl,InputLabel,Select, MenuItem} from '@mui/material'
import {FormGroup,FormControlLabel, Checkbox} from '@mui/material'
import { useForm, Controller } from "react-hook-form"
// import {useDispatch} from 'react-redux'

const ProfileUpdate = ({username,email}) => {
    // const dispatch = useDispatch()
    const { handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input form data', data);
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
