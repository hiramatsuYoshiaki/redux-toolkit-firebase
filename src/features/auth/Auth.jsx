import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {
    signinAction,
    singoutAction,
    selectUser,
} from './authSlice'; 
import {getAuth, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

const Auth = () => {
   const dispatch = useDispatch()
//    const reduxUser = useSelector((state) => state.auth.user)
   const reduxUser = useSelector(selectUser)
   console.log('reduxUser',reduxUser);
   const [user, setUser] = useState(null)//auth user
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   
   const singin = (e) => {
        e.preventDefault()
        console.log('email',email);
        console.log('password',password);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('login user:', user );
                setUser(user)
                dispatch(signinAction({
                    // name:'user1',email:'user1@gmail.com'
                    // isSignIn: true,
                    // role:"",
                    // uid: user.uid,
                    // username:user.uid,
                    // email:user.uid,
                    // photoURL:user.uid
                    isSignIn: true,
                    role:"admin",
                    uid: user.uid,
                    username:user.uid,
                    email:user.uid,
                    photoURL:"xxx.@gmail.com"
                }))


            })
            .catch((error) => {
                console.log('error code',error.code);
                console.log('errorMessage',error.message); 
                setUser(null)
            });

   }
   const signout = () => {
       const auth = getAuth();
        signOut(auth).then(() => {
            console.log('Sign-out successful')
            setUser(null)
            dispatch(singoutAction())
        }).catch((error) => {
            console.log('error code',error.code);
            console.log('errorMessage',error.message);
        });
   }
   useEffect(()=>{
       console.log('useeffect auth state');
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if(user) {
            console.log('Sign In');
            console.log('uid',user.uid);
            // setUser(user)
            dispatch(signinAction({
                isSignIn: true,
                role:"",
                uid: user.uid,
                username:user.displayName,
                email:user.email,
                photoURL:user.photoURL
            }))
        }else{
            console.log('Sign out');
            // setUser(null)
            dispatch(singoutAction())
        }
    })
//    },[user,setUser])
   },[reduxUser.uid,dispatch])
    return (
        <div>
            {reduxUser.isSignIn === true 
                ?   <div>
                        <div>Hello!</div>
                        <div>E-mail:{reduxUser.email}</div>
                        <button onClick={signout}>Sing out</button>
                    </div>
                :   <div>
                        Sign In 
                        <form onSubmit={singin}>
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
