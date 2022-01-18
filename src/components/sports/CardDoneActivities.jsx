import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import {formatdate} from '../../utils/formatdate'

const CardDoneActivities = ({activity}) => {
    return (
        <Card sx={{ width: '100%'}}>
                <div>{activity.title}</div>
                <div>{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}</div>
                <div>{activity.title}</div>
                <div>{activity.doneDistance}km</div>
                <div>{activity.doneElevation}m</div>
                <div>平均{activity.doneAverage}km</div>
                <div><span>{activity.doneTimehh}</span>時間<span>{activity.doneTimemm}</span>分</div>
               <div>
               <iframe src={activity.garmin} title='garmin' width='465' height='500' frameborder='0'></iframe>
               </div>
               <div>
               <iframe src={activity.relive} title='garmin' width='465' height='500' frameborder='0'></iframe>
               </div>
               <div>
               <iframe src={activity.strava} title='garmin' width='465' height='500' frameborder='0'></iframe>
               </div>
                {/* <iframe src='https://connect.garmin.com/modern/activity/embed/7520257989' title='三幡～牛窓オリーブ園～長嶋愛生園' width='465' height='500' frameborder='0'></iframe>
                <iframe src='https://connect.garmin.com/modern/activity/embed/7520257989' title='garmin' width='465' height='500' frameborder='0'></iframe>
                <iframe src='https://www.relive.cc/view/vWqBrxYPAYq' title='relive' width='465' height='500' frameborder='0'></iframe>
                <iframe src='https://www.strava.com/activities/6541394838/embed/de98db7aa005c2ed08dda0292ae58d0f88c61849' title='strava' width='465' height='500' frameborder='0'></iframe> */}
              {/* <div>
                    {activity.title}
                </div> 
                <div>
                    {formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}
                </div> */}
                {/* const activitiy = { 
                    id:activityData.id,
                    owner:activityData.owner,
                    title:activityData.title,
                    date:activityData.date,
                    couse:activityData.couse,
                    start:activityData.start, 
                    gole:activityData.gole,
                    distance:activityData.distance,
                    elevation:activityData.elevation, 
                    couse_map:activityData.couse_map,
                    couse_link:activityData.couse_link,
                    segment:activityData.segment,
                    coment:activityData.coment,
                    public:activityData.public,
                    participation:activityData.participation,
                    done:activityData.done,

                    doneDistance:'0',
                    doneElevation:'0',
                    doneAverage:'0',
                    doneTimehh:'0',
                    doneTimemm:'0',
                    photos:[],
                    video:[], 

                    garmin:activityData.garmin,
                    relive:activityData.relive,
                    strava:activityData.strava, */}
        </Card>
    )
}

export default CardDoneActivities
