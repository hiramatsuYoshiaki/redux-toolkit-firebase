import React, {useEffect} from 'react'
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"

const UpdateEmail = () => {
    useEffect(()=>{
        const auth = getAuth()
        //リンクが電子メールリンクを使用したサインインであることを確認します
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let email = window.localStorage.getItem('emailForSignIn')
            if (!email) {
                // User opened the link on a different device. To prevent session fixation
                // attacks, ask the user to provide the associated email again. For example:
                email = window.prompt('確認のためにメールアドレスを入力してください');
              }
            signInWithEmailLink(auth, email, window.location.href)
                .then((result) => {
                // Clear email from storage.
                window.localStorage.removeItem('emailForSignIn');
                console.log(result.user);
                console.log('サインインが完了しました。');
                alert('サインインが完了しました。')
                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
                })
                .catch((error) => {
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode)
                console.log(errorMessage)
                });
            }
    },[])
    return (
        <div className="page-fexed-container">
            <div>メールアドレスを変更する。</div>
        </div>
    )
}

export default UpdateEmail
