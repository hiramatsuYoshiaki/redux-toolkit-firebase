import React from 'react'
import { useLocation } from 'react-router-dom';

const Detail = () => {
    const location= useLocation();
    console.log(location.state.todo)  //for location state
    // console.log(location.search)  //for query strings;
    return (
        <div className="page-fexed-container">
            <h1>detail</h1>
            <div>id:{location.state.todo.id}</div>
            <div>todo:{location.state.todo.todo}</div>
            <div>done:{location.state.todo.done?'finish':'Unfinidh'}</div>
            <div>uid:{location.state.todo.uid}</div>
        </div>
    )
}

export default Detail
