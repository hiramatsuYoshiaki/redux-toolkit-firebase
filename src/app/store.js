import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import storageReducer from '../features/storage/storageSlice'
import firestoreReducer from '../features/firestore/firestoreSlice'
import putteringReducer from '../features/puttering/putteringSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth:authReducer,
    storage:storageReducer,
    firestore:firestoreReducer, 
    puttering:putteringReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        
        //error message: 
        //Take a look at the reducer(s) handling this action type: puttering/setData.
        // Ignore these action types-----------
        // ignoredActions: ['puttering/setData'],

        // Ignore these field paths in all actions--------------
        // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],

        // Ignore these paths in the state-----------
        // ignoredPaths: ['payload.data.datePicker'],


        // serializableCheck: false
      },
    }),
});
