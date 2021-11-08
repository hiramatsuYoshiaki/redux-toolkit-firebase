import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {InputForm} from '../components/index'
import {InputUser} from '../components/InputUser'
import {useDispatch,useSelector} from 'react-redux'
import {signInAsync,selectIsSignIn} from '../features/auth/authSlice'
// import {LoadingSpiner} from '../components/index'

import './page.scss'

const SignIn = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    // const isLoding = useSelector(selectStatus)
    // const history = useHistory()
    // const handleNavigation = (path) => {
    //     history.push(path)
    // }

    const feilds = [
        {id:'01',label:"メールアドレス",name:'email',type:'email',},
        {id:'02',label:"パスワード",name:'password',type:'password',}
    ]
    const [values, handleChange] = InputUser({
        email:"",
        password:""
    })
    const signIn = (e) => {
        e.preventDefault()
        // alert('submit email: ' + values.email + ' password: ' + values.password)
        dispatch(signInAsync(values))　
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
            <Redirect push to="/" />
            // <Redirect push to='/signout' />
            :
            <div>
                <div>
                    <div>サインインしてください。</div>
                    <form onSubmit={signIn}>
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
                        <div>
                            <input type="submit"  value="サインイン"/>
                        </div>
                    </form>
                </div>
                <br />
                <br />
                <div>
                    <Link to='/createaccount'>
                        アカウント作成
                    </Link>
                </div>
                <div>
                    <Link to='/resetpassword'>
                        パスワードリセット
                    </Link>
                </div>
            </div>
           }
           {/* <LoadingSpiner isLoading={isLoding}/> */}
        </div>
    )
}

export default SignIn 
