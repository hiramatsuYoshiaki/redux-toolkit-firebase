import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../../features/auth/authSlice';
import { selectorPuttering, addPuttering, getPuttering } from '../../../features/puttering/putteringSlice';
// import { setData } from '../../../features/puttering/putteringSlice';
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { format} from 'date-fns'

const Puttering = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const putterings = useSelector(selectorPuttering)
    console.log('putterings',putterings)
    const { handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('createPuttering');
        console.log('input form data',data)
        
        const inputValues = {
            uid:user.uid,
            data:data,
            done:false,
        }
        // dispatch(setData(inputValues))
        dispatch(addPuttering(inputValues))
    }
    useEffect(()=>{
        if(user.uid !== null){
            dispatch(getPuttering(user.uid))
        }
    },[user.uid,dispatch])
    return (
        <div className="page-fexed-container"> 
            <h3>ポタリング</h3>
            <div>{user.username}</div>
            <div>{user.uid}</div>
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
                    }}
                />
                <Controller
                    name="datePicker"
                    control={control}
                    defaultValue={new Date()}
                    render={({ field: { onChange, value }, fieldState: { error } }) =>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                
                
                <div style={{marginTop:'8px'}}> 
                    <Button 
                        variant="outlined" 
                        size="small"
                        type="submit">
                            追加する 
                    </Button>
                </div>
                
            </form>
            <div>
                <div>store data</div>
                <div>
                    {putterings.length > 0 && 
                        putterings.map((puttering,index)=>(
                            <div key={index} >
                                <div>Title: {puttering.puttering.title}</div>
                                <div>Conrse: {puttering.puttering.course}</div>
                                <div>Start: {new Intl.DateTimeFormat().format(puttering.puttering.datePicker)}</div>
                                {/* <div>date-fns:{format(new Date(2014, 1, 11), 'yyyy/MM/dd/')}</div> */}
                                {/* <div>Start:{format(puttering.puttering.datePicker, 'yyyy/MM/dd/ HH:mm')}</div> */}
                            </div>
                        ))
                    }
                    
                </div>
            </div> 



        </div>
    )
}

export default Puttering
