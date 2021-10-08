import React,{useEffect} from 'react'
import moment from 'moment';
import {useDispatch,useSelector} from 'react-redux'
import { selectUser,selectIsSignIn,} from '../../../features/auth/authSlice'
import { setUid,
    setTodo,
    addTodo,
    getTodo,
    selectorFirestoreUid,
    selectorFirestoreTodo} from '../../../features/firestore/firestoreSlice'
import { Link, Redirect,useHistory} from 'react-router-dom' 
import {InputForm} from '../../../components/index'
import {InputUser} from '../../../components/InputUser'



const Todo = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    const user = useSelector(selectUser) 
    const todos = useSelector(selectorFirestoreTodo)
    console.log('Todo.jsx todos:',todos);
    const feilds = [
        {id:'01',label:"Todo",name:'todo',type:'text',},
    ]
    const [values, handleChange] = InputUser({
        todo:"",
        doen:false
    })
    const createTodo = (e) => {
        e.preventDefault()
        console.log('createTodo');
        console.log('todo : ', values.todo);
        const inputuValues = {
            uid:user.uid,
            todo:values.todo,
            done:false
        }
        // dispatch(setTodo(inputTodo)) 
        dispatch(addTodo(inputuValues))
        
    }
    const doneTodo = () => {
        console.log('doneTodo'); 
    }
    const delTodo = () => {
        console.log('delTodo')
    }
    useEffect(()=>{
        dispatch(getTodo(user.uid))
    },[user.uid,dispatch])
    return (
        <div className="page-fexed-container">  
            {isSignIn === false 
            ? <>
                {/* <Redirect to='/' ></Redirect> */}
                <div>サインインしていません</div>
                <Link to='/signin' >
                    <button>サインイン</button>
                </Link>
              </>
            : 
            <>
                <h1>Todo</h1>
                <div>
                    <form onSubmit={e=>createTodo(e)}>
                        {feilds.map(field=>(
                            <InputForm 
                                key={field.id} 
                                label={field.label}
                                id={field.name}
                                name={field.name}
                                type={field.type}
                                value={values[field.name]}//value={email} 
                                onChange={handleChange}// onChange={e => setEmail(e.target.value)}
                            />
                        ))}
                        <input type="submit" value="create todo" />
                    </form>
                </div>
                
                <div>
                    {(todos.length > 0 && todos !== undefined) && 
                        todos.map((todo,index)=>(
                            <div>
                                <div key={index}>
                                    <span>{index  + 1}:</span>
                                    <span>{todo.todo}</span>
                                    <span>{todo.done===false ? <button onClick={doneTodo}>done</button> : 'complete'}</span>
                                    <span><button onClick={delTodo}>del</button></span>
                                    {/* <span>update_at:{todo.update_at}</span>
                                    <span>create_at:{todo.create_at}</span> */}
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
                {/* <br />
                <div>
                    <div>isSignIn:{user.isSignIn === true ? 'true' : 'false'}</div>
                    <div>role:{user.role}</div>
                    <div>username:{user.username}</div>
                    <div>email:{user.email}</div>
                    <div>photoURL:{user.photoURL}</div>
                    <div>status:{user.status}</div>
                </div> */}
            </>}
        </div>
    )
}

export default Todo 
