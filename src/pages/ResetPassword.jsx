import React from 'react'
// import {Redirect} from 'react-router-dom'
// import {InputForm} from '../components/index'
// import {InputUser} from '../components/InputUser'
import {useSelector,useDispatch} from 'react-redux'
import {signOutAsync,selectUser} from '../features/auth/authSlice'
import { Link } from 'react-router-dom'
import './page.scss'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {Button, TextField} from '@mui/material'
import {useForm, Controller} from 'react-hook-form'
import {LoadingSpiner} from '../components/index'

// const styles={
//     wraper:{
//         width:"100%",
//         padding:".8rem",
//     }
// }

const ResetPassword = () => {
    console.log('reset password start----------------++++++');
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    // const history = useHistory()
    // const [isSended,setIsSended] = useState(false)
    // const [inputEmail,setInputEmail] = useState('')
    //react-hook from
    const {handleSubmit, control} = useForm()
    // const resetPasswordSendEmail = (email) => {
    //     console.log('resetPasswordSendEmail')
    //     const auth = getAuth();
    //     sendPasswordResetEmail(auth, email)
    //     .then(() => {
    //         console.log('Password reset email sent!')
    //         setIsSended(true)
    //         dispatch(signOutAsync())
    //         history.push('/signin')
    //     })
    //     .catch((error) => {
    //         console.log('error code',error.code);
    //         console.log('errorMessage',error.message)
    //     });
    // }
    // const onSubmit = data => {
    //     console.log('input-form-data',data)
    //     setInputEmail(data.email)
    //     resetPasswordSendEmail(data.email)
    // }
    const resetPasswordSendEmail = (email) =>{
        return new Promise((resolve,reject)=>{
            console.log('resetPasswordSendEmail++++++++++++++++++++++++++++')
            const auth = getAuth();
            sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Password reset email sent!++++++++++++++++++++++++')
                // setIsSended(true)
                dispatch(signOutAsync())
                resolve ()
            })
            .catch((error) => {
                console.log('error code',error.code);
                console.log('errorMessage',error.message)
                reject()
            });
        })
    }
    const onSubmit = async(data) => {
        console.log('input-form-data',data)
        try{
            console.log('try++++++++++++++++++++++++++++++++++++')
            await resetPasswordSendEmail(data.email)
            // setInputEmail(data.email)
            console.log('push /singin+++++++++++++++++++++++++++')
            // history.push('/signin')
        }catch(error){
            console.log('catch',error);
        }
    }
    




    // const [values, handleChange] = InputUser({
    //     email:""
    // })
    // const resetPasswordSendEmail = () => {
    //     console.log('resetPasswordSendEmail');
    //     const auth = getAuth();
    //     sendPasswordResetEmail(auth, values.email)
    //     .then(() => {
    //         console.log('Password reset email sent!');
    //         alert('?????????????????????????????????????????????' + 
    //             values.email + 
    //             '?????????????????????????????????????????????????????????????????????????????????????????????' )
    //         history.push('/signin')
    //     })
    //     .catch((error) => {
    //         console.log('error code',error.code);
    //         console.log('errorMessage',error.message);
    //     });
    // }
    // const resetPassword = e => {
    //     e.preventDefault()
    //     // dispatch(resetPasswordAsync(values))
    //     resetPasswordSendEmail()
        
    // }
    return (
        <div className="page-container"> 
            {profile.isSignIn === false
            ?
            <div>
                <div>?????????????????????????????????</div>
                <Link to='/signin'>
                    <Button  variant="outlined">
                        ???????????????
                    </Button>
                </Link>
            </div>
            :
            <div>
                {/* <div style={styles.wraper}>
                    <form onSubmit={resetPassword}>
                        <InputForm 
                            label='?????????????????????'
                            id='email'
                            name='email'
                            type='email'
                            value={values.email}//value={email} 
                            onChange={handleChange}// onChange={e => setEmail(e.target.value)}
                        />
                        <div>
                            <input type="submit"  value="??????????????????????????????"/>
                        </div>
                    </form>
                </div> */}
                <h3>???????????????????????????</h3>
                <h5>??????????????????????????????????????????????????????????????????</h5>
                <h5>????????????????????????????????????????????????????????????</h5>
                <h5>????????????????????????????????????????????????</h5>
                <h5>?????????????????????????????????????????????????????????</h5>
                <div>????????????????????????????????????????????????</div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Controller 
                                name='email'
                                defaultValue=''
                                control={control}
                                render={({field:{onChange,value},fieldState:{error}})=>
                                    <TextField
                                        id='email'
                                        value={value} 
                                        label='?????????????????????'
                                        // type='email'
                                        onChange={onChange} 
                                        //onChange={(e) => onChange(parseInt(e.target.value))} 
                                        error={!!error}
                                        helperText={error?error.message:null}
                                        margin='normal'
                                    />
                                }
                                rules={{
                                    required:'???????????????????????????????????????',
                                    maxLength : {
                                        value: 40,
                                        message: '????????????????????????4????????????????????????' 
                                    },
                                    pattern: {
                                        // value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: '?????????????????????????????????????????????',
                                    },
                                }}
                            />
                            <div>
                                <Button type='submit' variant="outlined">
                                    ???????????????????????????
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
            }       
            <LoadingSpiner isLoading={profile.status}/>      
        </div>
    )
}

export default ResetPassword
