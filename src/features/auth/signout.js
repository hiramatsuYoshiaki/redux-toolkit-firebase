import { getAuth, signOut, } from 'firebase/auth'
export const signout = () => {
    console.log('signin')
    return new Promise((resolve) =>{
        const auth = getAuth()
        signOut(auth).then(() => {
            console.log('singout #######')
            resolve({
                data:{
                    isSignIn: false,
                    role:"",
                    uid: "",
                    username:"",
                    email:"",
                    photoURL:"",
                    emailVerified:false
                }
            })
        }).catch((error) => {
            console.log('error code',error.code);
            console.log('errorMessage',error.message);
        });
        
    })
    // .then(res=>{console.log('ok signout')})
    // .catch(error=>{console.log(error.message)})
}