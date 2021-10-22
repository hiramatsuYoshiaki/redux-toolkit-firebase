import React from 'react'
const styles = {
   container:{
    width:'100%',
    margin:'0 8px',
    padding:'0 8px',
    textAlign:'center',
    border:'1px solid grey',
   }
}

const PageHeader = ({pageTitle,user}) => {
    return (
        <div style={styles.container}>
            <h5>{pageTitle}</h5>
            {/* <p>{user.username}</p> */}
        </div>
    )
}

export default PageHeader
