import React,{useEffect} from 'react'
// import moment from 'moment';
import {useDispatch,useSelector} from 'react-redux'
import { selectUser,selectIsSignIn,} from '../../../features/auth/authSlice'
import { 
    addTodo,
    getTodo,
    updateDoc,
    selectorFirestoreTodo} from '../../../features/firestore/firestoreSlice'
// import { setUid,
//     setTodo,
//     selectorFirestoreUid,
//     } from '../../../features/firestore/firestoreSlice'
import { Link} from 'react-router-dom' 
import {TodoAdd, TodoUnFinish, TodoFinish} from '../../../components/index'
// import {InputForm} from '../../../components/index'
// import {InputUser} from '../../../components/InputUser'
// const styles={
//     wraper:{
//         width:"100%",
//         padding:".8rem", 
//     },
//     listContainer:{
//         alignItems: 'center', 
//         display: 'flex',
//         justifyContent: 'space-between', 
//         borderBottom: '1px solid grey',
//         margin: 0,
//         padding: '8px 8px',
//     },
// }



const Todo = () => {
    const dispatch = useDispatch()
    const isSignIn = useSelector(selectIsSignIn)
    const user = useSelector(selectUser) 
    const todos = useSelector(selectorFirestoreTodo)
    console.log('Todo.jsx todos:',todos);
    const feilds = [
        {id:'01',label:"Title",name:'todo',type:'text',},
    ]
    // const [values, handleChange] = InputUser({
    //     todo:"",
    //     doen:false
    // })
    // const createTodo = (e) => {
    //     e.preventDefault()
    //     console.log('createTodo');
    //     console.log('todo : ', values.todo);
    //     const inputuValues = {
    //         uid:user.uid,
    //         todo:values.todo,
    //         done:false
    //     }
    //     dispatch(addTodo(inputuValues)) 
    // }
    // const handleDoneTodo = (todo) => {
    //     console.log('handleDoneTodo id: ' ,todo.id);
    //     dispatch(updateDoc(todo)) 
    //     dispatch(getTodo(user.uid))
    // }
    // const delTodo = () => {
    //     console.log('delTodo')
    // }
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
                {/* react form ------------------------------------------*/}
                {/* react datepicker ------------------------------------*/}
                <TodoAdd feilds={feilds}
                         dispatch={dispatch}
                         addTodo={addTodo}
                         uid={user.uid}
                />
                <TodoUnFinish todos={todos} 
                              dispatch={dispatch} 
                              updateDoc={updateDoc} 
                              getTodo={getTodo} 
                              uid={user.uid}
                              />
                <TodoFinish todos={todos}
                            dispatch={dispatch} 
                            updateDoc={updateDoc} 
                            getTodo={getTodo} 
                            uid={user.uid}
                />
                
                {/* <div>
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
                </div> */}
                
                {/* <div>
                    {(todos.length > 0 && todos !== undefined) && 
                        todos.map((todo,index)=>(
                            <div key={todo.id}>
                                    <span>{index  + 1}:</span>
                                    <span>{todo.todo}</span>
                                    <input
                                        checked={todo.done}
                                        name="todoCheckbox"
                                        onChange={() =>handleDoneTodo(todo)}
                                        type="checkbox"
                                        id="todoCheckbox"
                                        value="todoCheckValue"
                                    />
                            </div>
                        ))
                    }
                </div> */}
            </>}
        </div>
    )
}

export default Todo 
