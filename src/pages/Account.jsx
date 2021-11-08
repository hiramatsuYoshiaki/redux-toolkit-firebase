import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectUser,
        selectIsSignIn,
        } from '../features/auth/authSlice'
import { selectorAvater, getAvatorAsync } from '../features/storage/storageSlice'
import { Link} from 'react-router-dom' 
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from "react-hook-form";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { AvaterRemove, AvaterUpdae, Passreset, ProfileUpdae } from '../components/account/index'
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
    const isSignIn = useSelector(selectIsSignIn)
    const profile = useSelector(selectUser)
    const photoURL = profile.photoURL
    const downloadURL = useSelector(selectorAvater)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    // const { handleSubmit, control} = useForm()
    // const onSubmit = data => {
    //     console.log('input form data',data)
    //     const inputValues = {
    //         uid:user.uid,
    //         data:{
    //             course:data.course,
    //             datePicker:Timestamp.fromDate(data.datePicker),//js date --> firebase timestamp
    //             title:data.title
    //         },
    //         done:false,
    //     }
    //     dispatch(addPuttering(inputValues)) 
    // }
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
                    <div className="page-account-FeatureListContainer">
                        <div className="page-FeatureListContainer_image">
                            <div className="page-avaterContainer"> 
                                <img src={downloadURL} alt="avater" style={styles.avater} />
                            </div>
                        </div>
                        <div className="page-FeatureListContainer_feature">
                            <div>{profile.username}</div>
                           <Button variant="text" onClick={handleClickOpen}> 
                                プロフィール写真を変更する
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    プロフィール写真を変更
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                    アバターを変更します。
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    {/* <Button onClick={handleClose}>
                                        写真を変更
                                    </Button> */}
                                     <AvaterUpdae />
                                </DialogActions>
                                <DialogActions>
                                    {/* <Button onClick={handleClose} autoFocus>
                                        写真を削除
                                    </Button> */}
                                     <AvaterRemove />

                                </DialogActions>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        キャンセル
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <div>プロフィールを変更する</div>
                        </AccordionSummary>
                        <AccordionDetails>
                        <AccordionDetails>
                            <ProfileUpdae username={profile.username} email={profile.email}/>
                        </AccordionDetails>
                            {/* <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <Controller
                                            name="username"
                                            control={control} 
                                            defaultValue={profile.username}
                                            render={({ field: { onChange, value }, fieldState: { error } }) =>
                                                <TextField
                                                    id="username" 
                                                    label="ユーザー名"
                                                    value={value}
                                                    onChange={onChange}
                                                    error={!!error}
                                                    helperText={error ? error.message : null}
                                                    fullWidth
                                                    margin="normal"
                                                />
                                            }
                                            rules={{
                                                required:'ユーザー名は必須です。',
                                                maxLength : {
                                                    value: 20,
                                                    message: 'ユーザー名は２０文字以内です。' 
                                                }
                                            }}
                                    />
                                    <Controller
                                            name="email"
                                            control={control}
                                            defaultValue={profile.email}
                                            render={({ field: { onChange, value }, fieldState: { error } }) =>
                                                <TextField
                                                    id="email" 
                                                    label="メールアドレス"
                                                    value={value}
                                                    onChange={onChange}
                                                    error={!!error}
                                                    helperText={error ? error.message : null}
                                                    fullWidth
                                                    margin="normal"
                                                />
                                            }
                                            rules={{
                                                required:'メールアドレスは必須です。',
                                                maxLength : {
                                                    value: 20,
                                                    message: 'メールアドレスは２０文字以内です。', 
                                                },
                                                pattern : {
                                                    value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/,
                                                    message: 'メールアドレスの形式が無効です。',
                                                }
                                            }}
                                    />
                                    <Button type='submit'>
                                        SUBMIT
                                    </Button>
                                </div>
                            </form> */}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <div>パスワードを変更する</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Passreset />
                        </AccordionDetails>
                        {/* <AccordionActions>
                            <Link to="/resetpassword">
                                <Button variant="outlined" startIcon={<VpnKeyIcon />}>
                                変更する
                                </Button>
                            </Link>
                        </AccordionActions> */}
                    </Accordion>
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
                </div>
              </div>
              </div>
            }
        </div>
    )
}

export default Account
