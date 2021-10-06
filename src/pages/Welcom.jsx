import React from 'react'
import {Link} from 'react-router-dom'
const styles = {
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding:'80px 0'
    }
}
const Welcom = () => {
    return (
        <div className="page-fexed-container">  
            <div style={styles.container}>
                <div>さあ！アクティビティを計画しましょう！</div>
                <div>アカウントを作って開始します。</div>
                <Link to='/createaccount'>
                    <button>アカウントを作成する</button>
                </Link>
                <Link to="/signin" >
                    <button>サインする</button>
                </Link>
            </div>
        </div>
    )
}

export default Welcom
