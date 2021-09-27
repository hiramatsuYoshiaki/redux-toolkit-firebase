import React from 'react'
import { Link } from 'react-router-dom'
import './TopAppBar.css';

const TopAppBar = () => {
    return (
        <div className="TopAppBar-containe">
            <Link to={"/signin"} >
                <button className="TopAppBar-button" >Sing-In</button>
            </Link>
            <Link to={"/signout"} >
                <button className="TopAppBar-button">Sing-Out</button>
            </Link>
        </div>
    )
}

export default TopAppBar
