import React from 'react'
import Typography from '@mui/material/Typography'
import './RecodeDisplay.scss'
const RecodeDisplayTime = ({title, recode, unit}) => {
  return <div className='c-recode-display'>
            <div>
                <Typography gutterBottom variant="caption" component="div" color="text.secondary">{title}
                </Typography>
             </div>
            <div className='c-recode-display-time'>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary">{Math.floor(recode/3600)}:
                </Typography>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary">{Math.floor(recode%3600/60)}:
                </Typography>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary">{Math.floor((recode%3600)%60)}
                </Typography>
            </div>
             <div>
                <Typography gutterBottom variant="caption" component="div" color="text.secondary">{unit}
                </Typography>
             </div> 
      </div>
}

export default RecodeDisplayTime
