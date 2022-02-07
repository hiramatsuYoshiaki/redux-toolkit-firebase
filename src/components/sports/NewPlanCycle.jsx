import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {formatdate} from '../../utils/formatdate'

import './NewPlanCycle.scss'

const NewPlanCycle = ({activity}) => {
  return (
        <Card sx={{  width:'100%', maxWidth: '1200px' , margin:'18px 0px', boxShadow:'none', backgroundColor:'whitesmoke'}}>
            {/* <div>{activity.title}</div>
            <div>{activity.public}</div>
            <div>{activity.done?'実施済み':'予定'}</div> */}
            {/* <div>public:{activity.public}</div> */}
            {/* <div>public:{activity.public}</div> */}
            {/* <div>done:{activity.done?'実施済み':'予定'}</div> */}
            {/* <div>NewPlanCycle</div> */}
            <div className='c-new-plan-card-flexbox'>
                <div className='c-new-plan-card-items-right'>
                    <CardHeader 
                        // avatar={
                        //     <Avatar  aria-label="recipe" src={profile.photoURL} />
                        // }
                        title={ <Typography variant="body1" component="div" color="text.secondary">
                                {activity.title}
                                </Typography>} 
                        subheader={
                            <div>
                                <Typography gutterBottom variant="caption" component="div" color="text.secondary">
                                    {formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}スタート
                                </Typography>
                                <Typography gutterBottom variant="caption" component="div" color="text.secondary">
                                    距離：{activity.distance}Km
                                </Typography>
                                <Typography gutterBottom variant="caption" component="div" color="text.secondary">
                                    標高：{activity.elevation}m
                                </Typography>
                            </div>
                            
                        }
                    />
                </div >
                <div className='c-new-plan-card-items-left'>
                    <a href={activity.couse_link} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            // sx={{width: '50%', height:300}}
                            image={activity.couse_map}
                            alt="image map"
                        />
                    </a>
                </div>
            </div>
            
            
        </Card>
      ) 
}

export default NewPlanCycle
