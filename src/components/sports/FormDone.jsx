import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {doneActivity} from '../../features/sports/sportsSlice'
import {useForm, Controller} from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
// import IconButton from '@mui/material/IconButton'
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import {Viewlocalfiles} from '../../components/sports/index'
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
            doneTimehh:data.doneTimehh,
            doneTimemm:data.doneTimemm,
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
                    defaultValue={0}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneDistance'
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
                        min : {
                            value: 0,
                            message: '距離は０Km以上です。' 
                        }
                    }}
                />
                <Controller 
                    name='doneElevation'
                    control={control}
                    defaultValue={0}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneElevation'
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
                        min : {
                            value: 0,
                            message: '距離は０Km以上です。' 
                        }
                    }}
                />
                <Controller
                    name='doneAverage'
                    control={control}
                    defaultValue={0}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneAverage'
                            label='平均速度(km)'
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
                        required:'平均速度は必須です。',
                        min : {
                            value: 0,
                            message: '平均速度は０Km以上です。' 
                        }
                    }}
                />
                <Controller
                    name='doneTimehh'
                    control={control}
                    defaultValue={0}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneTimehh'
                            label='タイム(時間)'
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
                        required:'タイム(時間)必須です。',
                        minLength : {
                            value: 0,
                            message: 'タイム(時間)は0分以上です。' 
                        }
                    }}
                />
                <Controller
                    name='doneTimemm'
                    control={control}
                    defaultValue={0}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='doneTimemm'
                            label='タイム(分)'
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
                        required:'タイム(分)必須です。',
                        max : {
                            value: 59,
                            message: 'タイム(分)は59分以内です。' 
                        },
                        min : {
                            value: 0,
                            message: 'タイム(分)は0分以上です。' 
                        }
                    }}
                />
                <Controller
                    name='garmin'
                    control={control}
                    defaultValue={'https://conect'}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='garmin'
                            label='ガーミン'
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
                    name='relive'
                    control={control}
                    defaultValue={'https://relive'}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='relive'
                            label='リライブ'
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
                    name='strava'
                    control={control}
                    defaultValue={'https://strava'}
                    render={({field:{onChange,value},fieldState:{error}}) =>
                        <TextField 
                            id='strava'
                            label='ストラバ'
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

                <Viewlocalfiles photos={photos} setPhotos={setPhotos}/>
                {/* <div>
                    写真を選択してください
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
                {/* <div>距離:{activity.distance}ｋｍ</div>
                <div>獲得標高:{activity.elevation}ｍ</div>
                <div>タイム:</div>
                <div>平均速度:</div>  */}
                <Button type='submit' variant='outlined'>実施済み</Button>
            </form>
           
            
        </>
    )
}

export default FormDane
