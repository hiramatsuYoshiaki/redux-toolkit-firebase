import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectUser,
        selectIsSignIn,
        } from '../features/auth/authSlice'
import { selectorAvater,setDounloadURL,getAvatorAsync } from '../features/storage/storageSlice'
import { Link, Redirect,useHistory} from 'react-router-dom' 
import { AvatarFeature } from '../components/index'
import './page.scss'

const styles={
    wraper:{
        width:"100%",
        padding:".8rem", 
    },
    listContainer:{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between', 
        borderBottom: '1px solid grey',
        margin: 0,
        padding: '8px 8px',
    },
    avater:{
        borderRadius: '50%',
        width:"100%",
        height:"100%",  
        border:"1px solid gery",  
    },
}

const Account = () => {
    // console.log('account------start');
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    const profile = useSelector(selectUser)
    const photoURL = profile.photoURL
    const downloadURL = useSelector(selectorAvater)
    // console.log('auth photoURL',photoURL);
    useEffect(()=>{
        // console.log('useEffect storege getAvater');
        if(photoURL !== ''){
            dispatch(getAvatorAsync(photoURL))
        }
    },[photoURL,dispatch])
    return (
        <div className="page-fexed-container">  
            {isSignIn === false 
            ? <div>
                <div>サインインしていません</div>
                <Link to='/signin' >
                    <button>サインイン</button>
                </Link>
              </div>　
            : <div style={styles.wraper}> 
                <div >
                    <AvatarFeature downloadURL={downloadURL} name={profile.username} email={profile.email}/>
                    {/* avater componentにする */}
                    {/* <div className="page-account-FeatureListContainer">
                        <div className="page-FeatureListContainer_image">
                            <div className="page-avaterContainer"> 
                                <img src={downloadURL} alt="avater" style={styles.avater} />
                            </div>
                        </div>
                        <div className="page-FeatureListContainer_feature">
                            <div>{profile.username}</div>
                            <div>{profile.email}</div>
                        </div>
                    </div> */}

                    {/* auth profile  componentにする */}
                    <div>
                        <div className="page-listContainer">
                            <div>Name</div>
                            <div>{profile.username}</div>
                        </div>
                        <div className="page-listContainer"> 
                            <div>E-mail</div>
                            <div>{profile.email}</div>
                        </div>
                        {/* <div className="page-listContainer">
                            <div>uid</div>
                            <div>{profile.uid}</div>
                        </div>
                        <div className="page-listContainer">
                            <div>photo URL</div>
                            <div>{profile.photoURL}</div>
                        </div> */}
                    </div>
                    <div>
                        {/* <div>{profile.email}</div> */}
                        {/* <div>isSignIn:{profile.isSignIn? 'true' : 'false'}</div>  */}
                        {/* <div>role:{profile.role}</div> */}
                        {/* <div>uid:{profile.uid}</div> */}
                        {/* <div>name:{profile.username}</div> */}
                        {/* <div>E-mail:{profile.email}</div> */}
                        {/* <div>photoURL:{profile.photoURL}</div>  */}
                        </div>
                    <div>
                {/* <div>サインアウトしますか？</div>
                <button  onClick={signout}>
                        Sing-out
                </button> */}
                </div>
              </div>
                {/* <div>firestore</div> */}
              </div>
            }
        </div>
    )
}

export default Account
