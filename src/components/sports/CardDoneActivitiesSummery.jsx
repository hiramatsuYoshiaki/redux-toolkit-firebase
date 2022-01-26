import React,{useState} from 'react'
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
        // <Card sx={{ maxWidth: 470 }}>
        <Card >
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
                        <CardContentLine title='タイム' value={`${activity.doneTimehh}時間${activity.doneTimemm}分`} unit=''/>
                    </div>
                </div>
             </CardContent>
             {activity.garmin
              ?
                <CardMedia
                        component="iframe"
                        height="508"
                        maxWidth='508'
                        image={activity.garmin}
                        alt={activity.title}
                        frameborder="2"
                        // allowfullscreen="allowfullscreen"
                    />
                // <CardMedia
                //     component="iframe"
                //     height="508"
                //     width='478'
                //     image={activity.relive}
                //     alt={activity.title}
                // />
                // <CardMedia
                //     component="iframe"
                //     height="380"
                //     width='478'
                //     image={activity.strava}
                //     alt={activity.title}
                // /> 

                :null
            }
             
            
            <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton> */}
                <IconButton aria-label="more" onClick={handleExpandClick}>
                    {expanded?<ExpandLessIcon />:<ExpandMoreIcon />}
                </IconButton >
                <div>詳細</div>
            </CardActions>
            {/* <CardMedia
                    component="iframe"
                    height="508"
                    width='100%'
                    image={activity.garmin}
                    alt={activity.title}
                    // frameborder="2"
                    // allowfullscreen="allowfullscreen"
                /> */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {/* <CardMedia
                    component="iframe"
                    height="508"
                    width='478'
                    image={activity.garmin}
                    alt={activity.title}
                />
                <CardMedia
                    component="iframe"
                    height="508"
                    width='478'
                    image={activity.relive}
                    alt={activity.title}
                />
                <CardMedia
                    component="iframe"
                    height="350"
                    width='478'
                    image={activity.strava}
                    alt={activity.title}
                /> */}
            </Collapse>
           
           
                {/* <div>{activity.title}</div>
                <div>{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}</div> */}
                
               {/* <iframe src={activity.garmin} title={activity.title} width='465'  height='500' frameborder='0'></iframe> */}
               
        </Card>
    )
}

export default CardDoneActivitiesSummery 
