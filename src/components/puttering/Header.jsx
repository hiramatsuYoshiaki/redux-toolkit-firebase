import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Header.scss'
const Header = ({pageTitle,
                user, 
                isOpenNew, 
                isOpenUnFinish, 
                isOpenFinish, 
                setIsOpenNew, 
                setIsOpenUnFinish, 
                setIsOpenFinish}) => {
    const handleClickNew = () =>{
        setIsOpenNew(!isOpenNew)
    }
    const handleClickUnFinish = () =>{
        setIsOpenUnFinish(!isOpenUnFinish)
    }
    const handleClickFinish = () =>{
        setIsOpenFinish(!isOpenFinish)
    }
    return (
        <div className="c-puttring-haeder-container">
            {/* <h5>{pageTitle}</h5> */}
            {/* <p>{user.username}</p> */}
            <div className="c-puttring-haeder-menu">
                <div className="c-puttring-haeder-menuTitle">ポタリング</div>
                {(isOpenNew === false && isOpenUnFinish === false && isOpenFinish === false)
                ?  
                    <ButtonGroup variant="outlined" aria-label="outlined button group" color="inherit">
                        <Button onClick={handleClickNew}>New</Button>
                        <Button onClick={handleClickUnFinish}>Planning</Button>
                        <Button onClick={handleClickFinish}>Finish</Button>
                    </ButtonGroup>
                :   null
                }
               
            </div>
        </div>
    )
}

export default Header
