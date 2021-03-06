import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../../features/auth/authSlice';
import { selectorPuttering,  
         getPuttering } from '../../../features/puttering/putteringSlice';
// import { setData } from '../../../features/puttering/putteringSlice';
// import { useForm, Controller } from "react-hook-form";
// import { TextField, Button } from '@mui/material';
// import { PageHeader} from '../../../components/layout/index'
import { New, 
         UnFinishList, 
         FinishList, 
         Header,  
         BottomNav} from '../../../components/puttering/index' 

// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateTimePicker from '@mui/lab/DateTimePicker';
// import { format} from 'date-fns'

const Puttering = () => { 
    console.log('putterings')
    const dispatch = useDispatch() 
    const user = useSelector(selectUser)

    const putterings = useSelector(selectorPuttering)
    console.log('useSelector putterings:',putterings)

    const [isOpenNew, setIsOpenNew] = useState(false)
    const [isOpenUnFinish, setIsOpenUnFinish] = useState(true)
    const [isOpenFinish, setIsOpenFinish] = useState(false)
    
    // const { handleSubmit, control} = useForm()
    // const onSubmit = data => {
    //     // console.log('createPuttering');
    //     // console.log('input form data',data)
    //     const inputValues = {
    //         uid:user.uid,
    //         data:data,
    //         done:false,
    //     }
    //     // dispatch(setData(inputValues))
    //     dispatch(addPuttering(inputValues))
    // }
    useEffect(()=>{
        if(user.uid !== null){
            dispatch(getPuttering(user.uid))
        }
    },[user.uid,dispatch])
   
    // const starttime = (dateTime) =>{
    //     // console.log('dateTime firestore',dateTime);
    //     const jsTimestamp = dateTime.toDate()
    //     // console.log('jsTimestamp javascript',jsTimestamp);
    //     const fromtDateTime = format(jsTimestamp, 'yyyy/MM/dd/ HH:mm')
    //     return  fromtDateTime
    // }
    
    return (
        <div className="page-fexed-container"> 
            
            {/* <PageHeader pageTitle="???????????????"??? 
                user={user} 
                isOpenNew={isOpenNew}
                isOpenUnFinish={isOpenUnFinish}
                isOpenFinish={isOpenFinish}
            /> */}
            <Header pageTitle="?????????????????????"??? 
                user={user} 
                isOpenNew={isOpenNew}
                isOpenUnFinish={isOpenUnFinish}
                isOpenFinish={isOpenFinish}
                setIsOpenNew={setIsOpenNew}
                setIsOpenUnFinish={setIsOpenUnFinish}
                setIsOpenFinish={setIsOpenFinish}
            /> 
            <New isOpenNew={isOpenNew} setIsOpenNew={setIsOpenNew} user={user}/>
            <UnFinishList isOpenUnFinish={isOpenUnFinish} setIsOpenUnFinish={setIsOpenUnFinish} putterings={putterings} user={user}/>
            <FinishList isOpenFinish={isOpenFinish} setIsOpenFinish={setIsOpenFinish} putterings={putterings} user={user}/>
            <BottomNav 
                isOpenNew={isOpenNew}
                isOpenUnFinish={isOpenUnFinish}
                isOpenFinish={isOpenFinish}
                setIsOpenNew={setIsOpenNew}
                setIsOpenUnFinish={setIsOpenUnFinish}
                setIsOpenFinish={setIsOpenFinish}
            />  
            
 
         
            {/* <h3>???????????????</h3>
            <div>{user.username}</div>
            <div>{user.uid}</div> */}
            {/* <div> */}
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) =>
                        <TextField
                            id="title" 
                            label="????????????"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            margin="normal"
                        />
                    }
                    rules={{
                        required:'??????????????????????????????',
                        maxLength : {
                            value: 20,
                            message: '??????????????????????????????????????????' 
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
                            label="?????????"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            margin="normal"
                        />
                    }
                    rules={{
                        required:'???????????????????????????',
                        maxLength : {
                            value: 40,
                            message: '??????????????????????????????????????????' 
                        }
                        
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
                                label="??????????????????"
                                value={value}
                                onChange={onChange}
                                // minDateTime={new Date()}
                                inputFormat="yyyy/MM/dd hh:mm a"
                            />
                        </LocalizationProvider>
                    }
                    rules={{
                        required:'????????????????????????????????????',
                    }}
                />
                <div style={{marginTop:'8px'}}> 
                    <Button 
                        variant="outlined" 
                        size="small"
                        type="submit">
                            ???????????? 
                    </Button>
                </div>
                
            </form> */}
            {/* </div> */}
            {/* <div>
                <div>store data</div>
                <div>
                    {putterings.length > 0 && 
                        putterings.map((puttering,index)=>(
                            <div key={index} >
                                <div>??????????????????: {puttering.puttering.title}</div>
                                <div>?????????: {puttering.puttering.course}</div>
                                <div>??????????????????{starttime(puttering.puttering.datePicker)}</div>
                            </div>
                        ))
                    }
                </div>
            </div>  */}
        </div>
    )
}

export default Puttering
