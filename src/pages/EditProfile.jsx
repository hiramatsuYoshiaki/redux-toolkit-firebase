import React from 'react'
import { TextField, Button } from '@mui/material';
import { useForm, Controller } from "react-hook-form";

const EditProfile = () => {
    const { handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input form data',data) 
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
        <div className="page-fexed-container">  
            <div>UI ライブラリを使用してする</div>
            <div>バリデーションを適用する</div>
            <div>エラーを適用する</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                            name="username"
                            control={control}
                            defaultValue=""
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
                                    value: 20,
                                    message: 'ユーザー名は２０文字以内です。' 
                                }
                            }}
                    />
                    <Controller
                            name="email"
                            control={control}
                            defaultValue=""
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
                                    value: 20,
                                    message: 'メールアドレスは２０文字以内です。', 
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
            <div>
                profire update
            </div>
            <div>
                reset password
            </div>

            {/* <div>
                <div>Avater</div>
                <div>アバター変更</div>
            </div>
            <div>
                <div>email:</div>
                <div>メール変更</div>
            </div>
            <div>username:</div>
            <div>自己紹介:</div> */}
        </div>
    )
}

export default EditProfile
