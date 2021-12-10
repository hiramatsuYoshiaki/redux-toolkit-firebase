import React,{useEffect,useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectUser, updatePhotoURLAsync } from '../features/auth/authSlice'
import { selectorAvater, getAvatorAsync,uploadAvaterAsync } from '../features/storage/storageSlice'
import { Link } from 'react-router-dom'
import { Button,IconButton } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import { getStorage, ref, getDownloadURL} from "firebase/storage";


import { getStorage, ref, getDownloadURL,uploadBytes, uploadBytesResumable} from "firebase/storage";
import { ContactsOutlined } from '@mui/icons-material'



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
    console.log(profile)
    const photoURL = profile.photoURL
    const downloadURL = useSelector(selectorAvater)


    const uploadImage = (event) => {
            console.log('uploadImage start------->')
            const file = event.target.files
            console.log(file)
            dispatch(uploadAvaterAsync(file)) 
            // dispatch(getAvatorAsync(photoURL))

            // let type = 'image/jpeg'
            // let extension = 'jpeg'
    
            // if(file[0].type=== 'image/png'){
            //     type= 'image/png'
            //     extension = 'png'
            // }
            // if(file[0].type=== 'image/jpeg'){
            //     type= 'image/jpeg'
            //     extension = 'jpeg'
            // }
            // let blob = new Blob(file, { type: type })
            // const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            // const N=16;
            // const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')
            // // firebase strage v9
            // const storage = getStorage()
            // const storageRef = ref(storage,`images/${fileName}.${extension}`)
            // uploadBytes(storageRef,blob,type).then(snapshot=>{
            //     console.log('Uploaded a blob or file!');
            //     getDownloadURL(snapshot.ref).then((downloadURL) => {
            //         console.log('File available at', downloadURL);
            //     });
            // })


            //アップロードするにはBlogオブジェクトに変換する必要がある
            //image type: "image/jpeg" video type: "video/mp4"
            // let blob = new Blob(file, { type: "image/jpeg" })
            // let blob = new Blob(file, { type: type })
            // Generate random 16 digits strings 
            // クラウドストレージにアップするためにファイ名が重複しないように１６桁のファイル名をランダム生成する
            // const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            // const N=16;
            // const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')

            //firebase storageのimageフォルダーにアップロードする
            // const uploadRef = storage.ref('images').child(fileName);
            // const uploadTask = uploadRef.put(blob); 
            //firebase storegeの画像ファイルのURLを取得する
            // uploadTask.then(() => {
            //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            //         const newImage = { id: fileName, path: downloadURL, description: '', instagram:'', twitter:'' };
            //         if (props.Multiple) {
            //             props.setImages((prevState => [...prevState, newImage])) //追加する場合の書き方
            //         } else {
            //             props.setImages([newImage])
            //         }
            //     }); 
            // }).catch((e) => {
            //     console.log(e)
            // });
            
        }

    useEffect(()=>{
        if(photoURL !== ''){
            console.log('photoURL',photoURL);
            console.log('UpdateAccountPhoto useeffect＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃');
            dispatch(getAvatorAsync(photoURL))
            // dispatch(updatePhotoURLAsync(photoURL))
        }
    },[photoURL,dispatch])
    
    return (
        <div className="page-fexed-container"> 
        {profile.isSignIn === true && profile.emailVerified === true
            ?
            <div>
                <div>UpdateAccountPhoto</div>
                <div className="page-avaterContainer"> 
                    <img src={downloadURL} alt="avater" style={styles.avater} />
                </div>
                <div>{profile.photoURL}</div>
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
                <div>
                    ImagePreview
                </div>
                <div>
                    <Button variant='outlined'>
                        アバターを変更する
                    </Button>
                </div>
                
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
            
        </div>
    )
}

export default UpdateAccountPhoto
