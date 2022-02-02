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
import './DashbordCycle.scss'

const DashbordCycle = ({profile, activities, count, distance, year}) => {
  return (
      <Card sx={{  width:'100%', maxWidth: '1200px' , margin:'18px 8px', boxShadow:'none', backgroundColor:'whitesmoke'}}>
          <CardHeader
                avatar={
                    <Avatar  aria-label="recipe" src={profile.photoURL} />
                }
                title={ <Typography variant="body1" component="div" color="text.secondary">
                        {profile.username}
                        </Typography>} 
                subheader={
                    <Typography gutterBottom variant="caption" component="div" color="text.secondary">
                        {year}年
                    </Typography>
                }
            />
            <CardContent>
                <div className='c-dashbord-cycle-recode-wraper'>
                    {/* <Typography variant="body1" component="div" color="text.secondary">
                        {count}回
                    </Typography>
                    <Typography variant="body1" component="div" color="text.secondary">
                            {distance}Km
                    </Typography> */}
                    <RecodeDisplay title='ライド' recode={count} unit='回'/>
                    <RecodeDisplay title='距離' recode={distance} unit='Kｍ'/>
                    {/* <RecodeDisplay title='距離' recode={distance} unit='Kｍ'/>
                    <RecodeDisplay title='距離' recode={distance} unit='Kｍ'/>
                    <RecodeDisplay title='距離' recode={distance} unit='Kｍ'/> */}
                </div>
            </CardContent>
      </Card>
   
  )
};

export default DashbordCycle;
