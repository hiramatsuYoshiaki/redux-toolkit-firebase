import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FeedIcon from '@mui/icons-material/Feed';
import './BottomMenuBar.scss'

const BottomMenuBar = () => {
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
                 sx={{height:'auto',backgroundColor:'#e1f5fe'}}
            >
                <BottomNavigationAction label="Top" icon={<HomeIcon />} onClick={()=>history.push('/sports')}/>
                <BottomNavigationAction label="Person" icon={<PersonIcon />} onClick={()=>history.push('/sports/persons')}/>
                <BottomNavigationAction label="New" icon={<AddBoxIcon />} onClick={()=>history.push('/sports/new')}/>
                <BottomNavigationAction label="Activities" icon={<DirectionsBikeIcon />} onClick={()=>history.push('/sports/activities')}/>
                <BottomNavigationAction label="Feeds" icon={<FeedIcon />} onClick={()=>history.push('/sports/feeds')}/>
                <BottomNavigationAction label="Config" icon={<SettingsApplicationsIcon />} onClick={()=>history.push('/sports/config')}/>


                {/* <BottomNavigationAction label="Timeline" icon={<DirectionsBikeIcon />} onClick={()=>history.push('/activities/putteringTimeline')}/>
                <BottomNavigationAction label="puttering" icon={<AddBoxIcon />} onClick={()=>history.push('/activities/puttering')}/> */}
            </BottomNavigation>
        </div>
    )
}

export default BottomMenuBar
