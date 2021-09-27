import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import { listenAuth } from './listenAuth'
import { signin } from './signin'
import { signout } from './signout'
// import { listenAuthState } from './listenAuthState'

//staet
const initialState = {
    user:{
        isSignIn: false,
        role:"",
        uid: null,
        username:"",
        email:"",
        photoURL:"",
        status: 'idle',
    }
} 
//firebase auth onAuthStateChanged
export const listenAuthState = createAsyncThunk(
    'auth/listenAuthState',
    async () => {
        const signInUser = await listenAuth()
        console.log(signInUser.data.email)
        return signInUser.data //<--------payloadに渡される
    }
)
//firebase auth signInWithEmailAndPassword
export const signInAsync = createAsyncThunk(
    'auth/signIn',
    async (inputValue) => {
        console.log('inputValue.email',inputValue.email)
        console.log('inputValue.password',inputValue.password)
        console.log('signIn ==============')
        const signInUser = await signin(inputValue.email, inputValue.password)
        console.log('signInUser',signInUser)
        return signInUser.data
    }
)
//firebase auth signOut
export const signOutAsync = createAsyncThunk(
    'auth/signOut',
    async () => {
        console.log('signOut =============')
        const signInUser = await signout()
        console.log('signInUser',signInUser)
        return signInUser.data
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
            state.user.status = 'idle'
            console.log('auth/listenAuthState*********',action) //payload: signInUser.data listenAuthState
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
            state.user.status = 'idle'
            console.log('auth/signInAsync*********',action) 
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
            state.user.status = 'idle'
            console.log('auth/signOutAsync*********',action) 
          })
          .addCase(signOutAsync.rejected, (state, action) => {
            state.user.isSignIn = false;
            state.user.status = 'idle'
          })
      },
});

// export const aaa =  () => (dispatch,getState) => {
//     console.log('aaa')
// }
export const { signinAction,singoutAction } = authSlice.actions
export const selectUser = (state) => state.auth.user
export default authSlice.reducer