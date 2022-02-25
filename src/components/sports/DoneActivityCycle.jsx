import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import EventIcon from '@mui/icons-material/Event';
import InboxIcon from '@mui/icons-material/Inbox';
import {formatdate} from '../../utils/formatdate'
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';

const DoneActivityCycle = ({activity}) => {
  return (
      <List sx={{ width: '100%', maxWidth: '1200px' }}>
        <ListItem 
            secondaryAction={
            <IconButton 
                edge="end" 
            >
                <ArrowForwardIcon />
            </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemText 
                primary={formatdate(activity.date,'yyyy年MM月dd日')} 
                secondary={
                    <div>
                        <div>
                            {activity.title}
                        </div>
                        <div>
                            
                            <span> {formatdate(activity.doneRideTime,'HH時間mm分ss秒 ')}</span>
                            <span> {activity.doneDistance}Km</span>
                        </div>
                    </div>
                }
                />
            </ListItemButton>
        </ListItem>
        <Divider  />
    </List>
  )
};

export default DoneActivityCycle;
