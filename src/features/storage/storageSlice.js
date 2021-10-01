import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import {getStorageAvator} from './getStorageAvator'
const initialState = {
    avator:{
        downloadURL:"",
        status:"idle"
    }
}
export const getAvatorAsync = createAsyncThunk(
    'storege/getAvator',
    async(url) => {
        // console.log('getAvatorAsync')
        // console.log('url: ',url)
        const reference = await getStorageAvator(url)
        // console.log('reference-->',reference.data)
        return reference.data
    }
)
const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        setDounloadURL:(state,action)=>{
            console.log(action.payload)
            state.avator.downloadURL = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        //firebase auth onAuthStateChanged
        .addCase(getAvatorAsync.pending, (state) => {
            state.avator.downloadURL = "";
            state.avator.status = 'loading'
          })
        .addCase(getAvatorAsync.fulfilled, (state, action) => {
            //action <------reference.data
            state.avator.downloadURL = action.payload.downloadURL;
            state.avator.status = 'idle'
            // console.log('auth/getAvatorAsync*********',action) //payload: signInUser.data getAvatorAsync
          })
          .addCase(getAvatorAsync.rejected, (state, action) => {
            state.avator.downloadURL = "";
            state.avator.status = 'idle'
          })
    }
});

export const { setDounloadURL } = storageSlice.actions
export const selectorStorage = (state) => state.storage.avater
export const selectorAvater = (state) => state.storage.avator.downloadURL
export default storageSlice.reducer