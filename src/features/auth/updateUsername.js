import { getAuth, updateProfile } from "firebase/auth"
export const updateUsername = (username) =>{
    return new Promise((resolve) =>{
        const auth = getAuth();
        console.log('updateUsername')
        updateProfile(auth.currentUser, {
            displayName: username
          }).then(() => {
            console.log('updateUsername ok')
            resolve({ 
                data: {
                    username:username,
                    } 
                })
          }).catch((error) => {
            resolve({ 
                data: {
                    username:null,
                    } 
                })
          })
    })
}