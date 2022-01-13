import React, {useState, useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {selectUser} from  '../../features/auth/authSlice'
import { createActivity, 
         getActivities, 
         updateActivityPublish,
         selectAll, 
        //  selectNew, 
        //  selectActivities,
        removeActivity,
         selectActivitiesStatus,
        } from  '../../features/sports/sportsSlice'
import {useForm, Controller} from 'react-hook-form'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuItem from '@mui/material/MenuItem';
import {LoadingSpiner} from '../../components/index'

import { format} from 'date-fns'
import { Timestamp } from "firebase/firestore"; 

import './sports.scss'
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
// import no_image from '../../assets/img/no_image.jpg'
// import { avatarClasses } from '@mui/material'
// import map from '../../assets/img/map.PNG'
// import syoudoshima from '../../assets/img/syoudoshima.PNG'
const styles={
    map:{
        borderRadius: '16px',
        width:"300px",
        height:"200px",  
        border:"1px solid gery",  
    },
    icon: {
        marginRight: 8,
        height: 48,
        width: 48
    },
    bottomMargin:{
        marginBottom:"16px",
    },
    topMargin:{
        marginTop:"16px",
    }
}
const New = () => {
    console.log('start---->New.jsx');
    const history = useHistory()
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    // console.log('profile',profile);

    //新規アクティビティー
    // const activities = useSelector(selectNew)
    // console.log('new',activities);
    //すべてのアクティビティー
    const all = useSelector(selectAll)
    console.log('all',all);

    const activitiesStatus = useSelector(selectActivitiesStatus)

    const [selectPhoto,setSelectPhoto] = useState('')
    const [allActivities,setAllActicities] = useState([])
    const [file,setFile] = useState(null)
    console.log(allActivities);

    const [expanded, setExpanded] = useState(false);
    const {handleSubmit, control} = useForm() 
    const onSubmit = data =>{
        console.log('from input data',data)
        const activityData ={
            id:'',
            owner:profile,
            title:data.title,
            date:Timestamp.fromDate(data.datePicker),//js date --> firebase timestamp
            couse:data.couse,
            start:data.start,
            gole:data.gole,
            distance:data.distance,
            elevation:data.elevation,
            couse_map:'',
            couse_link:data.link,
            segment:data.segment,
            coment:data.coment,
            public:'private', 
            participation:[],
            done:false,
            // doneDistance:'',
            // doneElevation:'',
            // doneAverage:'',
            // doneTimehh:'',
            // doneTimemm:'', 
            garmin:'',
            relive:'',
            strava:'',
            file:file,
            create_at:null,
            update_at:null,
            starus:'idle',
        }
        console.log(activityData);
        // dispatch(createAction(activityData))
        dispatch(createActivity(activityData))
        if(profile){
            dispatch(getActivities(profile))
        }
        // dispatch(getActivities(profile))

        //firestoreに新規アクティビティーを追加
        // dispatch(addActivities(inputValues)) 
        //変更画像をfirebase strageにアップロードし,
        //firestoreのmap urlを更新
        // dispatch(updatePhotoURLAsync(file))
    } 
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      }
    
    const preview =(previewFile) =>{
        const reader = new FileReader()
        reader.onload = (e) => {
        setSelectPhoto(e.target.result)
        }
        reader.readAsDataURL(previewFile)
    }

    const uploadImage = (event) => {
        //変更画像のプレビュー
        setFile(event.target.files)
        // console.log(file)
        preview(event.target.files[0])
        }
    const starttime = (dateTime) =>{
        const jsTimestamp = dateTime.toDate()
        const fromtDateTime = format(jsTimestamp, 'yyyy年MM月dd日 HH:mm')
        return  fromtDateTime
    }
    const segments = [
        { value: 'ポタリング',label: '50km以下の距離をゆっくり走る',},
        { value: 'ショートライド',label: '100km以下の距離を走る',},
        { value: 'ロングライド',label: '100km～160km程度の距離を走る',},
        { value: 'センチュリーライド',label: '160km以上のコースを走る',},
        { value: 'グランフォンド',label: '100km以上の山岳コースを走る',},
        { value: 'ブルベ',label: '距離は200～600kmのコースを走る',},
    ]
    //パブリック　プライベート変更
    const handleClickPublish = (activity) => {
        dispatch(updateActivityPublish(activity)) 
        if(profile){
            dispatch(getActivities(profile))
        }

    }
    //実施完了
    const handleClickDone = (activity) => {
        history.push(
            {
                pathname: "/sports/done",
                state:{ activity:activity,
                        profile:profile,
                }
            }
        ) 
    }
    //修正
    const handleClickEdit = (activity) => {
        history.push(
            {
                pathname: "/sports/edit",
                state:{ activity:activity,
                        profile:profile,
                }
            }
        )
    }
    //削除
    const handleClickDelete = (activity) => {
        dispatch(removeActivity(activity))  
        if(profile){
            dispatch(getActivities(profile))
        }
    }

    useEffect(()=>{
        console.log('useEffect call dispatch getActivities');
        if(profile){
            dispatch(getActivities(profile))
        }
    },[dispatch,profile])

    useEffect(()=>{
        console.log('useEffect setAllActicities(all) change>>>>>>>>>>');
        setAllActicities(all)
    },[dispatch,all])
   

    return (
        <div className='l-sports-container'>
            <div style={styles.topMargin}>
                <div>
                    <Accordion 
                        expanded={expanded === 'panel1'} 
                        onChange={handleChange('panel1')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            新しいアクティビティを追加します。
                        </AccordionSummary>
                        <AccordionDetails>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                            <Controller
                                name='title'
                                control={control}
                                defaultValue=''
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
                                defaultValue=""
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
                                defaultValue=''
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
                                defaultValue=''
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
                                defaultValue={100}
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
                                defaultValue={100}
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
                           <div>
                                コースマップ画像を選択してください
                                <IconButton style={styles.icon}>
                                    <label>
                                        <AddPhotoAlternateIcon fontSize="large"/>
                                        <input style={{display:'none'}}
                                            type="file"
                                            id="image"
                                            accept={"image/jpeg,image/png"}
                                            onChange={(event) => uploadImage(event)}
                                        />
                                    </label>
                                </IconButton>
                            </div>
                            {selectPhoto !== '' 
                                ? 
                                <div className="page-avaterContainer"> 
                                    <img src={selectPhoto} alt="couse map" style={styles.map} />
                                </div>
                                : null
                            }
                            <Controller
                                name='link'
                                control={control}
                                defaultValue=''
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
                                defaultValue=''
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
                                // rules={{
                                    // required:'コースリンクURLは必須です',
                                    // pattern: {
                                    //     value: /^(ftp|http|https):\/\/[^ "]+$/,
                                    //     message: 'URLの形式が不正です',
                                    // },
                                // }}
                            />
                            
                            <Controller
                                name='coment'
                                control={control}
                                defaultValue=''
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

                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
           <Link to='/sports/add'>
            <Button size="small"  variant='outlined' >新しいアクティビティを追加します。</Button>
           </Link>
            <div>
                {allActivities.length > 0 
                ?   <div className='l-sports-card-container'>
                        {allActivities.map(activity=>(
                            <div className='l-sports-card-item' key={activity.id}>
                               <Card sx={{ width: '100%'}}>
                                        {/* <div>{activity.id}</div> */}
                                        <div>{activity.title}</div>
                                        <div>{starttime(activity.date)}</div>
                                        <a href={activity.couse_link} target="_blank" rel="noopener noreferrer">
                                            <CardMedia
                                                component="img"
                                                sx={{width: '100%', height:300}}
                                                image={activity.couse_map}
                                                alt="image map"
                                            />
                                         </a>
                                        <CardContent> 
                                        <a href={activity.couse_link} target="_blank" rel="noopener noreferrer">
                                            <div>コース詳細を見る</div>
                                        </a>
                                        <div>{activity.segment}</div>
                                        
                                        <div>
                                            <span>{activity.distance}Km</span>
                                            <span>{activity.elevation}m</span>
                                        </div>
                                        <div>{activity.couse}</div>
                                        
                                        {/* <div>couse_map:{activity.couse_map}</div> */}
                                        
                                        
                                        <div>集合場所：{activity.start}</div>
                                        {/* <div>解散場所{activity.gole}</div> */}
                                        <div>コメント</div>
                                        <div>{activity.coment}</div>
                                        {/* <div>public:{activity.public}</div> */}
                                        <div>参加者:</div>
                                        <div>{activity.participation}</div>
                                        {/* <div>done:{activity.done?'完了':'予定イベント'}</div> */}
                                        {/* <div>garmin:{activity.garmin}</div>
                                        <div>relive:{activity.relive}</div>
                                        <div>strava:{activity.strava}</div> */}
                                        {/* <div>create_at:{starttime(activities.create_at)}</div>
                                        <div>update_at:{starttime(activities.update_at)}</div> */}
                                        {/* <div>status:{activities.status}</div> */}
                                        <div>公開:{activity.public}</div>
                                        {activity.public === 'public' 
                                            ?
                                            <Button size="small" variant='outlined' onClick={()=>handleClickPublish(activity)}>
                                                <span>プライベート（フィードに表示しない）</span>
                                            </Button>
                                            :
                                            <Button size="small" variant='outlined'  onClick={()=>handleClickPublish(activity)}>
                                                <span>パブリック（フィードに表示する）</span>
                                            </Button>
                                            // <Button size="small" variant='outlined' onClick={()=>handleClickPublish(activity)}>
                                            //     <span>パブリック（フィードに表示する）</span>
                                            // </Button>
                                         }
                                        {/* <Button size="small" variant='outlined'>プライベート（フィードに表示しない）</Button> */}
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant='outlined' onClick={()=>handleClickDone(activity)}>実走データ入力</Button>
                                        <Button size="small"  variant='outlined' onClick={()=>handleClickEdit(activity)}>変更</Button>
                                        <Button size="small"  variant='outlined' onClick={()=>handleClickDelete(activity)}>削除</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        ))}
                     </div> 
                :   null }
            </div>
            
            <LoadingSpiner isLoading={profile.status}/>
            <LoadingSpiner isLoading={activitiesStatus}/>
        </div>
    )
}

export default New 
