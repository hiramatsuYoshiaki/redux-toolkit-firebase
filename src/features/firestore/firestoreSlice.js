import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firestore:{
        todo:null,
        blog:null,
        gallary:null,
        Chats:null,
        status: 'idle', 
    }

}

const firestoreSlice = createSlice({ 
    name: 'firestore',
    initialState,
    reducers: {
        setTodo:(state,action)=>{
            console.log(action.payload)
            state.firestore.todo = action.payload
        }
    }
});

export const {
    setTodo
} = firestoreSlice.actions
export const selectorFirestoreTodo = (state) => state.firestore.firestore.todo
export default firestoreSlice.reducer