import React from 'react'
import './loading.css'
const styles = {
    loading:{
        position:'fixed',
        top:0,
        left:0,
        zIndex:9999,
        width:'100vw',
        height:'100vh', 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        color:'white',
        opacity:1,
    },
    idle:{
        display:'none',
    },
    wraper:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    }
}

const LoadingSpiner = ({isLoading}) => {
    return (
        <div style={isLoading==='idle' ? styles.idle : styles.loading }>
            <div style={styles.wraper}>
                <div className="loader"></div>
                <div>L o a d i n g . . . . .</div>
            </div>
        </div>
    )
}

export default LoadingSpiner 
