import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {
    signinAction,
    singoutAction,
    selectUser,
    listenAuthState,
    signInAsync,
    signOutAsync
} from './authSlice'; 
import {getAuth, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth' 

const Auth = () => {
    console.log('auth------------start');
   const dispatch = useDispatch()
   const userProfile = useSelector(selectUser)
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
//    console.log('redux User',userProfile);
//    console.log('uid',userProfile.uid)
//    console.log('isSignIn',userProfile.isSignIn)
   
   const singin = (e) => {
        e.preventDefault()
        // console.log('email',email);
        // console.log('password',password);

        dispatch(signInAsync())

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log('login user:', user );
                // setUser(user)
                // dispatch-------------------------------------------
                dispatch(signinAction({
                    isSignIn: true,
                    role:"admin",
                    uid: user.uid,
                    username:user.displayName,
                    email:user.email,
                    photoURL:user.photoURL
                }))
            })
            .catch((error) => {
                console.log('error code',error.code);
                console.log('errorMessage',error.message); 
                // setUser(null)
            });
   }
   const signout = () => {
       dispatch(signOutAsync())
       const auth = getAuth();
        signOut(auth).then(() => {
            // console.log('Sign-out successful')
            // setUser(null)
            // dispatch-------------------------------------------
            dispatch(singoutAction())
        }).catch((error) => {
            console.log('error code',error.code);
            console.log('errorMessage',error.message);
        });
   }

   useEffect(()=>{
    // console.log('useeffect auth state----------------------');
    // console.log('userProfile.isSignIn',userProfile.isSignIn);
    // dispatch(listenAuthState())
    // const auth = getAuth()
    // onAuthStateChanged(auth, (user) => {
    //     if(user) {
    //         //dispatch-------------------------------------------
    //         dispatch(signinAction({
    //             isSignIn: true,
    //             role:"",
    //             uid: user.uid,
    //             username:user.displayName,
    //             email:user.email,
    //             photoURL:user.photoURL
    //         }))
    //     }else{
    //         // dispatch-------------------------------------------
    //         dispatch(singoutAction())
    //     }
    // })
    if(userProfile.isSignIn !== true){
        dispatch(listenAuthState())
    }
   },[userProfile.isSignIn,dispatch])

    return (
        <div>
            {/* <button onClick={()=> dispatch(aaa())}>aaa</button> */}
            {/* <button onClick={()=> dispatch(listenAuthState())}>listenAuth</button> */}
            {userProfile.isSignIn === true
                ?   <div>
                        <div>Hello!</div>
                        <div>isSignIn:{userProfile.isSignIn? 'true' : 'false'}</div>
                        <div>role:{userProfile.role}</div>
                        <div>uid:{userProfile.uid}</div>
                        <div>username:{userProfile.username}</div>
                        <div>E-mail:{userProfile.email}</div>
                        <div>photoURL:{userProfile.photoURL}</div>
                        <button 
                            onClick={signout}>
                                Sing out
                        </button>

                    </div>
                :   <div>
                        Sign In 
                        <form 
                            onSubmit={singin}
                        >
                            <div>
                                <label htmlFor="email"> Email 
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email" 
                                        value={email}
                                        onChange={e=>setEmail(e.target.value)}
                                    />
                                </label>
                            <div></div>
                                <label htmlFor="password"> password 
                                    <input 
                                        type="password" 
                                        id="password"
                                        name="password" 
                                        value={password}
                                        onChange={e=>setPassword(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <input type="submit" value="Singin" />
                            </div>
                        </form>
                    </div>
                    
        }
        </div>
    )
}

export default Auth
