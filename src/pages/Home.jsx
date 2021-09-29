import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {listenAuthState, selectIsSignIn,selectStatus} from '../features/auth/authSlice'
import {LoadingSpiner} from '../components/index'
import './page.css'
const Home = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn) 
    const isLoding = useSelector(selectStatus)
    useEffect(()=>{
        if(isSignIn !== true){
            dispatch(listenAuthState())
        }
    },[isSignIn,dispatch])
    return (
        <div className="page-container">
            <h1>HOME</h1>
            {isSignIn === true 
            ?<div>Todosリスト</div>
            :<div>サインインしていません</div>
            }
            <LoadingSpiner isLoading={isLoding}/>
        </div>
    )
}

export default Home
