import React,{useState} from 'react'
import {InputForm} from './index'
// import {InputForm, TodoAdd, TodoUnFinish, TodoFinish} from '../../../components/index'
import {InputUser} from './InputUser'
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import './TodoAdd.scss'
const TodoAdd = ({feilds, uid, dispatch, addTodo}) => {
    const [isToggle, setIsToggle] = useState(false)
    const handleToggle = () => {
        setIsToggle(!isToggle)
    }
    const [values, handleChange] = InputUser({
        todo:"",
        doen:false
    })
    const createTodo = (e) => {
        e.preventDefault()
        console.log('createTodo');
        console.log('todo : ', values.todo); 　
        const inputuValues = {
            uid:uid,
            todo:values.todo,
            done:false
        }
        dispatch(addTodo(inputuValues))   
        
    }
    return (
        <div className="c-todo-add-Container">
           <div className="c-todo-add-toggle" onClick={handleToggle}>
               <div>アクティビティ 
               
                   {isToggle
                        ?<span>閉じる<MdExpandLess size={40} color={'#ccc'} /></span>
                        :<span>追加<MdExpandMore size={40} color={'#ccc'} /></span>
                    }
                </div>
           </div>
           {isToggle === true &&
            <div className="c-todo-add-input-area">
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
           } 
        </div>
    )
}

export default TodoAdd
