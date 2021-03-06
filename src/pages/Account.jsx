import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectUser } from '../features/auth/authSlice'
import { selectorAvater, getAvatorAsync } from '../features/storage/storageSlice'
import { Link} from 'react-router-dom' 
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProfileUpdae } from '../components/account/index'



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
        // borderBottom: '1px solid grey',
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
    
    return (
        <div className="page-fexed-container">  
            {(profile.isSignIn === true && profile.emailVerified === true)
            ? <div style={styles.wraper}>  
                <div>
                    <div >
                        <div className="page-account-FeatureListContainer">
                            <div className="page-FeatureListContainer_image">
                                <div className="page-avaterContainer"> 
                                    <img src={photoURL} alt="avater" style={styles.avater} />
                                </div>
                            </div>
                            <div className="page-FeatureListContainer_feature">
                                <div>{profile.username}</div>
                                <div>{profile.email}</div>
                            </div>
                        </div> 
                        {/* <Divider variant="middle" /> */}
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div>??????????????????</div>
                            </AccordionSummary>

                            <AccordionDetails> 
                                <ProfileUpdae username={profile.username} email={profile.email}/>
                            </AccordionDetails> 

                        </Accordion> 
                        {/* <div >
                            <Link to=''>
                                <Button>??????????????????</Button>
                            </Link> 
                        </div> */}
                        {/* <Divider variant="middle" />
                        <div >
                            <Link to=''>
                                <Button>??????</Button>
                            </Link> 
                        </div> */}

                        <Divider variant="middle" /> 
                        <div>
                        <Link to='/updateaccountphoto'>
                            <Button variant="text" > 
                                ???????????????????????????????????????
                            </Button>
                        </Link>
                        </div>
                        <Divider variant="middle" />
                        <div>
                            <Link to='/updateaccountname'>
                                <Button>????????????????????????????????????</Button>
                            </Link>
                        </div>
                        {/* <p>{profile.username}</p> */}
                        <Divider variant="middle" />
                        <div>
                            <Link to='/updatemail'>
                                <Button>???????????????????????????????????????</Button>
                            </Link>
                        </div>
                        {/* <p>{profile.email}</p> */}
                        <Divider variant="middle" /> 
                        <div>
                            <Link to='/resetpassword'>
                                <Button>?????????????????????????????????</Button>
                            </Link>
                        </div>
                        <Divider variant="middle" />
                        <div >
                            <Link to='removeaccount'>
                                <Button>??????????????????????????????</Button>
                            </Link> 
                        </div>

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

            </div>//<div style={styles.wraper}> ???
            : 
            (profile.isSignIn === true && profile.emailVerified === false)
                ?
                <div>
                    <div>????????????????????????????????????????????????</div>
                    <Link to='/createaccount' >
                        <Button variant='outlined'>?????????</Button>
                    </Link>
                    {/* <Redirect push to="/emailVerified" /> */} 
                </div>
                :
                <div>
                    <div>?????????????????????????????????</div>
                    <Link to='/signin' >
                        <Button variant='outlined'>???????????????</Button>
                    </Link>
                    {/* <Redirect push to="/signin" /> */}
                </div>
            }
        </div> 
    )
}

export default Account
