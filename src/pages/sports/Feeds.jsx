import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { getActivities, selectAll } from '../../features/sports/sportsSlice'
import { format} from 'date-fns'


const Feeds = () => {
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    const activities = useSelector(selectAll)
    console.log(profile);
    console.log(activities);
    const starttime = (dateTime) =>{
        const jsTimestamp = dateTime.toDate()
        const fromtDateTime = format(jsTimestamp, 'yyyy年MM月dd日 HH:mm')
        return  fromtDateTime
    }
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
                                 activity.public === 'public' && !activity.done
                                 ? 
                                 <div>
                                     <div>予定</div>
                                     <div>{activity.public}</div>
                                     <div>{activity.title}</div>
                                     <div>{starttime(activity.date)}</div>
                                 </div>
                                 : null
                            }
                            {
                                 activity.public === 'public' && activity.done
                                 ? 
                                 <div>
                                     <div>実施済み</div>
                                     <div>{activity.public}</div>
                                     <div>{starttime(activity.date)}</div>
                                     
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
