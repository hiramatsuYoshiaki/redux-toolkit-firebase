import { getAuth, 
         signInWithEmailAndPassword,
         setPersistence,
         browserLocalPersistence,//LOCAL 明示的なログアウトが必要です。
         browserSessionPersistence,//session タブやウィンドウを閉じるとクリアされる
         inMemoryPersistence,// ウィンドウまたはアクティビティが更新されるとクリア
        } from 'firebase/auth'
export const signin = (email, password) => {
    console.log('signin')
    console.log('email',email)
    console.log('password',password)
    return new Promise((resolve,reject) =>{
        const auth = getAuth()
        setPersistence(auth, browserLocalPersistence)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('signInWithEmailAndPassword--signin ++++++++')
                console.log(userCredential.user)
                const user = userCredential.user;
               resolve({ 
                    data: {
                        isSignIn: true,
                        role:"",
                        uid: user.uid,
                        username: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL, 
                        emailVerified: user.emailVerified, 
                        code:'',
                        msg:'',
                    } 
                })
            })
            .catch((error) => {
                console.log('signInWithEmailAndPassword--signin　error')
                console.log('error code',error.code);
                console.log('errorMessage',error.message);
                let msg = ''
                if (error.code === 'auth/invalid-email') {
                    msg ='メールアドレスの形式が正しくありません'
                } else if(error.code === 'auth/user-disabled') {
                    msg ='ユーザーが無効化されています'
                } else if(error.code === 'auth/user-not-found') {
                    msg ='ユーザーが見つかりません'
                } else if(error.code === 'auth/wrong-password') {
                    msg ='パスワードが間違っています'
                } else if (error.code === 'auth/network-request-failed') {
                    msg ='通信エラーまたはタイムアウトしました'
                } else {
                    msg ='サインインできませんでした'
                } 
                reject({
                    data:{
                        isSignIn: false,
                        role:"",
                        uid: "",
                        username:"",
                        email:"",
                        photoURL:"",
                        emailVerified: false,
                        code:error.code,
                        msg:msg,
                    }
                })
            });
    })
    // .then(res=>{console.log('ok signin')})
    // .catch(error=>{console.log(error.message)})
}