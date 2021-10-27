import React,{useState} from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ListIcon from '@mui/icons-material/List';
import './BottomNav.scss'

const BottomNav = ({
    isOpenNew, 
    isOpenUnFinish, 
    isOpenFinish, 
    setIsOpenNew, 
    setIsOpenUnFinish, 
    setIsOpenFinish}) => {
    const [value, setValue] = useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const handleNew = () => {
        setIsOpenNew(!isOpenNew)
    }
    const handleUnFinish = () => {
        setIsOpenUnFinish(!isOpenUnFinish)
    }
    const handleFinish = () => {
        setIsOpenFinish(!isOpenFinish)
    }
    return (
        <div className="c-puttring-bottom-nav-container"> 
            <BottomNavigation
                 value={value} 
                 onChange={handleChange}
                 sx={{ 
                    height:'auto',
                    backgroundColor:'#e1f5fe'
                    }}
            >
                <BottomNavigationAction label="New" icon={<FiberNewIcon onClick={handleNew}/>} />
                <BottomNavigationAction label="Planning" icon={<ListIcon />} onClick={handleUnFinish}/>
                <BottomNavigationAction label="Finish" icon={< PlaylistAddCheckIcon />} onClick={handleFinish}/>
            </BottomNavigation>
        </div>
    )
}

export default BottomNav
