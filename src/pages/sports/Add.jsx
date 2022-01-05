import React from 'react'
import { FormActivity } from '../../components/sports'
const styles={
    map:{
        borderRadius: '16px',
        width:"300px",
        height:"200px",  
        border:"1px solid gery",  
    },
    icon: {
        marginRight: 8,
        height: 48,
        width: 48
    },
    bottomMargin:{
        marginBottom:"16px",
    },
    topMargin:{
        marginTop:"16px",
    }
}
const Add = () => {
    return (
        <div className='l-sports-container'>
            <div style={styles.topMargin}>
                <div>
                    <FormActivity />
                </div>
            </div>
        </div>
    )
}

export default Add
