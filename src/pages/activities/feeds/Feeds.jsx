import React from 'react'
import { selectUser,selectIsSignIn,} from '../../../features/auth/authSlice'
import {useDispatch,useSelector} from 'react-redux'
import { Link, Redirect,useHistory} from 'react-router-dom' 

const Feeds = () => {
    const isSignIn = useSelector(selectIsSignIn)
    return (
        <div className="page-fexed-container">  
            {isSignIn === false 
            ? <>
                {/* <Redirect to='/' ></Redirect> */}
                <div>サインインしていません</div>
                <Link to='/signin' >
                    <button>サインイン</button>
                </Link>
              </>
            : 
            <>
            <h1>Feeds</h1>
            </>}
        </div>
    )
}

export default Feeds
