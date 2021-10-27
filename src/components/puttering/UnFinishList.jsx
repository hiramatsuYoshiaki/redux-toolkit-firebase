import React from 'react'
import { useDispatch } from 'react-redux'
import { updatePuttering, getPuttering, removePuttering } from '../../features/puttering/putteringSlice';
import {useHistory} from 'react-router-dom'
import { format} from 'date-fns'
import ListIcon from '@mui/icons-material/List';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './UnFinish.scss'
const styles = {
    open:{
        display:'block',
    },
    close:{
        display:'none',  
    }
 }

const UnfinishList = ({isOpenUnFinish,setIsOpenUnFinish, putterings, user}) => {
    console.log('UnFinishList')
    console.log(putterings)
    const dispatch = useDispatch() 
    const history = useHistory()
    const starttime = (dateTime) =>{
        const jsTimestamp = dateTime.toDate()
        const fromtDateTime = format(jsTimestamp, 'yyyy-MM-dd HH:mm')
        return  fromtDateTime
    }
    const handleClose = () => {
        setIsOpenUnFinish(!isOpenUnFinish)
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
            // state:{field:detailPuttering}
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
        <div className="c-puttring-un-finish-container" style={isOpenUnFinish ? styles.open : styles.close}>
            <div className="c-puttring-un-finish-header-title">
                <ListIcon />
                <div className="c-puttring-new-header-close">
                    <h3>予定しているポタリング</h3>
                    <CancelIcon onClick={handleClose}/> 
                </div>
            </div>
            {putterings.length > 0  &&   
                putterings.map((puttering,index)=>( 
                    <div key={index} >
                        { !puttering.done   
                            ? <div className="c-puttring-un-finish-activities">
                                <div className="c-puttring-un-finish-check" >
                                    <div onClick={()=>handleDone(puttering)} className="c-puttring-check-box">
                                        <CheckBoxOutlineBlankIcon />
                                        <span>{starttime(puttering.puttering.datePicker)}</span>
                                    </div>
                                    <div onClick={()=>handleDell(puttering)}>
                                        <DeleteIcon />
                                    </div>
                                </div>
                                <div className="c-puttring-un-finish-title" 
                                    onClick={()=>handleClickDetail(puttering)}
                                >
                                    <h2>{puttering.puttering.title}</h2><ArrowForwardIcon />
                                </div>
                                <h5 className="c-puttring-un-finish-course">{puttering.puttering.course}</h5>
                                {/* <Link to="/activities/putteringDetail">Derail</Link> */}
                                
                            </div>
                            : null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default UnfinishList 
