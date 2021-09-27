import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import { listenAuth } from './listenAuth'
// import { listenAuthState } from './listenAuthState'

//staet
const initialState = {
    user:{
        isSignIn: false,
        role:"",
        uid: null,
        username:"",
        email:"",
        photoURL:""
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
export const signInAsync = createAsyncThunk(
    'auth/signIn',
    async () => {
        console.log('signIn ==============')
    }
)
export const signOutAsync = createAsyncThunk(
    'auth/signOut',
    async () => {
        console.log('signOut =============')
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
                photoURL:""
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(listenAuthState.pending, (state) => {
            state.user.isSignIn = false;
          })
        .addCase(listenAuthState.fulfilled, (state, action) => {
            //action <------signInUser.data
            state.user.isSignIn = action.payload.isSignIn;
            state.user.role = action.payload.role
            state.user.uid = action.payload.uid
            state.user.username = action.payload.username
            state.user.email = action.payload.email
            state.user.photoURL = action.payload.photoURL
            console.log('auth/listenAuthState*********',action) //payload: signInUser.data listenAuthState
          })
          .addCase(listenAuthState.rejected, (state, action) => {
            state.user.isSignIn = false;
          });
      },
});

// export const aaa =  () => (dispatch,getState) => {
//     console.log('aaa')
// }
export const { signinAction,singoutAction } = authSlice.actions
export const selectUser = (state) => state.auth.user
export default authSlice.reducer