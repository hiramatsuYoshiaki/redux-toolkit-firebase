import React from 'react'
import './TodoUnFinish.scss'
const TodoUnFinish = 
({todos,dispatch,updateDoc,getTodo,uid}) => {
    const handleDoneTodo = (todo) => {
        console.log('handleDoneTodo id: ' ,todo.id);
        dispatch(updateDoc(todo)) 
        dispatch(getTodo(uid))
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
                                <span>{todo.todo}</span>
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
