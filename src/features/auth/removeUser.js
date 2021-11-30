import { getAuth, deleteUser } from 'firebase/auth'

export const removeUser = () => {
   return new Promise((resolve,reject)=>{
       const auth = getAuth() 
       const user = auth.currentUser
       deleteUser(user).then(()=>{
            console.log('setDocAccount-------->>>>>start')
            resolve({ 
                data:{
                    isSignIn: false,
                    role:"",
                    uid: "",
                    username:"",
                    email:"",
                    photoURL:"",
                    emailVerified:false,
                    code:'',
                    msg:'',
                } 
            })
       })
       .catch((error) => {
            console.log('firestore account delete  error ');
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage) 
            reject({ 
                data:{
                    // isSignIn: false,
                    // role:"",
                    // uid: "",
                    // username:"",
                    // email:"",
                    // photoURL:"",
                    // emailVerified:false,
                    code:error.code,
                    msg:error.message,
                }
            })
       })
   })

}