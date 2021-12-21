import React from 'react'
import './New.scss'

import { useDispatch } from 'react-redux'
import { addPuttering} from '../../features/puttering/putteringSlice';
import { Timestamp } from "firebase/firestore";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import CancelIcon from '@mui/icons-material/Cancel';
const styles = {
    open:{
        display:'block',
    },
    close:{
        display:'none', 
    }
 }

const New = ({isOpenNew,setIsOpenNew,user}) => {
    console.log('new')
    const dispatch = useDispatch() 
    const { handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input form data',data)
        console.log('input form data.datePicker',data.datePicker)
        const inputValues = {
            uid:user.uid,
            data:{
                course:data.course,
                datePicker:Timestamp.fromDate(data.datePicker),//js date --> firebase timestamp
                title:data.title
            },
            done:false,
        }
        dispatch(addPuttering(inputValues)) 
    }
    const handleClose = () => {
        setIsOpenNew(!isOpenNew)   
    }
    return (
        <div className="c-puttring-new-container" style={isOpenNew ? styles.open : styles.close}>
            <div className="c-puttring-new-header-title">
                <FiberNewIcon />
                <div className="c-puttring-new-header-close">
                    <h3>ポタリングを追加する</h3>
                    <CancelIcon onClick={handleClose}/>
                </div>
                
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) =>
                            <TextField
                                id="title" 
                                label="タイトル"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                fullWidth
                                margin="normal"
                            />
                        }
                        rules={{
                            required:'タイトルは必須です。',
                            maxLength : {
                                value: 20,
                                message: 'タイトルは２０文字以内です。' 
                            }
                        }}
                    />
                    <Controller
                        name="course"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) =>
                            <TextField
                                id="course" 
                                label="コース"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                fullWidth
                                margin="normal"
                            />
                        }
                        rules={{
                            required:'コースは必須です。',
                            maxLength : {
                                value: 40,
                                message: 'タイトルは４０文字以内です。' 
                            }
                            
                        }}
                    />
                    <div className="c-puttring-new-datetime-area">
                        <Controller
                            name="datePicker"
                            control={control}
                            defaultValue={new Date()}
                            render={({ field: { onChange, value }, fieldState: { error } }) =>
                            
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label="スタート日時"
                                        value={value}
                                        onChange={onChange}
                                        // minDateTime={new Date()}
                                        inputFormat="yyyy/MM/dd hh:mm a"
                                    />
                                </LocalizationProvider>
                            }
                            rules={{
                                required:'スタート日時は必須です。',
                            }}
                        />
                    </div>
                    <div className="c-puttring-new-submit-button-area"> 
                        <Button 
                                variant="outlined" 
                                type="submit">
                                    追加する 
                        </Button>
                    </div>
                </form>
            </div>
        </div>  
    )
}

export default New
