import React,{useEffect} from 'react'
import { selectUser,
        selectIsSignIn,
        } from '../features/auth/authSlice'
import {useDispatch,useSelector} from 'react-redux'
import { setUid,
        setTodo,
        makeTodo,
        selectorFirestoreUid,
        selectorFirestoreTodo} from '../features/firestore/firestoreSlice'
import { Link, Redirect,useHistory} from 'react-router-dom' 
import { CardLayoutLink } from '../components/index'
    // import './Cardlayout.scss'
// const styles = {
    
// }
// useEffect(()=>{

// },[])
// user:{
//     isSignIn: false,
//     role:"",
//     uid: null,
//     username:"",
//     email:"",
//     photoURL:"",
//     status: 'idle',  
// }
const Activities = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    // const user = useSelector(selectUser)
    const items = [
        {id:'01',name:'Todos',link:'/activities/todos'},
        {id:'02',name:'Feeds',link:'/activities/feeds'},
        {id:'03',name:'Galleries',link:'/activities/galleries'},
        {id:'04',name:'Chats',link:'/activities/chats'},
    ]
    const createTodo = () => {
        console.log('createTodo');
    }
    const listTodo = () => {
        console.log('listTodo'); 
    }
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
