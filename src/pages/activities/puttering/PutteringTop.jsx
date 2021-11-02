import React from 'react'
// import {Redirect} from 'react-router-dom'

import { selectUser,} from '../../../features/auth/authSlice'
import { selectPerson} from '../../../features/account/accountSlice'
import {useSelector, } from 'react-redux'
import { Link} from 'react-router-dom' 
import Button from '@mui/material/Button';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const PutteringTop = () => {
    // const dispatch = useDispatch()
    // const isSignIn = useSelector(selectIsSignIn)
    const user = useSelector(selectUser)
    const person = useSelector(selectPerson)
    console.log('person',person);
    // const handleClick = () => {
    //     dispatch(addAccount(user))  
    // } 
    // useEffect(()=>{
    //     console.log('useEffect');
    //     if(user.isSignIn === true ){
    //         dispatch(getAccount(user.uid)) 
    //     }
    // },[user.isSignIn,dispatch])
    return (
        <div className="page-fexed-container">  
            {user.isSignIn === false 
                ? <>
                    {/* <Redirect to='/' ></Redirect> */}
                    <div>サインインしていません</div>
                    <Link to='/signin' >
                        <Button>サインイン</Button> 
                    </Link>
                </> 
                : <>
                    <div>Puttering</div>
                    {/* {person.uid === undefined
                        ? 
                        <Button variant="text" 
                            endIcon={<ArrowForwardIcon />} 
                            sx={{ 
                                color:"#121212",
                                fontSize:'28px',
                            }}
                            onClick={handleClick}
                        >
                            はじめる!!!
                        </Button>
                        : <div>
                            <div>ポタリングを表示する!!!</div>
                            <div>{person.uid}</div>
                        </div>
                        // <Redirect to="/activities/puttering" />
                    } */}
                    {/* <h1>ポタリング</h1> 
                    {user.username}
                    {user.uid} */}
                    
                    {/* <div>
                        <Link to='/activities/puttering' >
                            <Button variant="text" 
                                    endIcon={<ArrowForwardIcon />} 
                                    sx={{
                                        color:"#121212",
                                        fontSize:'28px',
                                    }}
                            >
                                マイポタリング
                            </Button>
                        </Link>
                    </div> */}
                    {/* <div>TIMELINE</div>
                    <div>MY PUTTERING</div>
                    <div>GROUP CHAT</div>
                    <div>MY GALLERY</div>
                    <div>SETTING</div> */}
                    
                </>
            }
        </div>
    )
}

export default PutteringTop
