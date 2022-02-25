import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {formatdate} from '../../utils/formatdate'
const CardNewActivities = ({
        activity,
        handleClickPublish, 
        handleClickDone,
        handleClickEdit,
        handleClickDelete, }) => {

    console.log('CardNewActivities'); 
    return ( 
        <Card sx={{ width: '100%'}}>
            <div>{activity.title}</div>
            <div>{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}</div>
            <a href={activity.couse_link} target="_blank" rel="noopener noreferrer">
                <CardMedia
                    component="img"
                    sx={{width: '100%', height:300}}
                    image={activity.couse_map}
                    alt="image map"
                />
            </a>
            <CardContent> 
            <a href={activity.couse_link} target="_blank" rel="noopener noreferrer">
                <div>コース詳細を見る</div>
            </a>
            <div>{activity.segment}</div> 
            
            <div>
                <span>{activity.distance}Km</span>
                <span>{activity.elevation}m</span>
            </div>
            <div>{activity.couse}</div>
            
          
            
             
            <div>集合場所:{activity.start}</div>
            {/* <div>解散場所{activity.gole}</div> */}
            <div>コメント</div>
            <div>{activity.coment}</div>
            {/* <div>public:{activity.public}</div> */}
            <div>参加者:</div>
            <div>{activity.participation}</div>
            {/* <div>done:{activity.done?'完了':'予定イベント'}</div> */}
            {/* <div>garmin:{activity.garmin}</div>
            <div>relive:{activity.relive}</div>
            <div>strava:{activity.strava}</div> */}
            {/* <div>create_at:{starttime(activities.create_at)}</div>
            <div>update_at:{starttime(activities.update_at)}</div> */}
            {/* <div>status:{activities.status}</div> */}
            <div>公開:{activity.public}</div>
            {activity.public === 'public' 
                ?
                <Button size="small" variant='outlined' onClick={()=>handleClickPublish(activity)}>
                    <span>フィードに表示</span>
                </Button>
                :
                <Button size="small" variant='outlined'  onClick={()=>handleClickPublish(activity)}>
                    <span>フィードに表示</span>
                </Button>
            }
        </CardContent>
        <CardActions>
            <Button size="small" variant='outlined' onClick={()=>handleClickDone(activity)}>実走データ入力</Button>
            <Button size="small"  variant='outlined' onClick={()=>handleClickEdit(activity)}>変更</Button>
            <Button size="small"  variant='outlined' onClick={()=>handleClickDelete(activity)}>削除</Button>
        </CardActions>
    </Card>
    )
}

export default CardNewActivities
