import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateActivity} from '../../features/sports/sportsSlice'
import { useForm, Controller } from 'react-hook-form'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import MenuItem from '@mui/material/MenuItem'
import { SelectPhotos } from './index'
import { activityDataSet } from '../../utils/activityDataSet'

import {getSegments} from '../../defaultValue/defaultValue'
import './FormActivity.scss'

const FormActivity = ({profile,activity}) => {
    const dispatch = useDispatch()
    const [couseMap,setCouseMap] = useState(activity.couse_map)
    const [file,setFile] = useState(null)
    console.log('uploadfile',file);
    const {handleSubmit, control} = useForm()  
    // const activityData ={
    //     id:'',
    //     owner:profile,
    //     title:data.title,
    //     date:Timestamp.fromDate(data.datePicker),//js date --> firebase timestamp
    //     couse:data.couse,
    //     start:data.start,
    //     gole:data.gole,
    //     distance:data.distance,
    //     elevation:data.elevation,
    //     couse_map:'',
    //     couse_link:data.link,
    //     segment:data.segment,
    //     coment:data.coment,
    //     public:'private', 
    //     participation:[],
    //     done:false,
    //     garmin:'',
    //     relive:'',
    //     strava:'',
    //     file:file,
    //     create_at:null,
    //     update_at:null,
    //     starus:'idle',
    // }
    const onSubmit = data => {
        console.log('form input data ',data)
        //file check 
        //activity.couse_map set
        data = {
            ...data,
            id: activity.id,
            owner:profile,
            couse_map: activity.couse_map,
            public: activity.public,
            participation: activity.participation,
            done:activity.done,
            garmin:activity.garmin,
            relive:activity.relive,
            strava:activity.strava,
            file:file,
            create_at:activity.create_at,
            update_at:activity.update_at,
            starus:activity.starus,
        }
        const activityData = activityDataSet(data)
        console.log('activityDat--->',activityData);
        dispatch(updateActivity(activityData))
    }
    const segments = getSegments() 
    return (
        <div className='l-form-activitiy-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            name="datePicker"
            control={control}
            defaultValue={activity.date ? activity.date.toDate() : new Date()}
            render={({ field: { onChange, value }, fieldState: { error } }) =>
            
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="??????????????????"
                        value={value}
                        onChange={onChange}
                        // minDateTime={new Date()}
                        inputFormat="yyyy???MM???dd??? hh???mm??? a"
                    />
                </LocalizationProvider>
            }
            rules={{
                required:'????????????????????????????????????',
            }}
        />
    <Controller
        name='title'
        control={control}
        defaultValue={activity.title ? activity.title : ''}
        render={({field:{onChange,value},fieldState:{error}}) => 
            <TextField 
                id='title'
                label='????????????'
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
            />
        }
        rules={{
            required:'??????????????????????????????',
            maxLength : {
                value: 40,
                message: '??????????????????????????????????????????' 
            }
        }}
    />
    <Controller
        name="couse"
        control={control}
        defaultValue={activity.couse ? activity.couse : ''}
        render={({ field: { onChange, value }, fieldState: { error } }) =>
            <TextField
                id="couse" 
                label="?????????"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                fullWidth
                margin="normal"
                placeholder="???????????????????????????????????????????????????"
            />
        }
        rules={{
            required:'???????????????????????????',
            maxLength : {
                value: 40,
                message: '???????????????????????????????????????' 
            }
            
        }}
    />

    <Controller
        name='start'
        control={control}
        defaultValue={activity.start ? activity.start : ''}
        render={({field:{onChange,value},fieldState:{error}}) =>
            <TextField 
                id='start'
                label='??????????????????'
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
            />
        }
        rules={{
            required:'????????????????????????????????????',
            maxLength : {
                value: 40,
                message: '??????????????????????????????????????????' 
            }
        }}
    />
    <Controller
        name='gole'
        control={control}
        defaultValue={activity.gole ? activity.gole : ''}
        render={({field:{onChange,value},fieldState:{error}}) =>
            <TextField 
                id='start'
                label='???????????????'
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
            />
        }
        rules={{
            required:'?????????????????????????????????',
            maxLength : {
                value: 40,
                message: '???????????????????????????????????????' 
            }
        }}
    />
    <Controller
        name='distance'
        control={control}
        defaultValue={activity.distance? activity.distance : 50}
        render={({field:{onChange,value},fieldState:{error}}) =>
            <TextField 
                id='distance'
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
            minLength : {
                value: 0,
                message: '????????????Km???????????????' 
            }
        }}
    />
    <Controller
        name='elevation'
        control={control}
        defaultValue={activity.elevation? activity.elevation : 100}
        render={({field:{onChange,value},fieldState:{error}}) =>
            <TextField 
                id='elevation'
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
            minLength : {
                value: 0,
                message: '????????????Km???????????????' 
            }
        }}
    />
    {/* <Controller
        name='couse_map'
        control={control}
        defaultValue={couseMap ? couseMap : 'https://'}
        render={({field:{onChange,value},fieldState:{error}}) =>
            <TextField 
                id='couse_map'
                label='??????????????????URL'
                value={value}
                type='url'
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
                disabled
            />
        }
        rules={{
            pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: 'URL????????????????????????',
            },
        }}
    /> */}

    <SelectPhotos setFile={setFile} couseMap={couseMap} setCouseMap={setCouseMap}/>
    <Controller
        name='link'
        control={control}
        defaultValue={activity.couse_link ? activity.couse_link : 'https://'}
        render={({field:{onChange,value},fieldState:{error}}) =>
            <TextField 
                id='link'
                label='??????????????????URL'
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
        name='segment'
        control={control}
        defaultValue={activity.segment ? activity.segment : ''}
        render={({field:{onChange,value},fieldState:{error}}) =>
            <TextField 
                id='segment'
                label='????????????????????????'
                value={value}
                select
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
            >
                {segments.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                </TextField>
        }
        rules={{
            required:'???????????????????????????????????????',
        }}
    />

    <Controller
        name='coment'
        control={control}
        defaultValue={activity.coment ? activity.coment : ''}
        render={({field:{onChange,value},fieldState:{error}}) =>
            <TextField 
                id='coment'
                label='????????????'
                value={value}
                multiline
                rows={10}
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
                sx={{
                    maxWidth:600,
                }}
            />
        }
        rules={{
            maxLength : {
                value: 200,
                message: '???????????????????????????????????????' 
            }
        }}
    />
        <div>
            <Button type='submit' variant='outlined'>
                ??????
            </Button>
        </div>
        </form>
        </div>
    )
} 

export default FormActivity
