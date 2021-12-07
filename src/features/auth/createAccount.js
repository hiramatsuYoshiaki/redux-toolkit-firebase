import { getAuth, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
export const createAccount = (email, password, displayName, photoURL, emailVerified) => {
    console.log('createAccount')
    // console.log('email',email)
    // console.log('password',password)
    // console.log('displayName',displayName)
    // console.log('photoURL',photoURL)
    // console.log('emailVerified',emailVerified)
    return new Promise((resolve,reject) =>{
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
                console.log('Profile updated! ok++++++++++++++++++++');
                console.log('displayName',displayName);
                console.log('photoURL',photoURL);
                resolve({ 
                    data: {
                        isSignIn: true, 
                        role:"",
                        uid: user.uid,
                        username:displayName,
                        email:user.email,
                        photoURL:photoURL,
                        emailVerified:false,
                        code:'',
                        msg:'',
                        }  
                    })
            }).catch((error) => {
                console.log('errorCode',error.code);
                console.log('errorMessage',error.message);
                reject({
                    data:{
                        isSignIn: false,
                        role:"",
                        uid: user.uid,
                        username:"",
                        email:user.email,
                        photoURL:"",
                        emailVerified:false,
                        code:'',
                        msg:'',
                    }
                }) 
                // throw new Error(error.message)
            });
        })
        .catch((error) => {
            console.log('errorCode',error.code);
            console.log('errorMessage',error.message);
            let msg = ''
            if (error.code === 'auth/email-already-in-use') {
                msg ='このメールアドレスは使用されています'
            } else if(error.code === 'auth/invalid-email') {
                msg ='メールアドレスの形式が正しくありません'
            } else if(error.code === 'auth/user-disabled') {
                msg ='サービスの利用が停止されています'
            } else if(error.code === 'auth/weak-password') {
                msg ='パスワードは6文字以上にしてください'
            } else if (error.code === 'auth/network-request-failed') {
                msg ='エラーが発生しました。しばらく時間をおいてお試しください'
            } else {
                msg ='エラーが発生しました。アカウントを作成できませんでした'
            } 
            console.log(msg)
            reject({
                data:{
                    isSignIn: false,
                    role:"",
                    uid: "",
                    username:"",
                    email:"",
                    photoURL:"",
                    emailVerified:false,
                    code:error.code,
                    msg:msg,
                }
            })
            
        });

    })
    // .then(res=>{console.log('ok createAccount')})
    // .catch(error=>{console.log(error.message)})
}