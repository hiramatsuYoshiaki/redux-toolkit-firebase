import { getAuth, signInWithEmailAndPassword, } from 'firebase/auth'
export const signin = (email, password) => {
    console.log('signin')
    console.log('email',email)
    console.log('password',password)
    return new Promise((resolve) =>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('signInWithEmailAndPassword--signin')
                console.log(userCredential.user)
                const user = userCredential.user;
               resolve({ 
                    data: {
                        isSignIn: true,
                        role:"",
                        uid: user.uid,
                        username:user.displayName,
                        email:user.email,
                        photoURL:user.photoURL
                    } 
                })
            })
            .catch((error) => {
                console.log('signInWithEmailAndPassword--signin　error')
                console.log('error code',error.code);
                console.log('errorMessage',error.message); 
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
            });
    })
    // .then(res=>{console.log('ok signin')})
    // .catch(error=>{console.log(error.message)})
}