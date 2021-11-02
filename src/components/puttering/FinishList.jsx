import React from 'react'
import { useDispatch } from 'react-redux'
import { updatePuttering, getPuttering, removePuttering } from '../../features/puttering/putteringSlice';
import {useHistory} from 'react-router-dom'
import { format} from 'date-fns'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Finish.scss'
const styles = {
    open:{
     display:'block',
    },
    close:{
        display:'none',  
    }
 }
const FinishList = ({isOpenFinish, setIsOpenFinish, putterings, user}) => {
    console.log('FinishList')
    const dispatch = useDispatch()
    const history = useHistory()
    const starttime = (dateTime) =>{
        const jsTimestamp = dateTime.toDate()
        const fromtDateTime = format(jsTimestamp, 'yyyy/MM/dd/ HH:mm')
        return  fromtDateTime
    }
    const handleClose = () => {
        setIsOpenFinish(!isOpenFinish)
    }
    const handleDone = (selectPuttering) => {
        // console.log('handleDoneTodo id: ' ,puttering.id);
        // alert('handleDone title:'+ selectPuttering.puttering.title)
        dispatch(updatePuttering(selectPuttering)) 
        dispatch(getPuttering(user.uid))
    }
    const handleDell = (dellPuttering) => {
        console.log('handleDell dellPuttering: ',dellPuttering);
        dispatch(removePuttering(dellPuttering)) 
        dispatch(getPuttering(user.uid))
    }
    const handleClickDetail = (detailPuttering) =>{
        console.log('handleClickDetail');
        // history.push('/activities/putteringDetail')
        history.push({
            pathname: '/activities/putteringDetail',
            state:{
                field:{
                    create_at:detailPuttering.create_at.toDate(),
                    done:detailPuttering.done,
                    id:detailPuttering.id,
                    puttering:{
                        course:detailPuttering.puttering.course,
                        datePicker:detailPuttering.puttering.datePicker.toDate(),
                        title:detailPuttering.puttering.title
                    },
                    uid:detailPuttering.uid,
                    update_at:detailPuttering.update_at.toDate()
                }
            }
        })
    }
    return (
        <div className="c-puttring-finish-container" style={isOpenFinish ? styles.open : styles.close}>
            <div className="c-puttring-un-finish-header-title">
                <PlaylistAddCheckIcon />
                <div className="c-puttring-new-header-close">
                    <h3>ポタリング</h3>
                    <CancelIcon onClick={handleClose}/> 
                </div>
            </div>
            {putterings.length > 0  && 
                putterings.map((puttering,index)=>(
                    <div key={index} >
                        { puttering.done 
                            ? <div className="c-puttring-finish-activities">
                                <div className="c-puttring-finish-check">
                                    <div onClick={()=>handleDone(puttering)} className="c-puttring-check-box">
                                        <CheckBoxIcon />
                                        <span>{starttime(puttering.puttering.datePicker)}</span>
                                    </div>
                                    <div onClick={()=>handleDell(puttering)}>
                                        <DeleteIcon />
                                    </div>
                                    
                                </div>
                                <div  onClick={()=>handleClickDetail(puttering)} className="c-puttring-finish-title">
                                    <h2>{puttering.puttering.title}</h2><ArrowForwardIcon />
                                </div>
                                
                                <h5 className="c-puttring-finish-course">{puttering.puttering.course}</h5>
                            </div>
                            : null
                        }
                    </div>
                ))
            }
        </div> 
    )
}

export default FinishList
