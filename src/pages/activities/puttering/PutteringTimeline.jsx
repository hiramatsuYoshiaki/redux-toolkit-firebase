import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectUser} from '../../../features/auth/authSlice'
import {getTimeline,selectorFeeds} from '../../../features/putteringTimeline/timelineSlice'
import {PutteringMenuBar} from '../../../components/puttering/index'
import { format} from 'date-fns'
// import { removeDocPuttering } from '../../../features/puttering/removeDocPuttering'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <div style={{margin:'8px 8px 200px 8px'}}> 
                {feeds.length > 0 && 
                    feeds.map(feed=>(
                        <div key={feed.id.id}>
                            <Card sx={{ width: '100% '}}>
                                <CardHeader
                                    avatar={
                                    <Avatar 
                                        sx={{ bgcolor: 'black' }} 
                                        aria-label="recipe"
                                        alt="user avater" 
                                        // src={feed.user.photoURL}
                                    >
                                        R
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton aria-label="settings"> 
                                        <MoreVertIcon />
                                    </IconButton>
                                    }
                                    title={feed.title}
                                    subheader={
                                        <div>
                                            <div>{feed.course}</div>
                                            <div>{feed.user.username}</div>
                                        </div>
                                    }
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="/static/images/cards/paella.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <div>Content</div>
                                    <div>{starttime(feed.datePicker)}</div> 
                                    <div>{feed.id.id}</div> 
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    {/* <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton> */}
                                </CardActions>
                            </Card>
                            {/* <div>
                                <div>{feed.course}</div>
                                <div>{starttime(feed.datePicker)}</div> 
                            </div>
                            <div>
                                <div>いいね！</div>
                                <div>コメント</div>
                            </div> */}
                        </div>
                    ))
                }
            </div>
            <PutteringMenuBar />  
        </div>
    )
}

export default PutteringTimeline 
