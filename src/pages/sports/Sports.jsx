import React,{useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux'
import {selectUser} from  '../../features/auth/authSlice'
import {selectAll } from  '../../features/sports/sportsSlice'

import {DashbordCycle} from '../../components/sports/index'
import { format, getYear, getMonth,getDate, getHours,getMinutes, getSeconds} from 'date-fns'
import './Sports.scss'


const Sports = () => {
     console.log('start---->Sports.jsx');
    // const history = useHistory()
    const profile = useSelector(selectUser)
    const activities = useSelector(selectAll)
    const [count, setCount] = useState(0)
    const [distance, setDistance] = useState(0)
    const [elevation, setElevation] = useState(0)
    const [year, setYear] = useState('')
    const [rideTime, setRideTime] = useState(0)
    const [maxDistance, setMaxDistance] = useState(null)
    const [maxAvarage, setMaxAvarage] = useState(null)
    const [maxElevation, setMaxElavation] = useState(null)
  
    // const [rideTimeHours, setRideTimeHours] = useState(0)
    // const [rideTimeMinutes, setRideTimeMinutes] = useState(0)
    // const [rideTimeSeconds, setRideTimeSeconds] = useState(0)

    const rideTimeTotalling = (time) =>{
        //date-fnsで年・月・日・時間・分・秒を取得する
        // console.log( getYear(time) )
        // console.log( getMonth(time) )
        // console.log( getDate(time) )
        // console.log( getHours(time) )
        // console.log( getMinutes(time) )
        // console.log( getSeconds(time) )

        //秒単位にして集計
        const totallingTime = (getHours(time)*60*60) + (getMinutes(time)*60) + getSeconds(time)
        //秒から時間
        // console.log('Hours(h)',totallingTime/3600)
        // console.log('Hours(h)',Math.floor(totallingTime/3600))
        //秒から分
        // console.log('Minutes(h)',totallingTime%3600)
        // console.log('Minutes(m)',Math.floor(totallingTime%3600/60))
        //秒から秒
        // console.log('Seconds(s)',Math.floor((totallingTime%3600)%60))
        // console.log('totallingTime',totallingTime);
        
        setRideTime(prevRideTime => prevRideTime + totallingTime)
    }


    

    useEffect(()=>{
        const now = new Date()
        const date = new Date(getYear(now), 0, 1)
        
        setCount(0)
        setDistance(0)
        setElevation(0)
        setYear('')
        setRideTime(0)
        setYear(getYear(date))
        setMaxDistance(null)
        setMaxAvarage(null)
        setMaxElavation(null)
    
        const userActivities = activities.filter(activity=> 
            activity.owner.uid === profile.uid 
            && activity.done === true 
            // && getYear(activity.date.toDate()) ===  getYear(date)
             )
        userActivities.forEach(element => {

            //秒単位にして集計
            rideTimeTotalling(element.doneRideTime.toDate())
            console.log(element.doneRideTime.toDate());

            setDistance((prevDistance)=> prevDistance + Number(element.doneDistance))
            setElevation((prevElevation)=> prevElevation + Number(element.doneElevation))
            setCount((prevCount)=> prevCount + 1)
        })
        const maxDistanceReduce = userActivities.reduce( (prev, current) => ((prev.doneDistance > current) ?  prev : current) )
        // const maxAvelageReduce = userActivities.reduce( (prev, current) => ((prev.doneAverage > current) ?  prev.doneDistance : current) )
        // const maxElevationReduce = userActivities.reduce( (prev, current) => ((prev.doneElevation > current) ?  prev.doneDistance : current) )
        console.log('maxDistanceReduce',maxDistanceReduce);
        console.log('maxDistance.doneDistance',maxDistanceReduce.doneDistance);
        setMaxDistance(maxDistanceReduce)
        // setMaxAvarage(maxAvelageReduce)
        // setMaxElavation(maxElevationReduce)


        // console.log(rideTime);
    },[activities,profile])

    return (
       <div className='l-sports-container'> 

            {/* <div>DashBordダッシュボード</div> */}
            <DashbordCycle  
                profile={profile} 
                activities={activities} 
                count={count} 
                distance={distance} 
                elevation={elevation} 
                rideTime={rideTime} 
                maxDistance={maxDistance}
                maxAvarage={maxAvarage}
                maxElevation={maxElevation}
                year={year}/>
            {/* <div>Cycling planサイクリング計画</div>

            <div>Frends仲間</div> */}

            {/* <Card sx={{  margin:'18px 8px 36px 8px', boxShadow:'none'}}>
                <CardMedia
                    component="img"
                    width='100%'
                    height="auto"
                    image={cycle_img}
                    alt="cycle image"
                    sx={{ maxWidth:'1200px'}}
                />
            </Card> */}
            {/* <CardContent>　
                <Typography gutterBottom variant="h4" component="div">
                サイクルライフ
                </Typography>
                <Typography variant="h5" color="text.secondary">
                あなたのサイクルアクティビティを、仲間とシェアしましょう。
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ニュースフィードをみる
                </Typography>
                <Typography variant="body2" color="text.secondary">
                計画を作る
                </Typography>
                <Typography variant="body2" color="text.secondary">
                走った記録をみる
                </Typography>
                <Typography variant="body2" color="text.secondary">
                自分の情報をみる
                </Typography>
                <Typography variant="body2" color="text.secondary">
                設定を確認する
                </Typography>
            </CardContent> */}
            
            {/* <div>
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
            </div> */}
            
        </div> 
    )
}

export default Sports
