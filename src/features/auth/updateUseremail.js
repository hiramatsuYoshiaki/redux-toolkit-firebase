import { getAuth, updateEmail,reauthenticateWithCredential,EmailAuthProvider } from "firebase/auth"
export const updateUseremail = (value) => {
    return new Promise((resolve) =>{
        const auth = getAuth();
        console.log('updateUseremail email: ', value.email)
        // console.log('updateUseremail pass: ', value.pass)
        //現在のURLから電子メールリンクのクレデンシャルを指示します。
        // const credential = EmailAuthProvider.credentialWithLink(
        //     value.singinEmail, window.location.href)
        //     .then((res)=>{
        //         console.log('EmailAuthProvider.credentialWithLink')
        //     })
        //     .catch((error)=>{
        //         const errorCode = error.code;
        //             const errorMessage = error.message;
        //             console.log(errorCode)
        //             console.log(errorMessage)
        //     })
        // console.log('credential',credential)
        // reauthenticateWithCredential(auth.currentUser, credential)
        // .then((usercred) => {
        //     console.log('reauthenticateWithCredential----------->>>>',usercred)
        //     updateEmail(auth.currentUser, value)
        //         .then(() => {
        //             console.log('updateUseremail ok')
        //             resolve({ 
        //                 data: {
        //                     email:value.email,
        //                     } 
        //                 })
        //         }).catch((error) => {
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //             console.log(errorCode)
        //             console.log(errorMessage)
        //             resolve({ 
        //                 data: {
        //                     email:null, 
        //                     } 
        //                 })
        //         })

        //         })
        // .catch((error) => {
        //          const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log(errorCode)
        //         console.log(errorMessage)
        //         resolve({ 
        //             data: {
        //                 email:'error', 
        //                 } 
        //             })

        // });
        // updateEmail(auth.currentUser, value)
        // .then(() => {
        //     console.log('updateUseremail ok')
        //     resolve({ 
        //         data: {
        //             email:value.email,
        //             } 
        //         })
        //   }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorCode)
        //     console.log(errorMessage)
        //     if(errorCode === 'FIRAuthErrorCodeRequiresRecentLogin'){
        //         //ユーザーを再認証する
        //     }
        //     resolve({ 
        //         data: {
        //             email:null, 
        //             } 
        //         })
        //   })

    })
}