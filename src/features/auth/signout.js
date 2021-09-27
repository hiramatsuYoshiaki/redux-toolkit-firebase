import { getAuth, signOut, } from 'firebase/auth'
export const signout = () => {
    console.log('signin')
    return new Promise((resolve) =>{
        const auth = getAuth()
        signOut(auth).then(() => {
            resolve({
                data:{
                    isSignIn: false,
                    role:"",
                    uid: "",
                    username:"",
                    email:"",
                    photoURL:""
                }
            })
        }).catch((error) => {
            console.log('error code',error.code);
            console.log('errorMessage',error.message);
        });
        
    })
}