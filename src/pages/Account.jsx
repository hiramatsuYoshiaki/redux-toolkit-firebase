import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectUser } from '../features/auth/authSlice'
import { selectorAvater, getAvatorAsync } from '../features/storage/storageSlice'
import { Link} from 'react-router-dom' 
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AvaterRemove, AvaterUpdae, ProfileUpdae } from '../components/account/index'

// import { getAuth, sendSignInLinkToEmail } from "firebase/auth";


import './page.scss'

const styles={
    wraper:{
        width:"100%",
        padding:".8rem", 
    },
    Container:{
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
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    const photoURL = profile.photoURL
    const downloadURL = useSelector(selectorAvater)
    console.log(profile.emailVerified);
    //avater
    const [open, setOpen] = useState(false);
    //activation
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false)
    }
    //acordion 1
    const [expanded, setExpanded] = useState('')
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    //update email
    // const [openEmailMessage, setOpenEmailMessage] = useState(false);
    // const handleClickOpenEmailMessage = () => {
    //     setOpenEmailMessage(true);
    // };
    // const handleCloseEmailMessage = () => {
    //     setOpenEmailMessage(false);
    // };
    
   //メールアドレス変更
    // const handleClickEmailUpdate = () => {
    //     setOpenEmailMessage(false);
    //     const auth = getAuth();
    //     const actionCodeSettings = {
    //         // url: 'https://redux-toolkit-firebase-bdbac.web.app/updateemail',
    //         url: 'http://localhost:3000/updateemail',
    //         handleCodeInApp: true,
    //       };
    //     sendSignInLinkToEmail(auth, profile.email, actionCodeSettings)
    //     .then(() => {
    //         window.localStorage.setItem('emailForSignIn', profile.email);
    //         console.log('sendSignInLinkToEmail window.localStorage.setItem email: ',profile.email)
    //         // alert(profile.email + 'へログインのリクエストを送信しました。メールを開いてリンク（ACTIVITIESにログイン）をクリックしてください。ブラウザに表示されたページからメールアドレスの変更を完了してください。')
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code
    //         const errorMessage = error.message 
    //         console.log(errorCode)
    //         console.log(errorMessage)
    //     });
    // }
    
    useEffect(()=>{
        if(photoURL !== ''){
            dispatch(getAvatorAsync(photoURL))
        }
    },[photoURL,dispatch])
    return (
        <div className="page-fexed-container">  
            {(profile.isSignIn === true && profile.emailVerified === true)
            ? <div style={styles.wraper}>  
                <div>
                    <div >
                        <div className="page-account-FeatureListContainer">
                            <div className="page-FeatureListContainer_image">
                                <div className="page-avaterContainer"> 
                                    <img src={downloadURL} alt="avater" style={styles.avater} />
                                </div>
                            </div>
                            <div className="page-FeatureListContainer_feature">
                                <div>{profile.username}</div>
                                <div>{profile.email}</div>
                            </div>
                        </div> 
                       
                        {/* <div onClick={handleClickEmailUpdate}> */}
                        {/* <div onClick={handleClickOpenEmailMessage}>
                            <div>{profile.email}</div>
                            <Button>メールアドレスを変更する。</Button>
                        </div> */}

                        {/* <Dialog
                            open={openEmailMessage}
                            onClose={handleCloseEmailMessage}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"メールアドレスを変更しますか？"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            {profile.email}へ再ログイン用のメールを送信ます。
                            メールのリンク［ACTIVITIESにログイン］をクリックして、
                            ブラウザに表示されたページからメールアドレスを変更してください。
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleCloseEmailMessage}>キャンセル</Button>
                            <Button onClick={handleClickEmailUpdate} autoFocus>
                                変更
                            </Button>
                            </DialogActions>
                        </Dialog> */}

                        <Divider variant="middle" /> 
                        <div>
                        <Link to='/updateaccountphoto'>
                            <Button variant="text" > 
                                プロフィール写真を変更する
                            </Button>
                        </Link>
                        </div>
                        <Divider variant="middle" />
                        <div>
                            <Link to='/updateaccountname'>
                                <Button>アカウント名を変更する。</Button>
                            </Link>
                        </div>
                        {/* <p>{profile.username}</p> */}
                        <Divider variant="middle" />
                        <div>
                            <Link to='/updateemail'>
                                <Button>メールアドレスを変更する。</Button>
                            </Link>
                        </div>
                        {/* <p>{profile.email}</p> */}
                        <Divider variant="middle" />
                        <div>
                            <Link to='/resetpassword'>
                                <Button>パスワードを変更する。</Button>
                            </Link>
                        </div>
                        <Divider variant="middle" />
                        <div >
                            <Link to='removeaccount'>
                                <Button>アカウントを削除する</Button>
                            </Link> 
                        </div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <div>ユーザー情報を変更する</div>
                            </AccordionSummary>

                            <AccordionDetails> 
                                <ProfileUpdae username={profile.username} email={profile.email}/>
                            </AccordionDetails> 
                        </Accordion> 

                        {/* <div>
                            <div>{profile.email}</div> 
                            <div>isSignIn:{profile.isSignIn? 'true' : 'false'}</div> 
                            <div>role:{profile.role}</div>
                            <div>uid:{profile.uid}</div>
                            <div>name:{profile.username}</div>
                            <div>E-mail:{profile.email}</div>
                            <div>photoURL:{profile.photoURL}</div> 
                            <div>emailVerified:{profile.emailVerified ? 'true' : 'false'}</div> 
                        </div> */}
                    </div>
                 
                </div>

            </div>//<div style={styles.wraper}> 
            : 
            (profile.isSignIn === true && profile.emailVerified === false)
                ?
                <div>
                    <div>アクティベーションしてください</div>
                    <Link to='/emailVerified' >
                        <button>サインイン</button>
                    </Link>
                    {/* <Redirect push to="/emailVerified" /> */}
                </div>
                :
                <div>
                    <div>サインインしていません</div>
                    <Link to='/signin' >
                        <button>サインイン</button>
                    </Link>
                    {/* <Redirect push to="/signin" /> */}
                </div>
            }
        </div> 
    )
}

export default Account
