import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import storageReducer from '../features/storage/storageSlice'
import firestoreReducer from '../features/firestore/firestoreSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
    storage:storageReducer,
    firestore:firestoreReducer,
  },
});
