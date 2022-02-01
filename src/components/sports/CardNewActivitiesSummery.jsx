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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InfoIcon from '@mui/icons-material/Info';
import {formatdate} from '../../utils/formatdate'
import { style } from '@mui/system'
import { activityDataInit, } from '../../utils/activityDataSet'
import {CardContentLine} from './index'
const styles={
    marginR:{
        marginRight:"8px", 
    },
    distanceArea:{
        display: 'flex',
        justifyContent: 'space-evenly', 
        // border:'1px solid'
    },
    distanceAreaElement:{
        // border:'1px solid',
        width:'100%',

    }
    // avater:{
    //     borderRadius: '50%',
    //     width:"100%",
    //     height:"100%",  
    //     border:"1px solid gery",  
    // },
}
const CardNewActivitiesSummery = ({activity}) => {
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickMoreVertIcon = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const open = Boolean(anchorEl)
    const handleCloseMoreVertIcon = () => {
        setAnchorEl(null)
    }
    

    return (
        <Card>
            <CardHeader 
                avatar={
                <Avatar src={activity.owner.photoURL} />
                }
                action={
                <IconButton 
                    onClick={handleClickMoreVertIcon}
                >
                    <MoreVertIcon />
                </IconButton>
                }
                
                title={<div>{activity.title}</div>}
                subheader={<div>{formatdate(activity.date,'MM月dd日 yyyy年')}</div>} 
                titleTypographyProps={{fontSize: 32, fontWeight: 'bold'}}
                subheaderTypographyProps={{fontSize: 18, }}
            />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMoreVertIcon}
            >
                <MenuItem onClick={handleCloseMoreVertIcon}>プロフィール</MenuItem>
                {/* <MenuItem onClick={handleCloseMoreVertIcon}>My account</MenuItem>
                <MenuItem onClick={handleCloseMoreVertIcon}>Logout</MenuItem> */}
            </Menu>
            <CardMedia
                    component="img"
                    // height="508"
                    // width='478'
                    width='100%'
                    image={activity.couse_map}
                    alt={activity.title}
                    // frameborder="2"
                    // allowfullscreen="allowfullscreen"
                />
            <CardContent>
                
                {activity.start === activity.gole 
                    ?<div>
                        {/* <span style={styles.marginR}></span>
                        <span>{activity.start}</span> */}
                        <CardContentLine title='スタート/ゴール' value={activity.start} unit=''/>
                    </div>
                    :<div>
                        {/* <span>スタート</span>
                        <span>{activity.start}</span> */}
                        <CardContentLine title='スタート' value={activity.start} unit=''/>
                    </div>
                }
                {activity.start === activity.gole 
                    ?null
                    :<div>
                        {/* ゴール{activity.gole} */}
                        <CardContentLine title='ゴール' value={activity.gole} unit=''/>
                    </div>
                }
                <CardContentLine title='日時' value={formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')} unit=''/>
                <div style={styles.distanceArea}>
                    <div style={styles.distanceAreaElement}>
                        <CardContentLine title='距離' value={activity.distance.toLocaleString()} unit='Km'/>
                    </div>
                    <div style={styles.distanceAreaElement}>
                        <CardContentLine title='獲得標高' value={activity.elevation.toLocaleString()} unit='m'/>
                    </div>
                </div>
                <CardContentLine title='コメント' value={activity.coment} unit=''/>
                <CardContentLine title='コース名' value={activity.couse} unit=''/>
                <div>
                    <a href={activity.couse_link}  target="_blank" rel="noopener noreferrer">
                        コース詳細を見る
                    </a>
                </div>
                </CardContent>
             
             {/* <IconButton aria-label="more" onClick={handleExpandClick}>
                    {expanded?<ExpandLessIcon />:<ExpandMoreIcon />}
                </IconButton > */}
            {/* <CardActions disableSpacing> */}
                    {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton> */}
                {/* <IconButton aria-label="more" onClick={handleExpandClick}>
                    {expanded?<ExpandLessIcon />:<ExpandMoreIcon />}
                </IconButton > */}
                {/* <div>コース詳細</div> */}
            {/* </CardActions> */}
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <iframe src={activity.couse_link} title={activity.title}  width='800'  height='500' ></iframe>
            </Collapse> */}
           
               
        </Card>
    )
}

export default CardNewActivitiesSummery 
