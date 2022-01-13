import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import { FormActivity } from '../../components/sports'
import {formatdate} from '../../utils/formatdate'
import {activityDataInit} from '../../utils/activityDataSet'


const Edit = () => {
    console.log('edit');
    const history = useHistory()
    const activity = history.location.state.activity;
    const profile = history.location.state.profile;
    // console.log('activity',activity)
    // console.log('profile',profile) 

    
    
    // const onSubmit = data =>{ 
    //     console.log('from input data',data)
    //     alert('data'+ data)
    //     const  activityData =  activityDataSet(profile,data,file)
    //     // const activityData ={
    //     //     id:'',
    //     //     owner:profile,
    //     //     title:data.title,
    //     //     date:Timestamp.fromDate(data.datePicker),//js date --> firebase timestamp
    //     //     couse:data.couse,
    //     //     start:data.start,
    //     //     gole:data.gole,
    //     //     distance:data.distance,
    //     //     elevation:data.elevation,
    //     //     couse_map:'',
    //     //     couse_link:data.link,
    //     //     segment:data.segment,
    //     //     coment:data.coment,
    //     //     public:'private',
    //     //     participation:[],
    //     //     done:false,
    //     //     garmin:'',
    //     //     relive:'',
    //     //     strava:'',
    //     //     file:file,
    //     //     create_at:null,
    //     //     update_at:null,
    //     //     starus:'idle',
    //     // }
    //     // console.log('activityData',activityData)
    //     // dispatch(createAction(activityData))
    // }
    
 
    
    return ( 
        <div>
            <h1>アクティビティ予定を変更</h1>
            <FormActivity profile={profile} activity={activity} />
            {/* <FormActivity activity={activityDataInit(profile)} />  */}
            
            
            <h1>data</h1>
            <div>id:{activity.id}</div>
            <div>title:{activity.title}</div>
            <div>date:{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}</div>
            <div>couse_map:{activity.couse_map}</div>
            <div>couse_link:{activity.couse_link}</div>
            <div>segment{activity.segment}</div>
            <div>distamce:{activity.distance}Km</div>
            <div>elevation:{activity.elevation}m</div>
            <div>couse:{activity.couse}</div>
            <div>start:{activity.start}</div>
            <div>gole:{activity.gole}</div>
            <div>coment:{activity.coment}</div>
            <div>participation:{activity.participation}</div>
            <div>done:{activity.done?'完了':'予定イベント'}</div>
           
        </div>
    )
}

export default Edit 
