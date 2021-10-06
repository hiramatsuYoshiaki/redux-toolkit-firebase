import React,{useEffect,useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {listenAuthState, selectIsSignIn,selectStatus} from '../features/auth/authSlice'
import { fetchFirestore,selectorFirestoreUid,selectorFirestoreTodo} from '../features/firestore/firestoreSlice'
import {LoadingSpiner,Cardlayout,Centering} from '../components/index'
import './page.scss'
const Home = () => {
    // const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn) 
    // const isLoding = useSelector(selectStatus)
    // const firestoreUid = useSelector(selectorFirestoreUid)
    // const firestoreTodo = useSelector(selectorFirestoreTodo)
    // console.log(firestoreUid);
    
    // useEffect(()=>{
    //     if(isSignIn !== true){
    //         dispatch(listenAuthState()) 
    //     }
    // },[isSignIn,dispatch])
    // useEffect(()=>{
    //     if(firestoreUid === null){
    //         dispatch(fetchFirestore())  
    //     }
    // },[firestoreUid,dispatch])


    
    return (
        <div className="page-fexed-container">
            {/* <h1>HOME</h1> */}
            {isSignIn === true 
            ?
                // <Cardlayout />
                // <Link to="/welcom"  />
                <Redirect push to="/activities" />
            :
                // <Centering />
                // <Link to="/activities"  />
                <Redirect push to="/welcom" />

            }
            {/* <LoadingSpiner isLoading={isLoding}/> */}
        </div>
    )
}

export default Home
