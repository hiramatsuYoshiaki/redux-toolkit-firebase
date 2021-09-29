import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectUser,
        selectIsSignIn,
        } from '../features/auth/authSlice'
import { Link, Redirect,useHistory} from 'react-router-dom'
import logo from '../logo.svg'
import './page.css'
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
        // backgroundColor:'grey'
    },
    avaterContainer:{
        borderRadius: '50%',
        height: '64px',
        width: '64px',
        border:'1px solid grey',
    },
    avaterImg:{
        borderRadius: '50%',
        height: '100%',
        width: '100%',
    },
    FeatureListContainer:{
        display: 'flex',
        flexDirection: 'row',
        // flexDirection: 'row-reverse',
        margin: '16px 0',
    },
    FeatureListContainer_image :{
        width: "128px"
    },

    FeatureListContainer_feature :{
        flex: 1
    },
}

const Account = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    const profile = useSelector(selectUser)
    return (
        <div className="page-container"> 
            {isSignIn === false 
            ? <div>
                <div>サインインしていません</div>
                <Link to='/signin' >
                    <button>サインイン</button>
                </Link>
              </div>
            : <div style={styles.wraper}>
                <div>avater</div>
                <div >
                    <div style={styles.FeatureListContainer}>
                        <div style={styles.FeatureListContainer_image}>
                        <div style={styles.avaterContainer}> 
                            <img src={logo} alt="avater" style={styles.avaterImg}/>
                        </div>
                        </div>
                        <div style={styles.FeatureListContainer_feature}>
                        <div>
                        <div style={styles.listContainer}>
                            <div>Name</div>
                            <div>{profile.username}</div>
                        </div>
                        <div style={styles.listContainer}>
                            <div>E-mail</div>
                            <div>{profile.email}</div>
                        </div>
                        
                    </div>
                        </div>
                    </div>

                    
                    <div style={styles.avaterContainer}> 
                       <img src={logo} alt="avater" style={styles.avaterImg}/>
                    </div>
                    <div>
                        <div style={styles.listContainer}>
                            <div>Name</div>
                            <div>{profile.username}</div>
                        </div>
                        <div style={styles.listContainer}>
                            <div>E-mail</div>
                            <div>{profile.email}</div>
                        </div>
                        
                    </div>
                    <div>
                        {/* <div>{profile.email}</div> */}
                        {/* <div>isSignIn:{profile.isSignIn? 'true' : 'false'}</div>  */}
                        {/* <div>role:{profile.role}</div> */}
                        {/* <div>uid:{profile.uid}</div> */}
                        <div>name:{profile.username}</div>
                        <div>E-mail:{profile.email}</div>
                        {/* <div>photoURL:{profile.photoURL}</div>  */}
                        </div>
                    <div>
                {/* <div>サインアウトしますか？</div>
                <button  onClick={signout}>
                        Sing-out
                </button> */}
                </div>
              </div>
                <div>firestore</div>
              </div>
            }
        </div>
    )
}

export default Account
