import React from 'react';
import {Link} from 'react-router-dom'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import cycle_img from '../../assets/img/img3115.jpg'
import camera_img from '../../assets/img/img0749.jpg'
import './ActivityType.scss'
import { lightBlue } from '@mui/material/colors';

const ActivityType = () => {
  return (
    <div className='c-activity-type-container'>
        {/* <h3>アクティビティタイプ</h3> */}
        <div className="c-activity-type-card-wraper">
            <Link to='/sports' >
                <Card sx={{ maxWidth: 345, margin:'18px 8px', boxShadow:'none', backgroundColor:'whitesmoke'}}>
                    <CardHeader
                        avatar={
                            <Link to='/sports' >
                        <IconButton aria-label="settings">
                            <DirectionsBikeIcon />
                        </IconButton>
                        </Link>
                        }
                        action={
                            <IconButton aria-label="settings">
                                < ArrowForwardIcon />
                            </IconButton>
                        }
                        title="CYCLE"
                        subheader="Activities"
                        sx={{ color:lightBlue }}
                    />
                    <CardMedia
                        component="img"
                        height="140"
                        image={cycle_img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        サイクルライフ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        あなたのサイクルアクティビティを、仲間とシェアしましょう。
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Link to='/sports' >
                            <Button size="small">はじめる</Button>
                        </Link>
                    </CardActions> */}
                </Card>
            </Link> 
            <Card sx={{ maxWidth: 345, margin:'18px 8px', boxShadow:'none' , backgroundColor:'whitesmoke'}}>
                <CardHeader
                    avatar={
                    <IconButton aria-label="settings">
                        <CameraAltIcon />
                    </IconButton>
                    }
                    action={
                        <IconButton aria-label="settings">
                            < ArrowForwardIcon />
                        </IconButton>
                    }
                    title="PHOTO"
                    subheader="Activities" 
                />
                <CardMedia
                    component="img"
                    height="140"
                    image={camera_img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    フォトライフ
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    あなたのフォトアクティビティを、仲間とシェアしましょう。
                    </Typography>
                </CardContent>
            </Card>
        </div>

    </div>
  )
};

export default ActivityType;
