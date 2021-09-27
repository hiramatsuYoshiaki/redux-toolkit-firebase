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
        {/* <Auth /> */}
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </>
  );
}

export default App;
