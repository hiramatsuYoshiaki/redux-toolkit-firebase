import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const styles = {
    container:{
     width:'100%',
     margin:'0 8px',
     padding:'0 8px',
     textAlign:'center',
     border:'1px solid grey',
    },
    open:{
        display:'block',
    },
    close:{
        display:'none',
    }
 }

const New = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div style={styles.container}>
            <IconButton onClick={handleClick} style={!isOpen ? styles.open : styles.close}　size="small">
                <ArrowCircleDownIcon  />ポタリングを計画する
            </IconButton>
            <IconButton onClick={handleClick} style={isOpen ? styles.open : styles.close} size="small">
                <ArrowCircleUpIcon />閉じる
            </IconButton>
            {/* <div >
                    <ArrowCircleDownIcon onClick={handleClick} style={!isOpen ? styles.open : styles.close}/>
                    <ArrowCircleUpIcon onClick={handleClick} style={isOpen ? styles.open : styles.close}/>
                    ポタリングを計画する
            </div> */}
            <div style={isOpen ? styles.open : styles.close}>
                <div>Input New Puttering</div>
            </div>  
        </div>
    )
}

export default New
