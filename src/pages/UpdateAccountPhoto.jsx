import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectUser, updatePhotoURLAsync //アバター画像を変更
    } from '../features/auth/authSlice'
import { Link } from 'react-router-dom'
import { Button,IconButton } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {LoadingSpiner} from '../components/index'

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
    icon: {
        marginRight: 8,
        height: 48,
        width: 46
    },
    displayNone:{
        dispaly:"none",
    },
    bottomMargin:{
        marginBottom:"16px",
    }
}

const UpdateAccountPhoto = () => {
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    const [selectPhoto,setSelectPhoto] = useState('')
    const [file,setFile] = useState(null)


    const preview =(previewFile) =>{
        const reader = new FileReader()
        reader.onload = (e) => {
        setSelectPhoto(e.target.result)
        }
        reader.readAsDataURL(previewFile) 
    }

    const uploadImage = (event) => {
        //変更画像のプレビュー
        setFile(event.target.files)
        // console.log(file)
        preview(event.target.files[0])
        }
    const updateAvator = () => {
        //変更画像をfirebase strageにアップロードし、authのphotoURLを変更
        dispatch(updatePhotoURLAsync(file))
    }
    
    return (
        <div className="page-fexed-container"> 
        {profile.isSignIn === true && profile.emailVerified === true
            ?
            <div>
                <div>UpdateAccountPhoto</div>
                <div className="page-avaterContainer"> 
                    <img src={profile.photoURL} alt="avater" style={styles.avater} />
                </div>
                <div style={styles.bottomMargin}>変更するアバターを選択してください</div>
                <div>
                    <IconButton style={styles.icon}>
                        <label>
                            <AddPhotoAlternateIcon fontSize="large"/>
                            <input style={{display:'none'}}
                                type="file"
                                id="image"
                                accept={"image/jpeg,image/png"}
                                onChange={(event) => uploadImage(event)}
                            />
                        </label>
                    </IconButton>
                </div>
                <div className="page-avaterContainer"> 
                    <img src={selectPhoto} alt="avater" style={styles.avater} />
                </div>
                <div onClick={updateAvator}>
                    <Button variant='outlined'>
                        アバターを変更する
                    </Button>
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
            : 
            <div>
                <div>サインインしてください</div>
                <div>
                    <Link to='signin'>
                        <Button  variant='outlined'>
                            サインイン
                        </Button>
                    </Link>
                </div>
            </div>
        }
        <LoadingSpiner isLoading={profile.status}/>     
        </div>
    )
}

export default UpdateAccountPhoto
