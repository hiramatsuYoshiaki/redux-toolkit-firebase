import React from 'react'
import {Link} from 'react-router-dom'
import './Centering.scss'
const Centering = () => {
    return (
        <div className="container">
            <div>さあ！アクティビティを計画しましょう！</div>
            <div>アカウントを作って開始します。</div>
            <Link to='/createaccount'>
                <button>アカウントを作成する</button>
            </Link>
            <Link to="/signin" >
                <button>サインする</button>
            </Link>
        </div>      
    )
}

export default Centering 
