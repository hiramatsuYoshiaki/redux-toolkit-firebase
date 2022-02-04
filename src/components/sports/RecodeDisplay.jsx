import React from 'react'
import Typography from '@mui/material/Typography'
import './RecodeDisplay.scss'

const RecodeDisplay = ({title, recode, unit}) => {
  return <div className='c-recode-display'>
            <div>
                <Typography gutterBottom variant="caption" component="div" color="text.secondary">{title}
                </Typography>
             </div>
            <div>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary">{Number(recode).toLocaleString()}
                </Typography>
            </div>
             <div>
                <Typography gutterBottom variant="caption" component="div" color="text.secondary">{unit}
                </Typography>
             </div>
      </div>
}

export default RecodeDisplay
