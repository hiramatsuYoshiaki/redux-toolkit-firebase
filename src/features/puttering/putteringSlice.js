import { createSlice,　createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    puttering:{
        uid:null,
        putterings:[],
        status:'idle' 
    }
}

const putteringSlice = createSlice({
    name: 'puttering',
    initialState,
    reducers: { 
        setData:(state,action)=>{
            console.log(action.payload)
            if(state.puttering.uid === null) {
                state.puttering.uid = action.payload.uid 
            }
            const value = {
                data:action.payload.data,
                done:action.payload.done,
            }
            state.puttering.putterings.push(value) 
        },
    }
});

export const {
    setData
} = putteringSlice.actions
export const selectorPuttering = (state) => state.puttering.puttering.putterings

export default putteringSlice.reducer