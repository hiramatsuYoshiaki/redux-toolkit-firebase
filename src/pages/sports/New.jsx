import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
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
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuItem from '@mui/material/MenuItem';
import {LoadingSpiner} from '../../components/index'
import {CardNewActivities} from '../../components/sports/index'

// import { format} from 'date-fns'
import { Timestamp } from "firebase/firestore"; 

import './Sports.scss' 
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

    //??????????????????????????????
    // const activities = useSelector(selectNew)
    // console.log('new',activities);
    //????????????????????????????????????
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

        //firestore??????????????????????????????????????????
        // dispatch(addActivities(inputValues)) 
        //???????????????firebase strage????????????????????????,
        //firestore???map url?????????
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
        //??????????????????????????????
        setFile(event.target.files)
        // console.log(file)
        preview(event.target.files[0])
        }
    // const starttime = (dateTime) =>{
    //     const jsTimestamp = dateTime.toDate()
    //     const fromtDateTime = format(jsTimestamp, 'yyyy???MM???dd??? HH:mm')
    //     return  fromtDateTime
    // }
    const segments = [
        { value: '???????????????',label: '50km????????????????????????????????????',},
        { value: '?????????????????????',label: '100km????????????????????????',},
        { value: '??????????????????',label: '100km???160km????????????????????????',},
        { value: '???????????????????????????',label: '160km???????????????????????????',},
        { value: '?????????????????????',label: '100km?????????????????????????????????',},
        { value: '?????????',label: '?????????200???600km?????????????????????',},
    ]
    //??????????????????????????????????????????
    const handleClickPublish = (activity) => {
        dispatch(updateActivityPublish(activity)) 
        if(profile){
            dispatch(getActivities(profile))
        }

    }
    //????????????
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
    //??????
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
    //??????
    const handleClickDelete = (activity) => {
        dispatch(removeActivity(activity))  
        if(profile){
            dispatch(getActivities(profile))
        }
    }

    useEffect(()=>{
        // console.log('useEffect call dispatch getActivities');
        if(profile){
            dispatch(getActivities(profile))
        }
    },[dispatch,profile])

    useEffect(()=>{
        // console.log('useEffect setAllActicities(all) change>>>>>>>>>>');
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
                            ???????????????????????????????????????????????????
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
                            </div>
                            <Controller
                                name='title'
                                control={control}
                                defaultValue=''
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
                                defaultValue=""
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
                                defaultValue=''
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
                                defaultValue=''
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
                                defaultValue={100}
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
                                    },
                                    // valueAsNumber: true,
                                }}
                            />
                            <Controller
                                name='elevation'
                                control={control}
                                defaultValue={100}
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
                                    },
                                    // valueAsNumber: true,
                                }}
                            />
                           <div>
                                ???????????????????????????????????????????????????
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
                                defaultValue=''
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
                                // rules={{
                                    // required:'??????????????????URL???????????????',
                                    // pattern: {
                                    //     value: /^(ftp|http|https):\/\/[^ "]+$/,
                                    //     message: 'URL????????????????????????',
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
                                    SUBMIT
                                </Button>
                            </div>
                        </form>

                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
           {/* <Link to='/sports/add'>
            <Button size="small"  variant='outlined' >???????????????????????????????????????????????????</Button>
           </Link> */}
            <div>
                {allActivities.length > 0 
                ?   <div className='l-sports-card-container'>
                        {allActivities.map(activity=>(
                            activity.done === false ?
                                // <div className='l-sports-card-item' key={activity.id}>
                                <div  key={activity.id}>
                                    <CardNewActivities 
                                        activity={activity} 
                                        handleClickPublish={handleClickPublish} 
                                        handleClickDone={handleClickDone} 
                                        handleClickEdit={handleClickEdit}
                                        handleClickDelete={handleClickDelete}
                                />
                                </div>
                            :null
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
