import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import {BottomMenuBar} from '../../components/sports/index'


const Sports = () => {
    return (
        <div className='page-fexed-container'>
            <div>1.自分の情報</div>
            <div>2.アクティビティーの計画</div>
            <div>3.自分のアクティビティー</div>
            <div>5.フィード</div>
            <div>6.設定</div>
            <div>
                <Link to='/sports/persons' >
                <div>
                    1.自分の情報
                    <Button variant='outlined'>Personal</Button>
                </div>
                </Link>
            </div>
        
            <div>
                <Link to='/sports/new' >
                    <div>
                        2.アクティビティーの計画
                    <Button variant='outlined'>New</Button>
                    </div>
                </Link>
            </div>

            <div>
                <Link to='/sports/activities' >
                    <div>
                        3.自分のアクティビティー
                    <Button variant='outlined'>Activities</Button>
                    </div>
                </Link>
            </div>
            
            <div>
                <Link to='/sports/feeds' >
                <div>
                    4.フィード
                    <Button variant='outlined'>Feeds</Button>
                </div>
                </Link>
            </div>
            <div>
                <Link to='/sports/config' >
                <div>
                    5.設定
                    <Button variant='outlined'>Config</Button>
                </div>
                </Link>
            </div>
            
            <BottomMenuBar /> 
        </div> 
    )
}

export default Sports
