import React, { Profiler } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blueGrey } from '@mui/material/colors';
import { RecodeDisplay } from '../../components/sports/index';
import { RecodeDisplayTime } from '../../components/sports/index';
import { BestRecodeDispaly } from '../../components/sports/index';
import { format} from 'date-fns'
import {formatdate} from '../../utils/formatdate'
import './DashbordCycle.scss'

const DashbordCycle = ({profile, activities, count, distance,elevation,rideTime, maxDistance,maxAvarage,maxElevation,year}) => {
    console.log('DashbordCycle');
    console.log(maxDistance);
    console.log(maxAvarage);
    console.log(maxElevation);
    
  return (
      <Card sx={{  width:'100%', maxWidth: '1200px' , margin:'18px 8px', boxShadow:'none', backgroundColor:'whitesmoke'}}>
          <CardHeader
                avatar={
                    <Avatar  aria-label="recipe" src={profile.photoURL} />
                }
                title={ <Typography variant="body1" component="div" color="text.secondary">
                        {profile.username}
                        </Typography>} 
                // subheader={
                    // <Typography gutterBottom variant="caption" component="div" color="text.secondary">
                    //     {year}年
                    // </Typography>
                // }
            />
            <CardContent sx={{ backgroundColor:'white'}}> 
                <div className='c-dashbord-cycle-recode-title'>MY RECOAD</div>
                <div className='c-dashbord-cycle-recode-wraper'>
                    <RecodeDisplay title='ライド' recode={count} unit='回'/> 
                    <RecodeDisplay title='距離' recode={distance} unit='Kｍ'/>
                    <RecodeDisplay title='獲得標高' recode={elevation} unit='ｍ'/>
                </div>
                <div className='c-dashbord-cycle-recode-wraper'>
                    <RecodeDisplayTime title='タイム' recode={rideTime} unit='時間：分：秒'/> 
                     <RecodeDisplay title='平均速度' recode={Math.round( (distance/( rideTime/3600 )) * 10 ) /10} unit='Kｍ'/> 
                </div>
            </CardContent>
            <CardContent sx={{ backgroundColor:'white'}}> 
                <div className='c-dashbord-cycle-recode-title'>BEST RECOAD</div>
                {/* <div className='c-dashbord-cycle-recode-wraper'>
                    <BestRecodeDispaly title='最長距離' recode={maxDistance.doneDistance} unit='Km' type='' link='' /> 
                    <BestRecodeDispaly title='Activityへ移動' recode={formatdate(maxDistance.date,'MM月dd日')} unit='' type='detale' link=''/> 
                </div>
                <div className='c-dashbord-cycle-recode-wraper'>
                    <BestRecodeDispaly title='獲得標高' recode={250} unit='m' type='' link='' /> 
                    <BestRecodeDispaly title='Activityへ移動' recode='2022-01-07' unit='' type='detale' link=''/> 
                </div>
                <div className='c-dashbord-cycle-recode-wraper'>
                    <BestRecodeDispaly title='平均速度' recode={250} unit='Km' type='' link='' /> 
                    <BestRecodeDispaly title='Activityへ移動' recode='2022-01-07' unit='' type='detale' link=''/> 
                </div> */}
                {/* <div>{maxDistance.doneDistance}</div> */}
                {maxDistance ? 
                <div className='c-dashbord-cycle-recode-wraper'>
                    <BestRecodeDispaly title='最長距離' recode={maxDistance.doneDistance} unit='Km' type='' link='' /> 
                    <BestRecodeDispaly title='Activityへ移動' recode={formatdate(maxDistance.date,'MM月dd日')} unit='' type='detale' link=''/> 
                </div>
                : null}
                {maxAvarage?
                <div className='c-dashbord-cycle-recode-wraper'>
                    <BestRecodeDispaly title='平均速度' recode={maxAvarage.doneAverage} unit='Km' type='' link='' /> 
                    <BestRecodeDispaly title='Activityへ移動' recode={formatdate(maxDistance.date,'MM月dd日')} unit='' type='detale' link=''/> 
                </div> 
                :null}
                {maxElevation?
                <div className='c-dashbord-cycle-recode-wraper'>
                    <BestRecodeDispaly title='獲得標高' recode={maxElevation.doneElevation} unit='m' type='' link='' /> 
                    <BestRecodeDispaly title='Activityへ移動' recode={formatdate(maxDistance.date,'MM月dd日')} unit='' type='detale' link=''/> 
                </div>    
                :null} 
            </CardContent>
      </Card>
   
  )
};

export default DashbordCycle;
