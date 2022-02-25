import React from 'react'
const styles={
    wraper:{
        marginBottom:'8px'
    },
    upper:{
        fontSize:'22px',
    },
    lower:{
        fontSize:'12px',
        color:'grey'
    },
    unit:{
        marginLeft:'8px',
    }
}
const CardContentLine = ({title, value, unit}) => {
  return (
    <div style={styles.wraper}>
        <div style={styles.upper}>
            <span>{value}</span>
            <span style={styles.unit}>{unit}</span>
        </div>
        <div style={styles.lower}>{title}</div>
    </div>
  )
}

export default CardContentLine
