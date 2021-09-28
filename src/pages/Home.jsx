import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {listenAuthState, selectIsSignIn,selectStatus} from '../features/auth/authSlice'
import {LoadingSpiner} from '../components/index'
import './page.css'
const styles = {
    checkNow:{
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
    checked:{
        display:'none',
    },
    avater:{
        width:"20rem",
        height:"auto", 
    },
}
const Home = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    const isLoginCheck = useSelector(selectStatus)
    useEffect(()=>{
        if(isSignIn !== true){
            dispatch(listenAuthState())
        }
    },[isSignIn,dispatch])
    return (
        <div className="page-container">
            <h1>HOME</h1>
            {/* <h3>Redux Toolkit</h3>
            <h3>Firebase</h3> */}
            {isSignIn === true 
            ?<div>Todosリスト</div>
            :<div>サインインしていません</div>
            }
            <div style={isLoginCheck === 'loading' ? styles.checkNow : styles.checked}>
                {/* Login check! Now...... */}
                <LoadingSpiner />
            </div>
        </div>
    )
}

export default Home
