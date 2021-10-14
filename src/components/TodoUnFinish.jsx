import React from 'react'
import {Link,useHistory,useParams} from 'react-router-dom'
import './TodoUnFinish.scss'
const TodoUnFinish = ({todos,dispatch,updateDoc,getTodo,uid}) => {
    const history = useHistory()
    const handleDoneTodo = (todo) => {
        console.log('handleDoneTodo id: ' ,todo.id);
        dispatch(updateDoc(todo)) 
        dispatch(getTodo(uid))
    }
    const handleClickDetail = (todo) =>{
        console.log('handleClickDetail');
        // history.push('/activities/detail' + todo.id)
        
        history.push({
            pathname: '/activities/detail/',
            state:{todo:todo}
        })
    }
    return (
        <div className="c-todo-unfinish-Container">
           
           <div className="c-todo-unfinish-list" >
               <div>予定 </div>
               {(todos.length > 0 && todos !== undefined) && 
                    todos.map(todo=>(
                        <div key={todo.id}>
                            {!todo.done 
                            ? <div>
                                <input 
                                    type="checkbox" 
                                    checked={todo.done}
                                    onChange={()=>handleDoneTodo(todo)}
                                />
                                <span onClick={()=>handleClickDetail(todo)}>{todo.todo}</span>
                            </div>
                            :null
                            }
                        </div>
                    ))
               }
           </div>
        </div>
    )
}

export default TodoUnFinish
