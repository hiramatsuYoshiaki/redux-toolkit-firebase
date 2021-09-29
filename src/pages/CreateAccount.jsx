import React from 'react'
import {Redirect} from 'react-router-dom'
import {InputForm} from '../components/index'
import {InputUser} from '../components/InputUser'
import {useDispatch,useSelector} from 'react-redux'
import {createAccountAsync, selectIsSignIn,} from '../features/auth/authSlice'
import './page.css'

const CreateAccount = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn) 
    const feilds = [
        {id:'01',label:"メールアドレス",name:'email',type:'email',},
        {id:'02',label:"パスワード",name:'password',type:'password',},
        {id:'03',label:"名前",name:'displayName',type:'text',},
    ]
    const [values, handleChange] = InputUser({
        email:"",
        password:"",
        displayName:"",
        photoURL:"gs://redux-toolkit-firebase-bdbac.appspot.com/users/undraw_profile_pic_ic5t.png"
    })
    const createAccount = (e) => {
        e.preventDefault()
        alert('submit email: ' + values.email + 
              ' password: ' + values.password +
              ' displayName: ' + values.displayName +
              ' photoURL: ' + values.photoURL 
              )
        dispatch(createAccountAsync(values))
    }
    // useEffect(()=>{
    //     if(isSignIn !== true){
    //         dispatch(listenAuthState())
    //     }
    // },[isSignIn,dispatch])
    return (
        <div className="page-container">

            {isSignIn === true
            ? 
            // <Redirect push to="/" />
            <Redirect push to='/signout' />
            :
            <div>
                <div>アカウントを作成します。</div>
                <form onSubmit={createAccount}>
                {feilds.map(field=>(
                            <InputForm 
                                key={field.id} 
                                label={field.label}
                                id={field.name}
                                name={field.name}
                                type={field.type}
                                value={values[field.name]}//value={email} 
                                onChange={handleChange}// onChange={e => setEmail(e.target.value)}
                            />
                        ))}
                    <input type="submit" value="create accout" />
                </form>
            </div>
            }
        
        </div>
    )
}

export default CreateAccount
