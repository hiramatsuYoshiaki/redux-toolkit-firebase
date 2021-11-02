import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import storageReducer from '../features/storage/storageSlice'
import firestoreReducer from '../features/firestore/firestoreSlice'
import putteringReducer from '../features/puttering/putteringSlice'
import accountReducer from '../features/account/accountSlice'
import timelineReducer from '../features/putteringTimeline/timelineSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth:authReducer,
    storage:storageReducer,
    firestore:firestoreReducer, 
    puttering:putteringReducer,
    account:accountReducer,
    timeline:timelineReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        
        //error message: 
        //Take a look at the reducer(s) handling this action type: puttering/setData.
        // Ignore these action types-----------
        ignoredActions: [
            'puttering/setData',
            'firebase/addPuttering/fulfilled'
        ],

        // Ignore these field paths in all actions--------------
        // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],

        // Ignore these paths in the state-----------
        // ignoredPaths: ['payload.data.datePicker'],


        // serializableCheck: false
      },
    }),
});
