import React from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectIsSignIn} from '../features/auth/authSlice'
import './page.scss'
const Home = () => {
    const isSignIn = useSelector(selectIsSignIn) 
    return (
        <div className="page-fexed-container">
            {/* <h1>HOME</h1> */}
            {isSignIn === true 
                ? <Redirect push to="/activities" />
                : <Redirect push to="/welcom" />
            }
            {/* <LoadingSpiner isLoading={isLoding}/> */}
        </div>
    )
}

export default Home
