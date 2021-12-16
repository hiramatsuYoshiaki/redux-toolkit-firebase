import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';

import './BottomMenuBar.scss'

const BottomMenuBar = ({items,sx}) => {
    const history = useHistory()    
    const [value, setValue] = useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <div className='c-bottom-menu-bar-container'>
            <BottomNavigation
                 value={value} 
                 onChange={handleChange}
                 sx={sx}
                //  sx={{ 
                //     height:'auto',
                //     backgroundColor:'#e1f5fe'
                //     }}
            >
            {/* {items.map(item=>(
                <BottomNavigationAction 
                    key={item.id}
                    label={item.label} 
                    icon={item.icon} 
                    onClick={()=>history.push(item.link)}
                />
            ))} */}
                <BottomNavigationAction label="TimeLine" icon={<DirectionsBikeIcon />} onClick={()=>history.push('/activities/putteringTimeline')}/>
                <BottomNavigationAction label="Puttering" icon={<AddBoxIcon />} onClick={()=>history.push('/activities/puttering')}/>} />
                <BottomNavigationAction label="CHATS" icon={<ChatBubbleOutlineIcon />} onClick={()=>history.push('/activities/putteringchats')}/>
                <BottomNavigationAction label="GROUP" icon={< SettingsApplicationsIcon onClick={()=>history.push('/activities/putteringconfig')}/>} /> 
            </BottomNavigation>
        </div>
    )
}

export default BottomMenuBar
