import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectUser} from '../../../features/auth/authSlice'
import {getTimeline,selectorFeeds} from '../../../features/putteringTimeline/timelineSlice'
import {PutteringMenuBar} from '../../../components/puttering/index'
import { format} from 'date-fns'
import { removeDocPuttering } from '../../../features/puttering/removeDocPuttering'

const PutteringTimeline = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const feeds = useSelector(selectorFeeds)
    console.log(user);
    console.log('feeds',feeds);
    const starttime = (dateTime) =>{
        const jsTimestamp = dateTime.toDate()
        const fromtDateTime = format(jsTimestamp, 'yyyy/MM/dd/ HH:mm')
        return  fromtDateTime
    }
    useEffect(()=>{
        console.log('usereffect');
        dispatch(getTimeline(user.uid))
    },[user.uid,dispatch])
    return (
        <div className="page-fexed-container"> 
            <div>Puttering Time Line</div>
            <div>uid:{user.uid}</div>
            <div>user name:{user.username}</div>
            <div>photo:{user.photoURL}</div>
            {feeds.length > 0 && 
                feeds.map(feed=>(
                    <div key={feed.id}>
                        <h1>{feed.title}</h1>
                        <p>{feed.course}</p>
                        <p>{starttime(feed.datePicker)}</p>
                    </div>
                ))
                 
            }
            <PutteringMenuBar />
        </div>
    )
}

export default PutteringTimeline 
