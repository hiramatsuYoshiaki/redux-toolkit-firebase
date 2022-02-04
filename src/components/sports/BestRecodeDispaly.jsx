import React from 'react'
import Typography from '@mui/material/Typography'
import './RecodeDisplay.scss'

const BestRecodeDispaly = ({title,recode,unit,type,link}) => {
  return <div className='c-best-recode-display'>
            <div>
                <Typography gutterBottom variant="caption" component="div" color="text.secondary">{title}
                </Typography>
             </div>
            <div className='c-recode-display-time'>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary">{recode}
                </Typography>
               <Typography gutterBottom variant="caption" component="div" color="text.secondary">{unit}
                </Typography>
            </div>
      </div>
}

export default BestRecodeDispaly
