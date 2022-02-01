import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import cycle_img from '../../assets/img/img3115.jpg'
import './Sports.scss'


const Sports = () => {
    return (
       <div className='l-sports-container'> 
            <Card sx={{  margin:'18px 8px 36px 8px', boxShadow:'none'}}>
                <CardMedia
                    component="img"
                    width='100%'
                    height="auto"
                    image={cycle_img}
                    alt="cycle image"
                    sx={{ maxWidth:'1200px'}}
                />
            </Card>
             
            <CardActions>
                 <div>
                <Link to='/sports/feeds' >
                <div>
                    
                    <Button variant='outlined'>Feeds</Button>
                </div>
                </Link>
            </div>
                
                <div>
                <Link to='/sports/new' >
                    <div>
                    <Button variant='outlined'>New</Button>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/sports/activities' >
                    <div>
                    <Button variant='outlined'>Activities</Button>
                    </div>
                </Link>
            </div>
            
            <div>
                    <Link to='/sports/persons' >
                        <div>
                            <Button variant='outlined'>Personal</Button>
                        </div>
                    </Link>
                </div>
            <div>
                <Link to='/sports/config' >
                <div>
                   
                    <Button variant='outlined'>Config</Button>
                </div>
                </Link>
            </div>
              
                
               
            </CardActions>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                サイクルライフ
                </Typography>
                <Typography variant="h5" color="text.secondary">
                あなたのサイクルアクティビティを、仲間とシェアしましょう。
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ニュースフィードへの表示されたアクティビティ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                アクティビティーの計画を作る
                </Typography>
                <Typography variant="body2" color="text.secondary">
                自分のアクティビティーを見る
                </Typography>
                <Typography variant="body2" color="text.secondary">
                自分の情報を変更する
                </Typography>
                <Typography variant="body2" color="text.secondary">
                設定を変更する
                </Typography>
            </CardContent>
            {/* <div>
                <Link to='/sports/persons' >
                <div>
                    1.自分の情報
                    <Button variant='outlined'>Personal</Button>
                </div>
                </Link>
            </div>
        
            <div>
                <Link to='/sports/new' >
                    <div>
                        2.アクティビティーの計画
                    <Button variant='outlined'>New</Button>
                    </div>
                </Link>
            </div>

            <div>
                <Link to='/sports/activities' >
                    <div>
                        3.自分のアクティビティー
                    <Button variant='outlined'>Activities</Button>
                    </div>
                </Link>
            </div>
            
            <div>
                <Link to='/sports/feeds' >
                <div>
                    4.フィード
                    <Button variant='outlined'>Feeds</Button>
                </div>
                </Link>
            </div>
            <div>
                <Link to='/sports/config' >
                <div>
                    5.設定
                    <Button variant='outlined'>Config</Button>
                </div>
                </Link>
            </div> */}
            
        </div> 
    )
}

export default Sports
