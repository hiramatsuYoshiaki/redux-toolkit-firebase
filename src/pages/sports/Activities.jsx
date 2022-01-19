import React from 'react'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/auth/authSlice'
import {selectAll} from '../../features/sports/sportsSlice'
import Divider from '@mui/material/Divider'
import {formatdate} from '../../utils/formatdate' 
import {CardDoneActivities} from '../../components/sports/index'
const Activities = () => {
    console.log('activity----start');
    const profile = useSelector(selectUser)
    const activities = useSelector(selectAll) 
    console.log(profile);
    console.log(activities);
    return (
        <div>
            <div>Activity</div>
            {activities.length > 0 
                ? activities.map(activity=>(
                    activity.done === true && activity.owner.uid === profile.uid
                    ? <div key={activity.id}>
                        <CardDoneActivities activity={activity}/>
                    </div>
                    :null
                ))
                :null 
            }
        </div>
    )
} 

export default Activities 
