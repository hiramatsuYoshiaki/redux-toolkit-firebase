import { getFirestore,doc, updateDoc } from "firebase/firestore";
export const updateDocTodo = (todo) => {
    return new Promise((resolve) =>{
        console.log('updateDocTodo')
        const db = getFirestore()
        const todoRef = doc(db, "todos", todo.id);
        updateDoc(todoRef, {
           done: todo.done === true ? false : true
          })
        .then((res)=>{
            console.log('firestore updateDoc success good**************')
            const updateTodo =  {
            id:todo.id,//ドキュメントIDをフィールドに追加
            todo: todo.todo,
            done: todo.done === true ? false : true,
            uid:todo.uid
            }
            resolve({ 
                data: updateTodo
            })
          })
        .catch((error) => {
            console.log('firestore updateDoc error ');
            console.log(error);
            const updateTodo =  {
                id:todo.id,
                todo: todo.todo,
                done: todo.done ,
                uid:todo.uid
                }
            resolve({ 
                data: updateTodo
            })
        })
    })
}
