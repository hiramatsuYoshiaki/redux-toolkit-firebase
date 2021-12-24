import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import { uploadStrageImages } from '../storage/uploadStrageImages'
import { getDocActivities } from './getDocActivities'
import { setDocActivity} from './setDocActivity'

const initialState = {
    activities:{
        all:[],
        new:{},
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
export const getActivities = createAsyncThunk(
    'sports/getActivities',
    async(profile,{rejectWithValue})=>{
        try{
            console.log('sportsSlice getActivities===> try')
            const res = await getDocActivities(profile)
            console.log(res)
            return res
        }
        catch(error){
            console.log('getActivities===> catch error')
            console.log(error)
            return rejectWithValue(error)
        }
    }
 
)
export const createActivity = createAsyncThunk(
    'sports/createActivity',
    async(activityData,{rejectWithValue})=>{
        try{
            console.log('createActivity===> try')
            console.log('activityData:',activityData)
            //strageにアップロードしurlを取得
            const url = await uploadStrageImages(activityData.file,'map','image/jpeg')
            console.log('url=========>',url)
            activityData.couse_map = url.data.downloadURL
            console.log('activityData.file=========>',activityData.file)
            //firestoreのactivities_bikeコレクションに追加
            const res = await setDocActivity(activityData)
            console.log(res)
            return res 
        }catch(error){
            console.log('createActivity===> catch error')
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
            state.new = action.payload.data
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
            console.log('getActivities fulfilled')
            console.log('state.all',state.all)
            state.activities.all = action.payload.data
            state.activities.status = 'idle'
        })
        .addCase(getActivities.rejected, (state, action) => {
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