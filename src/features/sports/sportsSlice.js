import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import { uploadStrageImages } from '../storage/uploadStrageImages'
import { getDocActivities } from './getDocActivities'
import { updateDocActivity } from './updateDocActivity'
import { setDocActivity} from './setDocActivity'
import { updatePublish} from './updatePublish'
import { removeDocActivity} from './removeDocActivity'
import { updateDoneActivity} from './updateDoneActivity'

const initialState = {
    activities:{ 
        all:[],
        // new:{},
        errors:[],
        status:'idle'
    }
    // activities:{
    //     id:'',
    //     owner:'',
    //     title:'',
    //     date:null,
    //     couse:'',
    //     start:'',
    //     gole:'',
    //     distance:'',
    //     couse_map:'',
    //     couse_link:'',
    //     coment:'',
    //     segment:'',
    //     public:'',
    //     participation:'',
    //     done:false,
    //     garmin:'',
    //     relive:'',
    //     strava:'',
    //     file:null,
    //     create_at:null,
    //     update_at:null,
    //     starus:'idle',
    //     code:'',
    //     message:'',
    // }
}
export const updateActivityPublish = createAsyncThunk(
    'sports/updateActivityesPublish',
    async(updateActivity,{rejectWithValue})=>{
        try{
            console.log('sportsSlice updateActivityPublis===> try')
            const res = await updatePublish(updateActivity)
            console.log('pdateActivityPubli sportsSlice res ok----------',res.data)
            return res
        }
        catch(error){
            console.log(error.code)
            console.log(error.message)
            console.log('sportsSlice updateActivityPublis===> catch error')
            return rejectWithValue(error)
        }
    }
)
export const getActivities = createAsyncThunk(
    'sports/getActivities',
    async(profile,{rejectWithValue})=>{
        try{
            // console.log('sportsSlice getActivities===> try')
            const res = await getDocActivities(profile)
            // console.log(res)
            return res
        }
        catch(error){
            console.log('getActivities===> catch error')
            console.log(error.code)
            console.log(error.message)
            return rejectWithValue(error)
        }
    }　
)
export const createActivity = createAsyncThunk(
    'sports/createActivity',
    async(activityData,{rejectWithValue})=>{
        try{
            // console.log('createActivity===> try')
            // console.log('activityData:',activityData)
            //strageにアップロードしurlを取得
            if(activityData.file !== null) {
                const url = await uploadStrageImages(activityData.file,'map','image/jpeg')
                // console.log('url=========>',url)
                activityData.couse_map = url.data.downloadURL
                // console.log('activityData.file=========>',activityData.file)
            }
            
            //firestoreのactivities_bikeコレクションに追加
            const res = await setDocActivity(activityData)
            // console.log(res)
            return res 
        }catch(error){
            console.log('createActivity===> catch error')
            console.log(error)
            return rejectWithValue(error)
        }
    }
)   

export const updateActivity = createAsyncThunk(
    'sports/updateActivity',
    async(activityData,{rejectWithValue})=> {
        try{
            console.log('updateActivity===> try')
            if(activityData.file !== null) {
                const url = await uploadStrageImages(activityData.file,'map','image/jpeg')
                console.log('url=========>',url)
                activityData.couse_map = url.data.downloadURL
                console.log('activityData.file=========>',activityData.file)
            }
            const res = await updateDocActivity(activityData)
            console.log('updateActivity res-->',res)
            return res 
        }catch(error){
            console.log('updateActivity===> catch error')
            console.log(error)
            return rejectWithValue(error)
        }
    }
)
export const removeActivity = createAsyncThunk(
    'sports/removeActivity',
    async(activityData,{rejectWithValue})=>{
        try{
            console.log('removeActivity ===> try')
            const res = await removeDocActivity(activityData)
            console.log('removeActivity res-->',res)
            return res 
        }
        catch(error){
            console.log('updateActivity===> catch error')
            console.log(error)
            return rejectWithValue(error) 
        }
    }
)
export const doneActivity = createAsyncThunk(
    'sports/doneActivity',
    async(data,{rejectWithValue})=>{
        try{
            console.log('doneActivity---------') 
            console.log('done data--------', data)
            // if(activityData.file !== null) {
            //     const url = await uploadStrageImages(activityData.file,'map','image/jpeg')
            //     console.log('url=========>',url)
            //     activityData.couse_map = url.data.downloadURL
            //     console.log('activityData.file=========>',activityData.file)
            // }
            const res = await updateDoneActivity(data) 
            console.log('res',res) 
            return res
        }
        catch(error){
            console.log('doneActivity ===> catch error')
            console.log(error)
            return rejectWithValue(error) 
        }
    }
)

const sportsSlice = createSlice({
    name: 'sports_bike',
    initialState,
    reducers: {
        createAction:(state,action)=>{
            state.activities = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        //firestore addDoc collection:sports_bike
        .addCase(createActivity.pending, (state) => {
            state.activities.status = 'loading'
          })
        .addCase(createActivity.fulfilled, (state, action) => {
            // state.new = action.payload.data
            state.activities.all = [...state.activities.all, action.payload.data]
            state.activities.status = 'idle'
        })
        .addCase(createActivity.rejected, (state, action) => {
            state.activities.status = 'idle'
        })

        //firestore getDoc collection:sports_bike all
        .addCase(getActivities.pending, (state) => {
            state.activities.status = 'loading'
          })
        .addCase(getActivities.fulfilled, (state, action) => {
            // console.log('getActivities fulfilled')
            // console.log('state.all',state.all)
            state.activities.all = action.payload.data
            state.activities.status = 'idle'
        })
        .addCase(getActivities.rejected, (state, action) => {
            state.activities.status = 'idle'
        })


        //firestore update public public/private
        .addCase(updateActivityPublish.pending, (state) => {
            state.activities.status = 'loading'
          })
        .addCase(updateActivityPublish.fulfilled, (state, action) => {
            console.log('updateActivityPublish fulfilled')
            console.log('action.payload.data.activity',action.payload.data)
            const alls = state.activities.all
            const index = alls.findIndex(all=> all.id === action.payload.data.id)
            state.activities.all[index] = action.payload.data
            // state.activities.all = [...state.activities.all, action.payload.data]
            state.activities.status = 'idle'
        })
        .addCase(updateActivityPublish.rejected, (state, action) => { 
            state.activities.errors = action.data
            state.activities.status = 'idle'
        })

        //firestore update  
        .addCase(updateActivity.pending, (state) => {
            state.activities.status = 'loading'
          })
        .addCase(updateActivity.fulfilled, (state, action) => {
            console.log('updateActivity fulfilled')
            console.log('action.payload.data.activity-->',action.payload.data)
            console.log('action.payload.data.id-->',action.payload.data.id)
            const alls = state.activities.all
            const index = alls.findIndex(all=> all.id === action.payload.data.id)
            state.activities.all[index] = action.payload.data
            state.activities.status = 'idle'
        })
        .addCase(updateActivity.rejected, (state, action) => { 
            state.activities.errors = action.data
            state.activities.status = 'idle'
        })
        //firestore update  
        .addCase(doneActivity.pending, (state) => {
            state.activities.status = 'loading' 
          })
        .addCase(doneActivity.fulfilled, (state, action) => {
            console.log('doneActivity fulfilled')
            console.log('action.payload.data.activity-->',action.payload)
            // console.log('action.payload.data.activity-->',action.payload.data)
            // console.log('action.payload.data.id-->',action.payload.data.id)
            const alls = state.activities.all
            const index = alls.findIndex(all=> all.id === action.payload.data.id)
            state.activities.all[index] = action.payload.data
            state.activities.status = 'idle'
        })
        .addCase(doneActivity.rejected, (state, action) => { 
            state.activities.errors = action.data
            state.activities.status = 'idle'
        })

        //firestore remove activity  
        .addCase(removeActivity.pending, (state) => {
            state.activities.status = 'loading'
          })
        .addCase(removeActivity.fulfilled, (state, action) => {
            console.log('removeActivity fulfilled')
            console.log('action.payload.data.activity-->',action.payload.data)
            console.log('action.payload.data.id-->',action.payload.data.id)
            const alls = state.activities.all
            const removeActivity = alls.filter(all=> all.id !== action.payload.data.id)
            state.activities.all = removeActivity
            state.activities.status = 'idle'
        })
        .addCase(removeActivity.rejected, (state, action) => { 
            state.activities.errors = action.data
            state.activities.status = 'idle'
        })
    } 

});   

export const {
    createAction
} = sportsSlice.actions
export const selectActivities = (state) => state.sports_bike.activities
export const selectNew = (state) => state.sports_bike.activities.new
export const selectAll = (state) => state.sports_bike.activities.all
export const selectActivitiesStatus = (state) => state.sports_bike.activities.status
export default sportsSlice.reducer 