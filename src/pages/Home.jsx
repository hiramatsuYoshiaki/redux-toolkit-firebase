import React, {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getActivities, selectAll} from '../features/sports/sportsSlice'
import {Link} from 'react-router-dom'
import {selectUser} from '../features/auth/authSlice'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import {LoadingSpiner} from '../components/index'
import {HomeHeader} from '../components/index'
import {CardNewActivitiesSummery} from '../components/sports/index'
import {CardDoneActivitiesSummery} from '../components/sports/index'
import {formatdate} from '../utils/formatdate'
import './page.scss'
 
const Home = () => { 
    console.log('home -------------------')
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
    
    return (
        <div className=''>
            {/* <div className='page-home-container'> */}
                    {profile.isSignIn 
                        ? profile.emailVerified   
                            ?    
                            <section className='page-fexed-container'>
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
                            </section>
                            :
                            <section className='page-fexed-container'>
                                <div>アカウントの作成が完了していません。</div>
                                    {/* <div>メールアドレスの認証をしてください。</div> */} 
                                    <Link to='/createaccount' >
                                        {/* <button>アクティベイト</button> */}
                                        <Button variant="outlined">
                                        アカウントの有効化
                                        </Button>
                                    </Link>
                            </section>
                        :<Container fixed>
                            <header >
                                <HomeHeader />
                            </header>
                            <section > 
                                { activities != null && activities.length > 0 
                                    ? activities.map(activity=>(
                                        <div key={activity.id}>
                                            {
                                                activity.public === 'public' && !activity.done
                                                ? <CardNewActivitiesSummery activity={activity}/>
                                                : null
                                            }
                                            {
                                                activity.public === 'public' && activity.done
                                                ? <CardDoneActivitiesSummery activity={activity}/> 
                                                : null
                                            }
                                        </div>
                                    )) 
                                    : null 
                                }
                            </section>
                                <section>
                                    <h3>アクティビティを計画する。</h3> 
                                    {/* <LinkButton 
                                        items={[
                                            {id:1,name:'サインイン',link:'/signin',color:'primary',variant:'outlined'},
                                            {id:2,name:'アカウントを作成',link:'/createaccount',color:'primary',variant:'outlined'},
                                        ]}
                                    /> */}
                                </section> 
                                {/* <section>
                                    <CardDoneActivities />
                                    <CardNewActivities />
                                </section> */}
                                <h3>アクティビティを計画する。</h3> 

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
                                        アカウントを作成
                                        </Button>
                                    </Link>
                                </section>

                                <section className='page-home-section'>
                                    {/* <h1>New Activities</h1> */}
                                    { activities != null && activities.length > 0 
                                        ? activities.map(activity=>(
                                            <div key={activity.id}>
                                                {
                                                    activity.public === 'public' && !activity.done
                                                    ? 
                                                    <div>
                                                        <div>{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}</div>
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
                                                       
                                                       <div>{formatdate(activity.date,'yyyy年MM月dd日 HH時mm分')}</div>
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
                        </Container>
                    }
                {/* </div>  */}
           
                <LoadingSpiner isLoading={profile.status}/>
        </div>
    )
}

export default Home
