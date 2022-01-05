import React from 'react'
import {useHistory} from 'react-router-dom'
import {EditActivities} from '../../components/sports/index'
import {useForm, Controller} from 'react-hook-form'
import { FormActivity } from '../../components/sports'
import Button from '@mui/material/Button'
import {formatdate} from '../../utils/formatdate'
import {activityDataSet} from '../../utils/activityDataSet'

const Edit = () => {
    console.log('edit');
    const history = useHistory()
    const activity = history.location.state.activity;
    const profile = history.location.state.profile;
    const file = history.location.state.file;
    // console.log('history.location.state',history.location.state)
    console.log('activity',activity)
    console.log('profile',profile)
    console.log('file',file)

    const {handleSubmit, control} = useForm()
    const onSubmit = data =>{ 
        console.log('from input data',data)
        alert('data'+ data)
        const  activityData =  activityDataSet(profile,data,file)
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
        console.log(activityData);
        // dispatch(createAction(activityData))
    }
    return (
        <div>
            <h1>Edit Activitiy</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="c-puttring-new-datetime-area">

                </div>
                <div>
                    <Button type='submit' variant='outlined'>
                        SUBMIT
                    </Button>
                </div>

            </form>
            <FormActivity />
            <h1>data</h1>
            <div>id:{activity.id}</div>
            <div>title:{activity.title}</div>
            {/* <div>date:{starttime(activity.date)}</div> */}
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
            <EditActivities />
           
        </div>
    )
}

export default Edit 
