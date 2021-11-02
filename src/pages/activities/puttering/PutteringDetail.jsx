import React from 'react'
import {useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import {addTimeline} from '../../../features/putteringTimeline/timelineSlice'

import { format} from 'date-fns'
import {PutteringDetailMenuBar} from '../../../components/puttering/index'
import Button from '@mui/material/Button';

const PutteringDetail = (props) => {
    const location= useLocation(); 
    const dispatch = useDispatch()
    // console.log(location.state);
    const publish = () => {
        console.log('publich');
        dispatch(addTimeline(location)) 
    }
    return (
        <div className="page-fexed-container">
            {(location === null  || location === undefined)
                ? <Redirect push to="/activities/puttering" />
                : <div>
                    <h1>{location.state.field.puttering.title}</h1>
                    <h3>{location.state.field.puttering.course}</h3>
                    <h3>{format(location.state.field.puttering.datePicker, 'yyyy/MM/dd/ HH:mm')}</h3>
                    <Button variant="outlined" onClick={publish}>Publish 公開</Button>
                  </div>
            }
            <PutteringDetailMenuBar />
            {/* <LoadingSpiner isLoading={isLoding}/> */}
        </div>
    )
}

export default PutteringDetail
