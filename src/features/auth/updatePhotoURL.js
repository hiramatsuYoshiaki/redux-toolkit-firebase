import { getAuth, updateProfile } from "firebase/auth"
export const updatePhotoURL = (url) =>{
    return new Promise((resolve,reject)=>{
        // console.log('updatePhotoURL*******************************')
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            photoURL: url
          }).then(() => {
            // console.log('updatePhotoURL ok')
            resolve({ 
                data: {
                    photoURL:url,
                    code:'',
                    msg:''
                    } 
                })
          }).catch((error) => {
            console.log('auth updatePhotoURL error');
            console.log(error);
            reject({ 
                data: {
                    photoURL:null,
                    code:error.code,
                    msg:error.message
                    }  
                })
          })
    })
}