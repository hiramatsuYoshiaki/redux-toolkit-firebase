import React,{useState} from 'react'
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
    const [couseMap,setCouseMap] = useState(activity.couse_map)
    const [file,setFile] = useState(null)
    console.log('uploadfile',file);
    const {handleSubmit, control} = useForm()  
    const onSubmit = data => {
        console.log('form input data ',data)
        
        const activityDat = activityDataSet(profile,data,file)
        console.log('activityDat--->',activityDat);
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
                        label="スタート日時"
                        value={value}
                        onChange={onChange}
                        // minDateTime={new Date()}
                        inputFormat="yyyy年MM月dd日 hh時mm分 a"
                    />
                </LocalizationProvider>
            }
            rules={{
                required:'スタート日時は必須です。',
            }}
        />
    <Controller
        name='title'
        control={control}
        defaultValue={activity.title ? activity.title : ''}
        render={({field:{onChange,value},fieldState:{error}}) => 
            <TextField 
                id='title'
                label='タイトル'
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
            />
        }
        rules={{
            required:'タイトルは必須です。',
            maxLength : {
                value: 40,
                message: 'タイトルは４０文字以内です。' 
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
                label="コース"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                fullWidth
                margin="normal"
                placeholder="スタート地点～経由地点～ゴール地点"
            />
        }
        rules={{
            required:'コースは必須です。',
            maxLength : {
                value: 40,
                message: 'コースは４０文字以内です。' 
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
                label='スタート場所'
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
            />
        }
        rules={{
            required:'スタート地点は必須です。',
            maxLength : {
                value: 40,
                message: 'スタートは４０文字以内です。' 
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
                label='ゴール地点'
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
            />
        }
        rules={{
            required:'ゴール地点は必須です。',
            maxLength : {
                value: 40,
                message: 'ゴールは４０文字以内です。' 
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
                label='距離(km)'
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
            required:'距離は必須です。',
            minLength : {
                value: 0,
                message: '距離は０Km以上です。' 
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
                label='獲得標高(m)'
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
            required:'獲得標高は必須です。',
            minLength : {
                value: 0,
                message: '距離は０Km以上です。' 
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
                label='コースマップURL'
                value={value}
                type='url'
                onChange={onChange}
                error={!!error}
                helperText={error? error.message :null}
                fullWidth
                margin='normal'
            />
        }
        rules={{
            pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: 'URLの形式が不正です',
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
                label='コースリンクURL'
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
            // required:'コースリンクURLは必須です',
            pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: 'URLの形式が不正です',
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
                label='セグメントタイプ'
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
            required:'セグメントタイプは必須です',
        }}
    />

    <Controller
        name='coment'
        control={control}
        defaultValue={activity.coment ? activity.coment : ''}
        render={({field:{onChange,value},fieldState:{error}}) =>
            <TextField 
                id='coment'
                label='コメント'
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
                message: '距離は２００文字以内です。' 
            }
        }}
    />
        <div>
            <Button type='submit' variant='outlined'>
                SUBMIT
            </Button>
        </div>
        </form>
        </div>
    )
}

export default FormActivity
