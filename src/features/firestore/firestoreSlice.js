import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment';
import {setDocTodo} from './setDocTodo'
import {getDocTodo} from './getDocTodo'
import {updateDocTodo} from './updateDocTodo'
const initialState = {
    firestore:{
        uid:null,
        todos:[],
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
//add
export const addTodo = createAsyncThunk(
    'firestore/addTodo',
    async (values)=>{
        console.log('addTodo <----firestoreSlice')
        const reference = await setDocTodo(values)
        console.log('addTodo createAsyncThunk firebaceSlice')
        // console.log('create_at-->',reference.data.create_at)
        //extraReducersにserverTimestamp（オブジェクト）を渡すと
        //Timestampのクラスがそのままでは登録できないためエラーになる
        //serverTimestampをオブジェクトから{}や文字列に変換して渡す。
        // const createDate = moment(reference.data.create_at.toDate().toString()).format('YYYY/MM/DD HH:mm')
        // const createDate = reference.data.create_at.toDate().toString()
        // console.log(reference.data.create_at)
        // const createDate = reference.data.create_at.toDate()
        // const createDate = moment(reference.data.create_at.toDate()).format('YYYY/MM/DD HH:mm')
        // console.log(createDate)
        
        const todo = {
            id:reference.data.id,
            todo: reference.data.todo,
            done: false,
            uid:reference.data.uid,
            // update_at:'2021-10-07',
            // create_at:'2021-10-07',
            // update_at:action.payload.update_at,
            // create_at:action.payload.create_at,
        }
        return todo
    }
)
//read
export const getTodo = createAsyncThunk(
    'firedtore/getTodo',
     async (uid) =>{
        console.log('getTodo createAsyncThunk uid: ',uid)
        const todos =  await getDocTodo(uid)
        console.log('getTodo createAsyncThunk todos: ',todos)
        return todos.data
    }
)
//update
export const updateDoc = createAsyncThunk( 
    'firebase/updateTodo',
    async (todo)=>{
        console.log('updateDoc Todo craeteAsyncThunk')
        console.log('todo.done',todo.done)
        const updateTodo =  await updateDocTodo(todo)
        console.log( 'updateTodo.done', updateTodo.data.done)
        console.log('updateTodo createAsyncThunk todos: ',updateTodo)
        return updateTodo.data
    }
)


const firestoreSlice = createSlice({ 
    name: 'firestore',
    initialState,
    reducers: {
        setTodo:(state,action)=>{
            console.log(action.payload)
            state.firestore.todos.push(action.payload) 
        },
        setUid:(state,action)=>{
            console.log(action.payload)
            state.firestore.uid = action.payload 
        }
    },
    extraReducers: (builder) => {
        builder
        //firestore addDoc
        .addCase(addTodo.pending, (state) => {
            // state.firestore.todo = "";
            state.firestore.status = 'loading'
          })
        .addCase(addTodo.fulfilled, (state, action) => {
            //action <------reference.data
            // {moment(selectUser.create_at.toDate()).format('YYYY/MM/DD HH:mm')}
            // const value = {
            //     todo: action.payload.todo,
            //     done: false,
            //     uid:action.payload.uid,
            //     update_at:'2021/10/07',
            //     create_at:'2021/10/07',
            //     // update_at:action.payload.update_at,
            //     // create_at:action.payload.create_at,
            // }
            // state.firestore.todos.push(value) 

            state.firestore.todos.push(action.payload) 
            state.firestore.status = 'idle'
            console.log('firestore/addTodo-extraReducer------->',action) //payload: reference.data
          })
          .addCase(addTodo.rejected, (state, action) => {
            // state.firestore.todos = "";
            state.firestore.status = 'idle'
          })


        //firestore getDOc
        .addCase(getTodo.pending, (state) => {
            // state.firestore.todos = "";
            state.firestore.status = 'loading'
          })
        .addCase(getTodo.fulfilled, (state, action) => {
            //action <------reference.data
            console.log('firestore/getTodo-extraReducer------->',action.payload) //payload: reference.data
            state.firestore.todos = action.payload
            state.firestore.status = 'idle'
          })
          .addCase(getTodo.rejected, (state, action) => {
            state.firestore.todos = [];
            state.firestore.status = 'idle'
          })
    }
});

export const { 
    setTodo,
    setUid
} = firestoreSlice.actions
export const selectorFirestoreTodo = (state) => state.firestore.firestore.todos
export const selectorFirestoreUid = (state) => state.firestore.firestore.uid
export default firestoreSlice.reducer