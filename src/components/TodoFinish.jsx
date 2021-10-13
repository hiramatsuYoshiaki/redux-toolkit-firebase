import React,{useState,useEffect} from 'react'
import './TodoFinish.scss'
const TodoFinish = ({todos,dispatch,updateDoc,getTodo,uid}) => {
    const [isToggle, setIsToggle] = useState(false)
    const [count, setCount] = useState(0)
    const handleToggle = () => {
        setIsToggle(!isToggle)
    }
    const handleDoneTodo = (todo) => {
        console.log('handleDoneTodo id: ' ,todo.id);
        dispatch(updateDoc(todo)) 
        dispatch(getTodo(uid))
    }
    useEffect(()=>{
        setCount(0)
        todos.map(element => {
            if(element.done === true) {
                setCount(prevCount => prevCount + 1)
            }
        })
    },[todos,setCount])
    return (
        <div className="c-todo-finish-Container">
           <div className="c-todo-finish-toggle" onClick={handleToggle}>
               <div>実行済  <span>{count}件</span><span>{isToggle?'close':'open'}</span></div>
           </div>
           {isToggle === true &&
            <div className="c-todo-finish-list">
               {(todos.length > 0 && todos !== undefined) && 
                    todos.map(((todo,index)=>(
                        <div key={todo.id}>
                            {todo.done 
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
                )}
            </div>
           }
        </div>
    )
}

export default TodoFinish
