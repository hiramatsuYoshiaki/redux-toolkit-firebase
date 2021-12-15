import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/auth/authSlice'
import { Button } from '@mui/material'
import {LoadingSpiner} from '../components/index'
import './page.scss'

const Home = () => { 
    // console.log('home -------------------');
    const profile = useSelector(selectUser)
    // console.log(profile);
    // const items = [
    //     {id:'01',name:'ダッシュボード',link:'/activities/dashbord', 
    //         guide:''}, 
    //     {id:'02',name:'フィード',link:'/activities/feeds', 
    //         guide:''},
    //     {id:'03',name:'ギャラリー',link:'/activities/galleries'}, 
    //     {id:'04',name:'タイムライン',link:'/activities/timeline'},
    //     {id:'05',name:'プランニング',link:'/activities/planning', 
    //         guide:''},
    //     {id:'06',name:'アクティビティ',link:'/activities/putteringTimeline', 
    //         guide:'アクティビティ'},
    //     {id:'07',name:'グループ',link:'/activities/putteringTimeline', 
    //         guide:'グループ'},
    //     {id:'08',name:'Chats',link:'/activities/chats'},
        
    // ]
    return (
        <div className='page-fexed-container'>
            {/* <div className='page-home-container'> */}
                    {profile.isSignIn 
                        ? profile.emailVerified  
                            ?    
                            <div>
                                {/* <div>ようこそ!</div>
                                <div>{profile.username}さん</div> */}
                                <div>アクティビティタイプ</div>
                                    <Link to='/sports/top' >
                                        <Button variant='outlined'>Sports</Button>
                                    </Link>
                                    {/* <Link to='/camera' >
                                        <Button variant='outlined'>Camera</Button>
                                    </Link> */}
                                {/* <div>
                                    <CardLayoutLink items={items} />  
                                </div> */}
                            </div>
                            :    <div>
                                    <div>アカウントの作成が完了していません。</div>
                                    {/* <div>メールアドレスの認証をしてください。</div> */} 
                                    <Link to='/createaccount' >
                                        {/* <button>アクティベイト</button> */}
                                        <Button variant="outlined">
                                        アカウントの有効化
                                        </Button>
                                    </Link>
                                </div>
                        :   <div>
                                <h3>アクティビティを計画しよう！</h3> 
                                <section className='page-home-section'>
                                    {/* <div>サインインする</div> */}
                                    <Link to='/signin' >
                                        {/* <button>サインイン</button>  */}
                                        <Button variant="outlined">
                                        サインイン
                                        </Button>
                                    </Link>
                                </section>
                                <section>
                                    {/* <div>アカウントを作って開始します。</div> */}
                                    <Link to='/createaccount'>
                                        {/* <button>アカウントを作成する</button> */}
                                        <Button variant="outlined">
                                        アカウントを作成する
                                        </Button>
                                    </Link>
                                </section>
                            </div>
                    }
                {/* </div>  */}
           
                <LoadingSpiner isLoading={profile.status}/>
        </div>
    )
}

export default Home
