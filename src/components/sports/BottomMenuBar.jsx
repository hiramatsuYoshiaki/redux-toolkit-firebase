import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'

import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import AddBoxIcon from '@mui/icons-material/AddBox'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FeedIcon from '@mui/icons-material/Feed'

import './BottomMenuBar.scss'

const BottomMenuBar = () => {
    const history = useHistory()    
    const [value, setValue] = useState('recents')
    const handleChange = (event, newValue) => {
        setValue(newValue);
      }
    //menu
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleClickPerson = () => {
        setAnchorEl(null)
        history.push('/sports/persons')
    }
    const handleClickConfig = () => {
        setAnchorEl(null)
        history.push('/sports/config')
    }
    return (
        <div className='c-bottom-menu-bar-container'>
            <BottomNavigation
                 value={value} 
                 onChange={handleChange}
                 sx={{width:'100%',height:'auto',backgroundColor:'#e1f5fe'}}
            >
                <BottomNavigationAction label="Top" icon={<HomeIcon />} onClick={()=>history.push('/sports')}/>
                <BottomNavigationAction label="Feeds" icon={<FeedIcon />} onClick={()=>history.push('/sports/feeds')}/>
                <BottomNavigationAction label="New" icon={<AddBoxIcon />} onClick={()=>history.push('/sports/new')}/>
                <BottomNavigationAction label="Activities" icon={<DirectionsBikeIcon />} onClick={()=>history.push('/sports/activities')}/>
                <BottomNavigationAction label="Menu" icon={<MoreVertIcon />} onClick={handleClick}/>
                <Menu 
                    anchorEl={anchorEl}
                    open={open}
                    onClick={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                >
                    <MenuItem onClick={handleClickPerson} disableRipple>
                        <PersonIcon />Person
                    </MenuItem>
                    <MenuItem onClick={handleClickConfig} disableRipple>
                        <SettingsApplicationsIcon />Config
                    </MenuItem>
                </Menu>
            </BottomNavigation>
        </div>
    )
}

export default BottomMenuBar
