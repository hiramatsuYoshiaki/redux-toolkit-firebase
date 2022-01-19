import React from 'react'
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
import {formatdate} from '../../utils/formatdate'

const CardDoneActivitiesSummery = ({activity}) => {
    return ( 
        <Card sx={{ maxWidth: 470 }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={activity.owner.photoURL} />
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={activity.owner.username}
                subheader={activity.title}
            />
            <CardMedia
                component="iframe"
                height="508"
                width='478'
                image={activity.garmin}
                alt={activity.title}
                frameborder="2"
                allowfullscreen="allowfullscreen"
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
            />
                {/* <div>{activity.title}</div>
                <div>{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}</div> */}
                
               {/* <iframe src={activity.garmin} title={activity.title} width='465'  height='500' frameborder='0'></iframe> */}
               
        </Card>
    )
}

export default CardDoneActivitiesSummery 
