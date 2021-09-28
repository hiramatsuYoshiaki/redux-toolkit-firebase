import React from 'react'
// import './inputForm.css'
const styles = {
    label:{
        marginRight:".4rem",
        fontSize:".8rem",
    },
    feild:{
        marginBottom: ".4rem",
    },
    input:{
        marginBottom:".4rem",
    }
}
const InputForm = ({label,id,name,type,value,onChange}) => {

    return (
        <div>
            <div style={styles.label}>
                <label htmlFor={id}>{label}</label>
            </div>
            <div style={styles.feild}>
                <input id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={e=>onChange(e)} 
                    style={styles.input}
                    />
            </div>
            
        </div>
        
    )
}

export default InputForm
