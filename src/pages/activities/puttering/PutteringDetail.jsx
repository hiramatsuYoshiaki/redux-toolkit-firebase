import React from 'react'
import { useLocation } from 'react-router-dom';
import {Link,Redirect} from 'react-router-dom'
import { format} from 'date-fns'


const PutteringDetail = () => {
    const location= useLocation();
    console.log(location.state);
    
    return (
        
        <div className="page-fexed-container">
            {(location === null  || location === undefined)
                ? <Redirect push to="/activities/puttering" />
                : <div>
                    <h1>puttering detail</h1>
                    <h1>{location.state.field.puttering.title}</h1>
                    <h3>{location.state.field.puttering.course}</h3>
                    <h3>{format(location.state.field.puttering.datePicker, 'yyyy/MM/dd/ HH:mm')}</h3>
                    <h3><Link to="/activities/puttering">戻る</Link></h3>
                  </div>
            }
            {/* <LoadingSpiner isLoading={isLoding}/> */}
        </div>
    )
}

export default PutteringDetail
