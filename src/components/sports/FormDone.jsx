import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {doneActivity} from '../../features/sports/sportsSlice'
import {useForm, Controller} from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
// import IconButton from '@mui/material/IconButton'
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import {Viewlocalfiles} from '../../components/sports/index'
import { Timestamp } from "firebase/firestore"; 
// const styles={
//     map:{
//         borderRadius: '16px',
//         width:"300px",
//         height:"200px",    
//         border:"1px solid gery", 
//     },
//     icon: {
//         marginRight: 8, 
//         height: 48,
//         width: 48
//     },
//     bottomMargin:{
//         marginBottom:"16px",
//     },
//     topMargin:{
//         marginTop:"16px",
//     }
// }

const FormDane = ({profile,activity}) => {
    console.log('formDone***********')
    const dispatch = useDispatch()
    const [photos,setPhotos] = useState([])
    console.log('photos',photos);
    const [file,setFile] = useState(null)

    const {handleSubmit, control} = useForm()
    const onSubmit = data =>{
        console.log('input from data', data) 
        
        data = {
            ...activity,
            doneDistance:data.doneDistance,
            doneElevation:data.doneElevation,
            doneAverage:data.doneAverage,
            // doneTimehh:data.doneTimehh,
            // doneTimemm:data.doneTimemm,
            doneRideTime:Timestamp.fromDate(data.doneRideTime),//js date --> firebase timestamp
            garmin:data.garmin, 
            relive:data.relive,
            strava:data.strava, 
            photos:photos,
            video:[], 
        }
        data.done = true
        console.log('data',data)
        dispatch(doneActivity(data))
        
    }
    // const uploadImage = async (event) => {
    //     const files = Array.from(event.target.files)
    //     files.forEach(file=>{
    //         const reader = new FileReader()
    //         reader.onload = (e) => {
    //             setPhotos(prevPhotos =>[...prevPhotos,e.target.result])
    //         }
    //         reader.readAsDataURL(file)
    //     })
    // }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='doneDistance'
                    control={control}
                    defaultValue={''}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneDistance'
                            label='??????(km)'
                            type="number"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error? error.message :null}
                            fullWidth
                            margin='normal'
                            sx={{
                                maxWidth:200,
                            }}
                        />
                    }
                    rules={{
                        required:'????????????????????????',
                        min : {
                            value: 0,
                            message: '????????????Km???????????????' 
                        }
                    }}
                />
                <Controller 
                    name='doneElevation'
                    control={control}
                    defaultValue={''}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneElevation'
                            label='????????????(m)'
                            type="number" 
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error? error.message :null}
                            fullWidth
                            margin='normal'
                            sx={{
                                maxWidth:200,
                            }}
                        />
                    }
                    rules={{
                        required:'??????????????????????????????',
                        min : {
                            value: 0,
                            message: '????????????Km???????????????' 
                        }
                    }}
                />
                <Controller
                    name='doneAverage'
                    control={control}
                    defaultValue={''}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneAverage'
                            label='????????????(km)'
                            type="number"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error? error.message :null}
                            fullWidth
                            margin='normal'
                            sx={{
                                maxWidth:200,
                            }}
                        />
                    }
                    rules={{
                        required:'??????????????????????????????',
                        min : {
                            value: 0,
                            message: '??????????????????Km???????????????' 
                        }
                    }}
                />
                {/* <Controller
                    name='doneTimehh'
                    control={control}
                    defaultValue={''}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneTimehh'
                            label='?????????(??????)'
                            type="number"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error? error.message :null}
                            fullWidth
                            margin='normal'
                            sx={{
                                maxWidth:200, 
                            }}
                        />
                    }
                    rules={{
                        required:'?????????(??????)???????????????',
                        minLength : {
                            value: 0,
                            message: '?????????(??????)???0??????????????????' 
                        }
                    }}
                />
                <Controller
                    name='doneTimemm'
                    control={control}
                    defaultValue={''}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneTimemm'
                            label='?????????(???)'
                            type="number"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error? error.message :null}
                            fullWidth
                            margin='normal'
                            sx={{
                                maxWidth:200,
                            }}
                        />
                    }
                    rules={{
                        required:'?????????(???)???????????????',
                        max : {
                            value: 59,
                            message: '?????????(???)???59??????????????????' 
                        },
                        min : {
                            value: 0,
                            message: '?????????(???)???0??????????????????' 
                        }
                    }}
                /> */}
                <Controller
                    name="doneRideTime"
                    control={control}
                    defaultValue={new Date(2000,0,1,0,0,0)}
                    render={({ field: { onChange, value }, fieldState: { error } }) =>
                    
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                            {/* <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="??????????????????"
                                value={value}
                                onChange={onChange}
                                // minDateTime={new Date()}
                                inputFormat="yyyy/MM/dd hh:mm a"
                            /> */}
                            {/* <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="DateTimePicker"
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                            /> */}
                            <TimePicker
                                renderInput={(params) => <TextField {...params} />}
                                label="?????????"
                                value={value}
                                onChange={onChange}
                                views={['hours', 'minutes', 'seconds']}
                                inputFormat="HH:mm:ss"
                                mask="__:__:__"
                                ampm={false}
                                openTo="hours"
                                toolbarTitle="????????????"
                            />
                            {/* <StaticTimePicker
                                renderInput={(params) => <TextField {...params} />}
                                displayStaticWrapperAs="mobile"
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                
                            /> */}
                        </LocalizationProvider>
                    }
                    rules={{
                        required:'????????????????????????????????????',
                    }}
                />
                <Controller
                    name='garmin'
                    control={control}
                    defaultValue={'https://conect'}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='garmin'
                            label='????????????'
                            value={value}
                            type='url'
                            onChange={onChange}
                            error={!!error}
                            helperText={error? error.message :null}
                            fullWidth
                            margin='normal'
                            // sx={{
                            //     maxWidth:300,
                            // }}
                        />
                    }
                    rules={{
                        // required:'??????????????????URL???????????????',
                        pattern: {
                            value: /^(ftp|http|https):\/\/[^ "]+$/,
                            message: 'URL????????????????????????',
                        },
                    }}
                />
                <Controller
                    name='relive'
                    control={control}
                    defaultValue={'https://relive'}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='relive'
                            label='????????????'
                            value={value}
                            type='url'
                            onChange={onChange}
                            error={!!error}
                            helperText={error? error.message :null}
                            fullWidth
                            margin='normal'
                            // sx={{
                            //     maxWidth:300,
                            // }}
                        />
                    }
                    rules={{
                        // required:'??????????????????URL???????????????',
                        pattern: {
                            value: /^(ftp|http|https):\/\/[^ "]+$/,
                            message: 'URL????????????????????????',
                        },
                    }}
                />
                <Controller
                    name='strava'
                    control={control}
                    defaultValue={'https://strava'}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='strava'
                            label='????????????'
                            value={value}
                            type='url'
                            onChange={onChange}
                            error={!!error}
                            helperText={error? error.message :null}
                            fullWidth
                            margin='normal'
                            // sx={{
                            //     maxWidth:300,
                            // }}
                        />
                    }
                    rules={{
                        // required:'??????????????????URL???????????????',
                        pattern: {
                            value: /^(ftp|http|https):\/\/[^ "]+$/,
                            message: 'URL????????????????????????',
                        },
                    }}
                />

                <Viewlocalfiles photos={photos} setPhotos={setPhotos}/>
                {/* <div>
                    ?????????????????????????????????
                    <IconButton style={styles.icon}>
                        <label>
                            <AddPhotoAlternateIcon fontSize="large"/>
                            <input style={{display:'none'}}
                                type="file"
                                id="image"
                                accept={"image/jpeg,image/png"}
                                multiple
                                onChange={(event) => uploadImage(event)}
                            />
                        </label>
                    </IconButton>
                </div>
                {photos.length > 0
                    ? 
                    photos.map((Photo,index)=>(
                        <div className="page-avaterContainer" key={index}> 
                            <img src={Photo} alt="couse map" style={styles.map} />
                        </div>
                    ))
                    : null
                } */}
                {/* <div>??????:{activity.distance}??????</div>
                <div>????????????:{activity.elevation}???</div>
                <div>?????????:</div>
                <div>????????????:</div>  */}
                <Button type='submit' variant='outlined'>????????????</Button>
            </form>
           
            
        </>
    )
}

export default FormDane
