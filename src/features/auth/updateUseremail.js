import { getAuth, updateEmail } from "firebase/auth"
export const updateUseremail = (value) => {
    return new Promise((resolve) =>{
        const auth = getAuth();
        console.log('update email email: ', value)
        
        updateEmail(auth.currentUser, value)
        .then(() => {
            console.log('update email ok')
            resolve({ 
                data: {
                    email:value,
                    } 
                })
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            if(errorCode === 'FIRAuthErrorCodeRequiresRecentLogin'){
                console.log('再認証が必要です。メールアドレスの変更に失敗しました。')
            }
            resolve({ 
                data: {
                    email:null, 
                    } 
                })
          })

    })
}