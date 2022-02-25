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
// import {formatdate} from '../utils/formatdate'
import {ActivityType} from '../components/home/index'
import './page.scss'
 
const Home = () => { 
    console.log('home -------------------') 
    const dispatch = useDispatch()
    const profile = useSelector(selectUser)
    const allActivities = useSelector(selectAll)
    const [activities,setActicities] = useState(null)
    // console.log(allActivities);
    // console.log(activities);

    useEffect(()=>{
            dispatch(getActivities(null)) 
            setActicities(allActivities)
    },[])
    useEffect(()=>{
        setActicities(allActivities) 
    },[dispatch,allActivities])

    return (
        <div className=''>
                    {profile.isSignIn 
                        ? profile.emailVerified   
                            ? <ActivityType />
                            :
                            <section className='page-fexed-container'>
                                <div>アカウントの作成が完了していません。</div>
                                    <Link to='/createaccount' >
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
                                                ?
                                                <div>
                                                    <h3>新しい計画</h3>
                                                    <CardNewActivitiesSummery activity={activity}/>
                                                </div>
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
                        </Container>
                    }
           
                <LoadingSpiner isLoading={profile.status}/>
        </div>
    )
}

export default Home
