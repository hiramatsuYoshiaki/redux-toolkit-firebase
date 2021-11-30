import { getAuth, sendEmailVerification } from "firebase/auth"
export const sendEmail = () =>{
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
    .then(() => {
        console.log('sendEmailVerification ok')
    })
    .catch((error) => {
        console.log('sendEmailVerification error')
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    })

} 