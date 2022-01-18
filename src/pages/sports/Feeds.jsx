import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { getActivities, selectAll } from '../../features/sports/sportsSlice'
import Divider from '@mui/material/Divider';
import { format} from 'date-fns'
import {formatdate} from '../../utils/formatdate' 
// {formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}


const Feeds = () => { 
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    const activities = useSelector(selectAll)
    console.log(profile);
    console.log(activities);
    useEffect(()=>{
        console.log('Feeds call dispatch getActivities');
        dispatch(getActivities(profile))
    },[dispatch,profile])

    return (
        <div className='l-sports-container'>
            <div>
                <h1>Feed</h1>
                { activities.length > 0 
                    ? activities.map(activity=>(
                        <div key={activity.id}>
                            {
                                 activity.public === 'public' && activity.done === false
                                 ? 
                                 <div>
                                     <div>{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')} </div>
                                     <div>{activity.title}</div>
                                     <div>予定</div>
                                     <div>{activity.public}</div>
                                    <Divider />
                                 </div>
                                 : null
                            }
                            {
                                 activity.public === 'public' && activity.done === true
                                 ? 
                                 <div>
                                     <div>{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')} </div>
                                     <div>{activity.title}</div>
                                     <div>実施済み</div>
                                     <div>{activity.public}</div>
                                     <Divider />
                                 </div>
                                 : null
                            }
                        </div>
                    )) 
                    : null 
                }
            </div>
        </div>
    )
}

export default Feeds 
