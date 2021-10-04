import { getAuth, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
export const createAccount = (email, password, displayName, photoURL) => {
    // console.log('createAccount')
    // console.log('email',email)
    // console.log('password',password)
    // console.log('displayName',displayName)
    // console.log('photoURL',photoURL)
    return new Promise((resolve) =>{
        const auth = getAuth()
        // createUserWithEmailAndPassword------------------------------
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // updateProfile-------------------------------------------
            updateProfile(auth.currentUser, {
                displayName: displayName, 
                photoURL: photoURL
            }).then(() => {
                // console.log('Profile updated! ok++++++++++++++++++++');
                // console.log('displayName',displayName);
                // console.log('photoURL',photoURL);
                resolve({ 
                    data: {
                        isSignIn: true,
                        role:"",
                        uid: user.uid,
                        username:displayName,
                        email:user.email,
                        photoURL:photoURL
                        } 
                    })
            }).catch((error) => {
                // console.log('errorCode',error.code);
                // console.log('errorMessage',error.message);
                resolve({
                    data:{
                        isSignIn: false,
                        role:"",
                        uid: user.uid,
                        username:"",
                        email:user.email,
                        photoURL:""
                    }
                })
            });
        })
        .catch((error) => {
            // console.log('errorCode',error.code);
            // console.log('errorMessage',error.message);
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

        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         console.log('signInWithEmailAndPassword--signin')
        //         const user = userCredential.user;
        //        resolve({ 
        //             data: {
        //                 isSignIn: true,
        //                 role:"",
        //                 uid: user.uid,
        //                 username:user.displayName,
        //                 email:user.email,
        //                 photoURL:user.photoURL
        //             } 
        //         })
        //     })
        //     .catch((error) => {
        //         console.log('error code',error.code);
        //         console.log('errorMessage',error.message); 
        //         resolve({
        //             data:{
        //                 isSignIn: false,
        //                 role:"",
        //                 uid: "",
        //                 username:"",
        //                 email:"",
        //                 photoURL:""
        //             }
        //         })
        //     });
    })
}