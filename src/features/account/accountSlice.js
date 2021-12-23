import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setDocAccount } from './setDocAccount'
import { getDocAccount } from './getDocAccount'

const initialState = {
    perosn:{
        // id:null,
        uid: null,
        username:"aaa",
        email:"",
        photoURL:"",
        status: 'idle',
    }
}
//add account  
export const addAccount = createAsyncThunk( 
    'firebase/addAccount',
    async (user)=>{
        const reference = await setDocAccount(user)
        return reference
    }
)
//get account
export const getAccount = createAsyncThunk(
    'firebase/getAccount',
    async(uid)=>{
        console.log('createAsyncThunk')
        const refarence = await getDocAccount(uid)
        console.log('refarence',refarence)
        // const person = {
        //     uid: user.uid,
        //     username:user.username,
        //     email:user.email,
        //     photoURL:user.photoURL,
        //     create_at:serverTimestamp(),
        //     update_at:serverTimestamp(),
        // }
        return refarence.data 
    } 
)

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        createAction:(state,action)=> {
            state.perosn = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        //firestore addDoc
        .addCase(addAccount.pending, (state) => {
            state.perosn.status = 'loading'
          })
        .addCase(addAccount.fulfilled, (state, action) => {
            state.perosn.uid = action.payload.uid
            state.perosn.username = action.payload.username
            state.perosn.email = action.payload.email
            state.perosn.photoURL = action.payload.photoURL
            state.perosn.status = 'idle'
        })
        .addCase(addAccount.rejected, (state, action) => {
            state.perosn.status = 'idle'
        })
        // firestore getDoc
        .addCase(getAccount.pending, (state) => {
            state.perosn.status = 'loading'
          })
        .addCase(getAccount.fulfilled, (state, action) => {
            console.log('getAccount.fulfilled')
            console.log(action.payload)
            state.perosn.uid = action.payload.uid
            state.perosn.username = action.payload.username
            state.perosn.email = action.payload.email
            state.perosn.photoURL = action.payload.photoURL
            state.perosn.status = 'idle'
        })
        .addCase(getAccount.rejected, (state, action) => {
            state.perosn.status = 'idle'
        })

    } 
});
  
export const {
    createAction
} = accountSlice.actions
export const selectPerson = (state) => state.account.perosn
export default accountSlice.reducer