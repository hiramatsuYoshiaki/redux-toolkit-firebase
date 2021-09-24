import { createSlice } from '@reduxjs/toolkit'

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
    }
});

export const { signinAction,singoutAction } = authSlice.actions
export const selectUser = (state) => state.auth.user
export default authSlice.reducer