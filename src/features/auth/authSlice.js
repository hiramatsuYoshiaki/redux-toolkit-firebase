import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import { listenAuth } from './listenAuth'
import { signin } from './signin'
import { signout } from './signout'
import { createAccount } from './createAccount'
// import { setDocAccount } from '../account/setDocAccount' 
import { updateUsername } from './updateUsername'
import { updateUseremail } from './updateUseremail' 
import { removeUser } from './removeUser' 

//state 
const initialState = {
    user:{
        isSignIn: false,
        role:"",
        uid: null,
        username:"",
        email:"",
        photoURL:"",
        emailVerified:false,
        code:'',
        msg:'',
        status: 'idle',  
    }
} 
// firebase auth remove account
export const removeAccountAsync = createAsyncThunk(
  'auth/remove',
  async() => {
    console.log('remove account async thunk')
    const deleteUser = await removeUser()
    return deleteUser.data
  }
)
//firebase auth onAuthStateChanged
export const listenAuthState = createAsyncThunk(
    'auth/listenAuthState', 
    async () => {
      console.log('listenAuthState')
        const signInUser = await listenAuth()
        console.log('payload data',signInUser.data.email)
        return signInUser.data //<--------payloadに渡される
    }  
) 
//firebase auth signInWithEmailAndPassword 
export const signInAsync = createAsyncThunk(
    'auth/signIn',
    async (inputValue) => { 
        // console.log('inputValue.email',inputValue.email)
        // console.log('inputValue.password',inputValue.password)
        // console.log('signIn ==============')
        const signInUser = await signin(inputValue.email, inputValue.password)
        // console.log('signInUser',signInUser)
        return signInUser.data
    }
)
//firebase auth updateProfile
// displayName
// photoUR
export const updateProfileAsync = createAsyncThunk(
    'auth/updateProfile',
    async (username) => { 
        console.log('updateProfileAsync -------------------')
        console.log('username',username)
        const name = await updateUsername(username)
        // console.log('updateUsername',updateUsername)
        return name.data
    }
)
//firebase auth updateEmail
// displayName
// photoUR
//vor8n5eoA8b6Ak3dmLkG2Z6fQZ22 user2
export const updateEmailAsync = createAsyncThunk(
    'auth/updateEmail',
      async (value) => { 
        console.log('updateEmailAsync -------------------')
        console.log('email',value)
        const respons = await updateUseremail(value)
        console.log('updateEmail',respons)
        console.log('updateEmail chenged email:',respons.data.email)
        return respons.data
    }
)

//firebase auth signOut
export const signOutAsync = createAsyncThunk(
    'auth/signOut',
    async () => {
        // console.log('signOut =============') 
        const signInUser = await signout()
        // console.log('signInUser',signInUser)
        return signInUser.data
    }
)
//firebase auth createUserWithEmailAndPassword
export const createAccountAsync = createAsyncThunk( 
  'auth/createAccount',
  async (inputValue,{ rejectWithValue }) => {
      // try{
        
        try{
          console.log('try createAccount')
            const signInUser = await createAccount(inputValue.email, 
                                                    inputValue.password,
                                                    inputValue.displayName,
                                                    inputValue.photoURL,
                                                    inputValue.emailVerified
                                                  )
            console.log('createAccountAsync then block signInUser:', signInUser)
            return signInUser.data 
        } catch (signInUser) {
            console.log('createAccountAsync catch block signInUser:', signInUser)
            return rejectWithValue(signInUser.data)
        }

        // try{
        //   console.log('firestore add account ')
        //   console.log('signInUser.data.username: ',signInUser.data.username)
        //   const user = {
        //     uid: signInUser.data.uid,
        //     username: signInUser.data.username,
        //     email: signInUser.data.email,
        //     photoURL: signInUser.data.photoURL,
        //     emailVerified: signInUser.data.emailVerified,
        //   }
        //   const refarence = await setDocAccount(user)
        //   console.log(refarence)
          
        // } catch (error) {
        //   console.log(error.data.errorCode)
        //   console.log(error.data.errorMessage) 
        //   signInUser.data.errorCode = error.data.errorCode
        //   signInUser.data.errorMessage = error.data.errorMessage
        //   return rejectWithValue(signInUser.data)
        // }




        // await createAccount(inputValue.email, 
        //                     inputValue.password,
        //                     inputValue.displayName,
        //                     inputValue.photoURL,
        //                     inputValue.emailVerified )
        // .unwrap()
        // .then((signInUser)=>{
        //   console.log('createAccountAsync then block signInUser', signInUser)
        //   return signInUser.data 
        // })
        // .catch((signInUser)=>{
        //   console.log('createAccountAsync catch block signInUser', signInUser)
        //   return rejectWithValue(signInUser.data )
        // })
        // console.log('firestore add account ')
        // console.log('signInUser.data.username: ',signInUser.data.username)
        // const user = {
        //   uid: signInUser.data.uid,
        //   username: signInUser.data.username,
        //   email: signInUser.data.email,
        //   photoURL: signInUser.data.photoURL,
        //   emailVerified: signInUser.data.emailVerified,
        // }
        // const refarence = await setDocAccount(user)
        // console.log(refarence)

        // return signInUser.data 

      // } catch (err) {
      //   console.log('catch err createAccount')
      //   rejectWithValue(err.message)
      // }
      // console.log('createAccount =============')
      
      // console.log('inputValue.email',inputValue.email)
      //   console.log('inputValue.password',inputValue.password)
      //   console.log('inputValue.displayName',inputValue.displayName)
      //   console.log('inputValue.photoURL',inputValue.photoURL)
        // const signInUser = await createAccount(inputValue.email, 
        //                                         inputValue.password,
        //                                         inputValue.displayName,
        //                                         inputValue.photoURL,
        //                                         inputValue.emailVerified
        //                                       )
        // console.log('signInUser',signInUser)

        
        // console.log('firestore add account ')
        // console.log('signInUser.data.username: ',signInUser.data.username)
        // const user = {
        //   uid: signInUser.data.uid,
        //   username: signInUser.data.username,
        //   email: signInUser.data.email,
        //   photoURL: signInUser.data.photoURL,
        //   emailVerified: signInUser.data.emailVerified,
        // }
        // const refarence = await setDocAccount(user)
        // console.log(refarence)
        // return signInUser.data 
  }
) 
 


//action
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signinAction:(state,action)=> {
            state.user = action.payload
        },
        singoutAction:(state,action)=> {
            state.user = {
                isSignIn: false,
                role:"",
                uid: null,
                username:"",
                email:"",
                photoURL:"",
                code:'',
                msg:'',
                status:'idle'
            }
        }
    },
    extraReducers: (builder) => {
        builder
        //firebase auth onAuthStateChanged
        .addCase(listenAuthState.pending, (state) => {
            state.user.isSignIn = false;
            state.user.status = 'loading'
          })
        .addCase(listenAuthState.fulfilled, (state, action) => {
            //action <------signInUser.data
            state.user.isSignIn = action.payload.isSignIn;
            state.user.role = action.payload.role
            state.user.uid = action.payload.uid
            state.user.username = action.payload.username
            state.user.email = action.payload.email
            state.user.photoURL = action.payload.photoURL
            state.user.emailVerified = action.payload.emailVerified
            state.user.status = 'idle'
            // console.log('auth/listenAuthState*********',action) //payload: signInUser.data listenAuthState
          })
          .addCase(listenAuthState.rejected, (state, action) => {
            state.user.isSignIn = false;
            state.user.status = 'idle'
          })

        //firebase auth signInWithEmailAndPassword
        .addCase(signInAsync.pending, (state) => {
            state.user.isSignIn = false;
            state.user.status = 'loading'
          })
        .addCase(signInAsync.fulfilled, (state, action) => {
            state.user.isSignIn = action.payload.isSignIn;
            state.user.role = action.payload.role
            state.user.uid = action.payload.uid
            state.user.username = action.payload.username
            state.user.email = action.payload.email
            state.user.photoURL = action.payload.photoURL
            state.user.emailVerified = action.payload.emailVerified
            state.user.code = action.payload.code
            state.user.msg = action.payload.msg

            state.user.status = 'idle'
            // console.log('auth/signInAsync*********',action) 
          })
          .addCase(signInAsync.rejected, (state, action) => {
            state.user.isSignIn = false;
            state.user.status = 'idle'
          })
        //firebase auth signout
        .addCase(signOutAsync.pending, (state) => {
            state.user.isSignIn = false;
            state.user.status = 'loading'
          })
        .addCase(signOutAsync.fulfilled, (state, action) => {
            state.user.isSignIn = action.payload.isSignIn;
            state.user.role = action.payload.role
            state.user.uid = action.payload.uid
            state.user.username = action.payload.username
            state.user.email = action.payload.email
            state.user.photoURL = action.payload.photoURL
            state.user.emailVerified = action.payload.emailVerified
            state.user.status = 'idle'
            // console.log('auth/signOutAsync*********',action) 
          })
          .addCase(signOutAsync.rejected, (state, action) => {
            state.user.isSignIn = false;
            state.user.status = 'idle'
          })
        //firebase auth onCreateUserWithEmailAndPassword
        //firebase auth updateProfile
        .addCase(createAccountAsync.pending, (state) => {
            state.user.isSignIn = false;
            state.user.status = 'loading'
            console.log('auth/createAccountAsync pending*********') 
          })
        .addCase(createAccountAsync.fulfilled, (state, action) => {
          console.log('action fulfilled',action) 
            state.user.isSignIn = action.payload.isSignIn;
            state.user.role = action.payload.role
            state.user.uid = action.payload.uid
            state.user.username = action.payload.username
            state.user.email = action.payload.email
            state.user.photoURL = action.payload.photoURL
            state.user.emailVerified = action.payload.emailVerified
            state.user.code = action.payload.code
            state.user.msg = action.payload.msg
            state.user.status = 'idle'
            console.log('auth/createAccountAsync fulfilled*********',action) 
            console.log('state.user',state.user) 
          })
          .addCase(createAccountAsync.rejected, (state, action) => {
            console.log('action reject',action) 
            state.user.isSignIn = false;
            state.user.status = 'idle'
            state.user.code = action.payload.code
            state.user.msg = action.payload.msg
            console.log('auth/createAccountAsync rejected*********',action) 
          })



        //firebase auth updateEmail
        .addCase(updateEmailAsync.pending, (state) => {
            state.user.status = 'loading'
          })
        .addCase(updateEmailAsync.fulfilled, (state, action) => {
            // state.user.isSignIn = action.payload.isSignIn;
            // state.user.role = action.payload.role
            // state.user.uid = action.payload.uid
            // state.user.username = action.payload.username
            state.user.email = action.payload.email
            // state.user.photoURL = action.payload.photoURL
            state.user.status = 'idle'
            console.log('auth/updateEmailAsync*********',action) 
          })
          .addCase(updateEmailAsync.rejected, (state) => {
            state.user.status = 'idle'
          })


        //firebase auth deleteUser
        .addCase(removeAccountAsync.pending, (state) => {
            state.user.status = 'loading'
          })
        .addCase(removeAccountAsync.fulfilled, (state, action) => {
            state.user.isSignIn = action.payload.isSignIn;
            state.user.role = action.payload.role
            state.user.uid = action.payload.uid
            state.user.username = action.payload.username
            state.user.email = action.payload.email
            state.user.photoURL = action.payload.photoURL
            state.user.status = 'idle'
            console.log('auth/removeAccountAsync*********',action) 
          })
          .addCase(removeAccountAsync.rejected, (state) => {
            state.user.status = 'idle'
          })
      },
});

export const { signinAction,singoutAction } = authSlice.actions
export const selectUser = (state) => state.auth.user
export const selectIsSignIn = (state) => state.auth.user.isSignIn
export const selectStatus = (state) => state.auth.user.status
export default authSlice.reducer 