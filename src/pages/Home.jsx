import React, {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getActivities, selectAll} from '../features/sports/sportsSlice'
import {Link} from 'react-router-dom'
import {selectUser} from '../features/auth/authSlice'
import { Button } from '@mui/material'
import {LoadingSpiner} from '../components/index'
import { format} from 'date-fns'


import './page.scss'

const Home = () => { 
    console.log('home -------------------');
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    const allActivities = useSelector(selectAll)
    const [activities,setActicities] = useState(null)
    console.log(allActivities);
    console.log(activities);

    useEffect(()=>{
            dispatch(getActivities(null))
            setActicities(allActivities)
    },[])
    useEffect(()=>{
        setActicities(allActivities) 
    },[dispatch,allActivities])

    // console.log(,[profile);
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
    const starttime = (dateTime) =>{
        const jsTimestamp = dateTime.toDate()
        const fromtDateTime = format(jsTimestamp, 'yyyy年MM月dd日 HH:mm')
        return  fromtDateTime
    }
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
                                    <Link to='/sports' >
                                        <Button variant='outlined'>Sports</Button>
                                    </Link>
                                    {/* <Link to='/camera' > */}
                                        {/* <Button variant='outlined' disabled={true}>Camera</Button> */}
                                    {/* </Link> */}
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
                                <section className='page-home-section'>
                                    {/* <div>アカウントを作って開始します。</div> */}
                                    <Link to='/createaccount'>
                                        {/* <button>アカウントを作成する</button> */}
                                        <Button variant="outlined">
                                        アカウントを作成する
                                        </Button>
                                    </Link>
                                </section>
                                <section className='page-home-section'>
                                    <h1>New Activities</h1>
                                    { activities != null && activities.length > 0 
                                        ? activities.map(activity=>(
                                            <div key={activity.id}>
                                                {
                                                    activity.public === 'public' && !activity.done
                                                    ? 
                                                    <div>
                                                        <div>{starttime(activity.date)}</div>
                                                        <div>{activity.title}</div>
                                                        <div>予定</div>
                                                        <div>{activity.public}</div>
                                                    </div>
                                                    : null
                                                }
                                                {
                                                    activity.public === 'public' && activity.done
                                                    ? 
                                                    <div>
                                                       
                                                        <div>{starttime(activity.date)}</div>
                                                        <div>{activity.title}</div>
                                                         <div>実施済み</div>
                                                        <div>{activity.public}</div>
                                                        
                                                    </div>
                                                    : null
                                                }
                                            </div>
                                        )) 
                                        : null 
                                    }
                                </section>
                            </div>
                    }
                {/* </div>  */}
           
                <LoadingSpiner isLoading={profile.status}/>
        </div>
    )
}

export default Home
