import React from 'react'
import { selectIsSignIn } from '../features/auth/authSlice'
import {useSelector} from 'react-redux'
import { Link} from 'react-router-dom' 
import { CardLayoutLink } from '../components/index'
const Activities = () => {
    const isSignIn = useSelector(selectIsSignIn)
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
        <div className="page-fexed-container">  
            {isSignIn === false 
            ? <>
                <div>サインインしていません</div>
                <Link to='/signin' >
                    <button>サインイン</button>
                </Link>
              </>
            : 
            <>
                <CardLayoutLink items={items} />
            </>
            }
        </div> 
        
    )
}

export default Activities  
