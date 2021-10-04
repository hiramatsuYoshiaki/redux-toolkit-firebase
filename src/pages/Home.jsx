import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {listenAuthState, selectIsSignIn,selectStatus} from '../features/auth/authSlice'
// import { selectorFirestoreUser,selectorFirestoreTodo} from '../features/firestore/firestoreSlice'
import {LoadingSpiner,Cardlayout,Centering} from '../components/index'
import './page.scss'
const Home = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn) 
    const isLoding = useSelector(selectStatus)
    // const firestoreUser = useSelector(selectorFirestoreUser)
    // const firestoreTodo = useSelector(selectorFirestoreTodo)
    
    useEffect(()=>{
        if(isSignIn !== true){
            dispatch(listenAuthState())
        }
    },[isSignIn,dispatch])


    
    return (
        <div className="page-fexed-container">
            {/* <h1>HOME</h1> */}
            {isSignIn === true 
            ?
                <Cardlayout />
            :
                <Centering />
            }
            <LoadingSpiner isLoading={isLoding}/>
        </div>
    )
}

export default Home
