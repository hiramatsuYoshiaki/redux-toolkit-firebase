import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import {BottomMenuBar} from '../../components/index'

import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Sports = () => {
    const sx = {height:'auto',backgroundColor:'#e1f5fe'}
    const items = [
        // {id:1,label:'TimeLine',icon:'<DirectionsBikeIcon />',link:'/activities/putteringTimeline'},
        // {id:2,label:'Puttering',icon:'<AddBoxIcon /',link:'/activities/puttering'}
        {id:1,label:'TimeLine',icon:DirectionsBikeIcon,link:'/activities/putteringTimeline'},
        {id:2,label:'Puttering',icon:SettingsApplicationsIcon,link:'/activities/puttering'}
    ]
    return (
        <div className='page-fexed-container'>
        
            <Link to='/sports/feeds' >
               <Button variant='outlined'>Feeds</Button>
            </Link>
            <Link to='/sports/activities' >
               <Button variant='outlined'>Activities</Button>
            </Link>
            <BottomMenuBar items={items} sx={sx} /> 
        </div>
    )
}

export default Sports
