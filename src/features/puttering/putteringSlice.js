import { createSlice,　createAsyncThunk } from '@reduxjs/toolkit'
import { setDocPuttering } from './setDocPuttering'
import { getDocPuttering } from './getDocPuttering'

const initialState = {
    puttering:{
        uid:null,
        putterings:[],
        status:'idle' 
    }
}
// get Puttering
export const getPuttering = createAsyncThunk(
    'firebase/getPuttering',
    async (uid)=>{
        // console.log('putteringSlice dispatch getPuttering------------')
        const refarence = await getDocPuttering(uid)
        // console.log('getputtering createAsyncThunk data: ',refarence)
        return refarence.data
    }
    
)
//add puttering 
export const addPuttering = createAsyncThunk(
    'firebase/addPuttering',
    async (inputValues)=>{
        // console.log('putteringSlice dispatch addPuttering------------')
        // console.log('inputValues',inputValues)
        const reference = await setDocPuttering(inputValues)
        // console.log('rerun firestore data', reference)
        // const putterings = {
        //     id:reference.data.id,
        //     todo: reference.data.todo,
        //     done: false,
        //     uid:reference.data.uid,
        //     // update_at:'2021-10-07',
        //     // create_at:'2021-10-07',
        //     // update_at:action.payload.update_at,
        //     // create_at:action.payload.create_at,
        // }
        if(reference !== null){
            return reference
        }
        return null
    }
)
const putteringSlice = createSlice({
    name: 'puttering',
    initialState,
    reducers: { 
        setData:(state,action)=>{
            if(state.puttering.uid === null) {
                state.puttering.uid = action.payload.uid 
            }
            const value = {
                data:action.payload.data,
                done:action.payload.done,
            }
            state.puttering.putterings.push(value) 
        },
    },
    extraReducers: (builder) => {
        builder
        //firestore addDoc
        .addCase(addPuttering.pending, (state) => {
            state.puttering.status = 'loading'
          })
        .addCase(addPuttering.fulfilled, (state, action) => {
            if(state.puttering.uid === null){
                state.puttering.uid = action.payload.uid
            }
            state.puttering.putterings.push(action.payload.data) 
            state.puttering.status = 'idle'
        })
        .addCase(addPuttering.rejected, (state, action) => {
            state.puttering.status = 'idle'
        })
        // firestore getDOc
        .addCase(getPuttering.pending, (state) => {
            state.puttering.status = 'loading'
          })
        .addCase(getPuttering.fulfilled, (state, action) => {
            state.puttering.uid= action.payload[0].uid 
            state.puttering.putterings= action.payload 
            state.puttering.status = 'idle'
        })
        .addCase(getPuttering.rejected, (state, action) => {
            state.puttering.status = 'idle'
        })

    }
});

export const {
    setData
} = putteringSlice.actions
export const selectorPuttering = (state) => state.puttering.puttering.putterings

export default putteringSlice.reducer