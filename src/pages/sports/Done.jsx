import React from 'react'
import {useHistory} from 'react-router-dom'
import {FormDone} from '../../components/sports/index'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {formatdate} from '../../utils/formatdate' 

const Done = () => {
    console.log('done********')
    const history = useHistory()
    const activity = history.location.state.activity
    const profile = history.location.state.profile
    return (
        <div className='l-sports-container'>
            <h1>アクティビティの実行結果を入力</h1>
            <CardContent>
                    <div>{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}</div>
                    <div>{activity.title}</div>
            </CardContent>
            <Card sx={{ width: '100%', marginBottom:'8px'}} variant="text">
                <CardMedia
                    component="img"
                    sx={{width: '100%', height:'300px', maxWidth:'500px'}}
                    image={activity.couse_map}
                    alt="image map" 
                />
            </Card>
            <FormDone profile={profile} activity={activity} /> 
            {profile 
                ?
                    <div>
                        <div>username:{profile.username}</div>
                        <div>email:{profile.email}</div>
                    </div>
                : null}
            {activity 
                ? 
                    <div>
                        <div>id:{activity.id}</div>
                        <div>title:{activity.title}</div>
                        <div>距離:{activity.distance}ｋｍ</div>
                        <div>獲得標高:{activity.elevation}ｍ</div>
                        <div>タイム:</div>
                        <div>平均速度:</div> 
                    </div> 
                : null}
        </div>
    )
}

export default Done
