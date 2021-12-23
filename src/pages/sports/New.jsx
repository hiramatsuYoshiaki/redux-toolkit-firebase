import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectUser} from  '../../features/auth/authSlice'
import { createActivity, getActivities, selectAll, selectNew, selectActivities,} from  '../../features/sports/sportsSlice'
import {useForm, Controller} from 'react-hook-form'
import {BottomMenuBar} from '../../components/sports/index'
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
import {LoadingSpiner} from '../../components/index'
import { format} from 'date-fns'
import { Timestamp } from "firebase/firestore"; 

import './sports.scss'
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
import no_image from '../../assets/img/no_image.jpg'
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
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    console.log('profile',profile);

    //新規アクティビティー
    const activities = useSelector(selectNew)
    console.log('new',activities);
    //すべてのアクティビティー
    const all = useSelector(selectAll)
    console.log('all',all);

    const [selectPhoto,setSelectPhoto] = useState('')
    const [file,setFile] = useState(null)

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
            couse_map:'',
            couse_link:data.link,
            coment:data.coment,
            public:'public',
            participation:'',
            done:false,
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
        dispatch(getActivities(profile))

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
        const fromtDateTime = format(jsTimestamp, 'yyyy-MM-dd HH:mm')
        return  fromtDateTime
    }
    useEffect(()=>{
        console.log('useEffect call dispatch getActivities');
        dispatch(getActivities(profile))
        console.log(all);
    },[dispatch,profile])
    

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
                                        placeholder="スタート地点～中間地点～ゴール地点"
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
           
            <div>
                {all.length > 0 
                ?   <div className='l-sports-card-container'>
                        {all.map(activity=>(
                            <div className='l-sports-card-item' key={activity.id}>
                               <Card sx={{ width: '100%'}}>
                                    <CardMedia
                                        component="img"
                                        sx={{width: '100%', height:300}}
                                        image={no_image}
                                        alt="image map"
                                    />
                                    <CardContent> 
                                        <div>{activity.title}</div>
                                        <div>{starttime(activity.date)}</div>
                                        <div>{activity.couse}</div>
                                        <div>Start:{activity.start}-Gole:{activity.gole}</div>
                                        <div>distance:{activity.distance}</div>
                                        <div>couse_map:{activity.couse_map}</div>
                                        <div>couse_link:{activity.couse_link}</div>
                                        <div>coment:{activity.coment}</div>
                                        <div>public:{activity.public}</div>
                                        <div>participation:{activity.participation}</div>
                                        <div>done:{activity.done?'完了':'予定'}</div>
                                        <div>garmin:{activity.garmin}</div>
                                        <div>relive:{activity.relive}</div>
                                        <div>strava:{activity.strava}</div>
                                        {/* <div>create_at:{starttime(activities.create_at)}</div>
                                        <div>update_at:{starttime(activities.update_at)}</div> */}
                                        {/* <div>status:{activities.status}</div> */}
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Edit</Button>
                                        <Button size="small">delete</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        ))}
                     </div> 
                :   null }
            </div>
            <div className='l-sports-card-container'>
                {all.map(activity=>(
                    <div className='l-sports-card-item' key={activity.id}>
                        
                        <Card sx={{ width: '100%'}}>
                            <CardMedia
                                component="img"
                                sx={{width: '100%', height:300}}
                                image={no_image}
                                alt="image map"
                            />
                            <CardContent> 
                            {/* <div>uid:{activity.owner.uid}</div>
                            <div>name:{activity.owner.username}</div> 
                            <div className="page-FeatureListContainer_image">
                                <div className="page-avaterContainer"> 
                                    <img src={activity.owner.photoURL} alt="avater" style={styles.icon} />
                                </div>
                            </div> */}
                            {/* <div>id:{activity.id}</div>
                            <div>Title:{activity.title}</div>
                            {activity.date=== null ?<div>Date:----</div>:<div>Date:{starttime(activity.date)}</div>}
                            <div>Couse:{activity.couse}</div>
                            <div>Start:{activity.start}-Gole:{activity.gole}</div>
                            <div>distance:{activity.distance}</div>
                            <div>couse_map:{activity.couse_map}</div>
                            <div>couse_link:{activity.couse_link}</div>
                            <div>coment:{activity.coment}</div>
                            <div>public:{activity.public}</div>
                            <div>participation:{activity.participation}</div>
                            <div>done:{activity.done?'完了':'予定'}</div>
                            <div>garmin:{activity.garmin}</div>
                            <div>relive:{activity.relive}</div>
                            <div>strava:{activity.strava}</div>
                            <div>create_at:{activity.create_at}</div>
                            <div>update_at:{activity.update_at}</div>
                            <div>status:{activity.status}</div> */}
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Edit</Button>
                                <Button size="small">delete</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
               <div className='l-sports-card-item'>
                {/* <Card sx={{ width: '100%'}}>
                        <CardMedia
                            component="img"
                            sx={{width: '100%', height:300}}
                            image={no_image}
                            alt="image map"
                        />
                        <CardContent> 
                        <div>uid:{activities.owner.uid}</div>
                        <div>name:{activities.owner.username}</div> 
                        <div className="page-FeatureListContainer_image">
                            <div className="page-avaterContainer"> 
                                <img src={activities.owner.photoURL} alt="avater" style={styles.icon} />
                            </div>
                        </div>
                        <div>id:{activities.id}</div>
                        <div>Title:{activities.title}</div>
                        {activities.date=== null ?<div>Date:----</div>:<div>Date:{starttime(activities.date)}</div>}
                        <div>Couse:{activities.couse}</div>
                        <div>Start:{activities.start}-Gole:{activities.gole}</div>
                        <div>distance:{activities.distance}</div>
                        <div>couse_map:{activities.couse_map}</div>
                        <div>couse_link:{activities.couse_link}</div>
                        <div>coment:{activities.coment}</div>
                        <div>public:{activities.public}</div>
                        <div>participation:{activities.participation}</div>
                        <div>done:{activities.done?'完了':'予定'}</div>
                        <div>garmin:{activities.garmin}</div>
                        <div>relive:{activities.relive}</div>
                        <div>strava:{activities.strava}</div>
                        <div>create_at:{activities.create_at}</div>
                        <div>update_at:{activities.update_at}</div>
                        <div>status:{activities.status}</div>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Edit</Button>
                            <Button size="small">delete</Button>
                        </CardActions>
                    </Card> */}
                </div>





               {/* <div className='l-sports-card-item'>
                <Card sx={{ width: '100%'}}>
                        <CardMedia
                            component="img"
                            sx={{width: '100%', height:300}}
                            image={no_image}
                            alt="image map"
                        />
                        <CardContent>
                        <div>Title</div>
                        <div>Couse</div>
                        <div>Start-Gole</div>
                        <div>Date</div>
                        <div>distance</div>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Edit</Button>
                            <Button size="small">delete</Button>
                        </CardActions>
                    </Card>
               </div> */}
               {/* <div className='l-sports-card-item'>
                <Card sx={{ width: '100%' }}>
                        <CardMedia
                            component="img"
                            sx={{width: '100%', height:300}}
                            image={map}
                            alt="image map" 
                        />
                        <CardContent>
                        <div>Title</div>
                        <div>Couse</div>
                        <div>Start-Gole</div>
                        <div>Date</div>
                        <div>distance</div>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Edit</Button>
                            <Button size="small">delete</Button>
                        </CardActions>
                    </Card>
               </div>
               <div className='l-sports-card-item'>
                <Card sx={{ width: '100%'}}>
                        <CardMedia
                            component="img"
                            sx={{width: '100%', height:300}}
                            image={syoudoshima}
                            alt="image map"
                        />
                        <CardContent>
                        <div>Title</div>
                        <a href='https://connect.garmin.com/modern/course/86000025'>
                            <div>小豆島、寒霞渓紅葉ライド 一周</div>
                        </a>
                        
                        <div>Start-Gole</div>
                        <div>Date</div>
                        <div>distance</div>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Edit</Button>
                            <Button size="small">delete</Button>
                        </CardActions>
                    </Card>
               </div> */}
                
                
                
           </div>
            <BottomMenuBar />
            <LoadingSpiner isLoading={profile.status}/>
        </div>
    )
}

export default New 
