import { getAuth, onAuthStateChanged } from 'firebase/auth' 
export const listenAuth = () => {
    console.log('listenAuth')
    return new Promise((resolve) =>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user){
                console.log('onAuthStateChanged singin>>>>')
                resolve({ 
                    data: {
                        isSignIn: true,
                        role:"",
                        uid: user.uid,
                        username:user.displayName, 
                        email:user.email,
                        photoURL:user.photoURL,
                        emailVerified:user.emailVerified,
                    } 
                })
            }else{ 
                console.log('onAuthStateChanged not singin>>>')
                resolve({
                    data:{
                        isSignIn: false,
                        role:"",
                        uid: "",
                        username:"",
                        email:"",
                        photoURL:"",
                        emailVerified:false,
                    }
                })
            }
        });
    })
    // .then(res=>{console.log('ok listenAuth')})
    // .catch(error=>{console.log(error.message)})
}