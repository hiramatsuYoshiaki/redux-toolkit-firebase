import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    firestore:{
        uid:null,
        todo:[],
        blog:null,
        gallary:null,
        Chats:null,
        status: 'idle', 
    }

}
export const fetchFirestore = createAsyncThunk(
    'firestore/fetchFirestore',
    ()=>{
        console.log('fetchFirestore')
    }
)
export const makeTodo = createAsyncThunk(
    'firestore/makeTodo',
    ()=>{
        console.log('makeTodo')
    }
)
const firestoreSlice = createSlice({ 
    name: 'firestore',
    initialState,
    reducers: {
        setTodo:(state,action)=>{
            console.log(action.payload)
            state.firestore.todo.push(action.payload) 
        },
        setUid:(state,action)=>{
            console.log(action.payload)
            state.firestore.uid = action.payload
        }
    }
});

export const { 
    setTodo,
    setUid
} = firestoreSlice.actions
export const selectorFirestoreTodo = (state) => state.firestore.firestore.todo
export const selectorFirestoreUid = (state) => state.firestore.firestore.uid
export default firestoreSlice.reducer