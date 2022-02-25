import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { red } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {CardContentLine} from './index'

import {formatdate} from '../../utils/formatdate' 
import './CardDoneActivitiesSummery.scss'

 
const CardDoneActivitiesSummery = ({activity}) => {
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    
    return (  
        <Card sx={{marginBottom:'16px'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={activity.owner.photoURL} />
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={activity.title}
                subheader={formatdate(activity.date,'MM月dd日 yyyy年')} 
            />
             <CardContent>
                <div className="c-record-area">
                    <div className="c-record-areaElement"> 
                        <CardContentLine title='距離' value={activity.doneDistance.toLocaleString()} unit='Km'/>
                    </div>
                    <div className="c-record-areaElement">
                        <CardContentLine title='獲得標高' value={activity.doneElevation.toLocaleString()} unit='m'/>
                    </div>
                    <div className="c-record-areaElement">
                        <CardContentLine title='平均速度' value={activity.doneAverage.toLocaleString()} unit='km/h'/>
                    </div>
                    <div className="c-record-areaElement">
                        <CardContentLine title='タイム' 
                                         value={formatdate(activity.doneRideTime,'HH:mm:ss')}
                                         unit=''/>
                    </div>
                </div>
            </CardContent>
             
             {activity.garmin !== null & activity.garmin !== undefined & activity.garmin !== ""
              ?
                <div class="c-wraper-card-media">
                    <div class="c-card-media">
                        <CardMedia
                                component="iframe"
                                height="508"
                                maxWidth='508'
                                image={activity.garmin}
                                alt={activity.title}
                                frameborder="0"
                                sx={{ boxShadow: 'none' }}
                            />
                    </div>
                </div>
                :activity.strava !== null & activity.strava !== undefined & activity.strava !== ""
                ?
                <div class="c-wraper-card-media">
                    <div class="c-card-media">
                        <CardMedia
                                component="iframe"
                                height="508"
                                maxWidth='508'
                                image={activity.strava}
                                alt={activity.title}
                                frameborder="0"
                                sx={{ boxShadow: 'none' }}
                            />
                    </div>
                </div>
                :<div class="c-wraper-card-media">
                    <div class="c-card-media">
                        <CardMedia
                                component="iframe"
                                height="508"
                                maxWidth='508'
                                image={activity.couse_link}
                                // image='https://connect.garmin.com/modern/course/embed/87305537'
                                alt={activity.title}
                                frameborder="0"
                                sx={{ boxShadow: 'none' }}
                            />
                    </div>
                    {/* <a href={activity.couse_link}  target="_blank" rel="noopener noreferrer">
                        <CardActions>
                            <Button size="small">マップを見る</Button>
                        </CardActions>
                    </a>
                    <div>{activity.couse_link}</div> */}
                </div>
            }

{/*              
            
            <CardActions disableSpacing>
                <IconButton aria-label="more" onClick={handleExpandClick}>
                    {expanded?<ExpandLessIcon />:<ExpandMoreIcon />}
                </IconButton >
                <div>Relive</div>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardMedia
                    component="iframe"
                    height="600"
                    width='478'
                    image={activity.relive}
                    alt={activity.title}
                    frameborder="0"
                    sx={{ boxShadow: 'none' }}
                />
            </Collapse> */}
           
           
               
        </Card>
    )
}

export default CardDoneActivitiesSummery 
