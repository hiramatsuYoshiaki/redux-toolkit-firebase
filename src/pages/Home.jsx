import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/auth/authSlice'
import { CardLayoutLink } from '../components/index'
import { Button } from '@mui/material'
import './page.scss'

const Home = () => {
    console.log('home -------------------');
    const profile = useSelector(selectUser)
    console.log(profile);
    const items = [
        {id:'01',name:'Todos',link:'/activities/todos', 
            guide:''}, 
        {id:'02',name:'Feeds',link:'/activities/feeds', 
            guide:''},
        // {id:'03',name:'Galleries',link:'/activities/galleries'}, 
        // {id:'04',name:'Chats',link:'/activities/chats'},
        {id:'05',name:'Planning',link:'/activities/planning', 
            guide:''},
        {id:'06',name:'ポタリング',link:'/activities/putteringTimeline', 
            guide:'サイクリングを楽しくするサイト'},
    ]
    return (
        <div className='page-fexed-container'>
            {/* <div className='page-home-container'> */}
                    {profile.isSignIn 
                        ? profile.emailVerified  
                            ?    
                            <div>
                                <div>ようこそ!</div>
                                <div>{profile.username}さん</div>
                                <div>
                                    <CardLayoutLink items={items} />  
                                </div>
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
           
            {/* <LoadingSpiner isLoading={isLoding}/> */}
        </div>
    )
}

export default Home
