import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { setDocTimeline } from './setDocTimeline'
import { getDocTimeline } from './getDocTimeline'

const initialState = {
    feeds:{
        posts:[],
        status:'idle'
    }
     
}
// get timeline by uid
export const getTimeline = createAsyncThunk(
    'firestore/getTimeline',
    async (user) => {
        console.log('timelineSlice dispatch getTimeline ----------')
        const reference = await getDocTimeline(user)
        console.log('getTimeline createAsyncThunk data: ', reference)
        return reference.data
    }
)
//add timeline  
export const addTimeline = createAsyncThunk(
    'firebase/addTimeline',
    async (post)=>{
        console.log('timelineSlice dispatch addTimeline------------')
        // console.log('post',post)
        // console.log('state',post.state)
        // console.log('field',post.state.field)
        // console.log('uid',post.state.field.uid)
        // console.log('puttering',post.state.field.puttering)
        // console.log('title',post.state.field.puttering.title)
        // console.log('course',post.state.field.puttering.course)
        // console.log('date',post.state.field.puttering.datePicker)
        const reference = await setDocTimeline(post) 
        console.log('reference', reference)
        // if(reference !== null){
        //     return reference
        // }
        return reference
    }
)
const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: {
        setData:(state,action)=>{
            state.feeds.posts.push(action) 
        },
        
    },
    extraReducers: (builder) => {
        builder
        //firestore addDoc
        .addCase(getTimeline.pending, (state) => {
            state.feeds.status = 'loading'
          })
        .addCase(getTimeline.fulfilled, (state, action) => {
            console.log('getTimeline.fulfilled')
            state.feeds.posts = action.payload
            console.log(action.payload)
            state.feeds.status = 'idle'
        })
        .addCase(getTimeline.rejected, (state, action) => {
            state.feeds.status = 'idle'
        })
    }
});

export const {
    setData
} = timelineSlice.actions
export const selectorFeeds = (state) => state.timeline.feeds.posts
export default timelineSlice.reducer  