import React,{useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux'
import {selectUser} from  '../../features/auth/authSlice'
import {selectAll } from  '../../features/sports/sportsSlice'

import {DashbordCycle} from '../../components/sports/index'
import { format,getDate, getMonth, getYear} from 'date-fns'
import './Sports.scss'


const Sports = () => {
     console.log('start---->Sports.jsx');
    // const history = useHistory()
    const profile = useSelector(selectUser)
    const activities = useSelector(selectAll)
    const [count, setCount] = useState(0)
    const [distance, setDistance] = useState(0)
    const [year, setYear] = useState('')
    console.log(count)
    console.log(distance)
    

    useEffect(()=>{
        // const date = new Date(2021, 0, 1)
        // console.log(date)
        // console.log(getDate(date))
        // console.log(getMonth(date))
        // console.log(getYear(date))
        const now = new Date()
        // console.log(now)
        // console.log(getDate(now))
        // console.log(getMonth(now))
        // console.log(getYear(now))
        const date = new Date(getYear(now), 0, 1)
        // console.log(date)
        // console.log(getDate(date))
        // console.log(getMonth(date))
        // console.log(getYear(date))
        setYear(getYear(date))
        const userActivities = activities.filter(activity=> activity.owner.uid === profile.uid && activity.done === true)
        userActivities.forEach(element => {
           console.log( getYear(element.date.toDate()) )
        //    if(getYear(date) === getYear( element.date.toDate())){
               console.log(element.date.toDate())
               console.log( Number(element.doneDistance))
               setDistance((prevDistance)=> prevDistance + Number(element.doneDistance))
               setCount((prevCount)=> prevCount + 1)
        //    }
        })
        console.log(count)
        console.log(distance)
        console.log(userActivities)

    },[activities,profile])

    return (
       <div className='l-sports-container'> 

            {/* <div>DashBordダッシュボード</div> */}
            <DashbordCycle 
                profile={profile} 
                activities={activities} 
                count={count} 
                distance={distance} 
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
