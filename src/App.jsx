import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from "./firebase/config";
import  AppRouter  from './AppRouter'


function App() {
  initializeApp(firebaseConfig); 
  return (
        <>
        <AppRouter />
      </>
  );
}

export default App;
