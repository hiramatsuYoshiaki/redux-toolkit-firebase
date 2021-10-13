import { getFirestore, collection, addDoc, doc, setDoc, Timestamp,serverTimestamp} from "firebase/firestore";
import moment from 'moment';
import { nanoid } from 'nanoid' //idを自動採番


export const setDocTodo = (values) => {
    console.log('setDocTodo start--------')
    
    // const timeStamp = serverTimestamp()
    // console.log('serverTimestamp',serverTimestamp())
    // const ConvertTimestampJavaScript =  serverTimestamp().toDate()
    // console.log('ConvertTimestampJavaScript',ConvertTimestampJavaScript)
    // Timestamp.fromDate(new Date("December 10, 1815")),
    // const aaa = timeStamp.toDate().toString()
    // console.log(aaa)
    // const timestampDate = moment(timeStamp.toDate().toString()).format('YYYY/MM/DD HH:mm')
    
    // console.log(timeStamp)
    // console.log('timestampDate',timestampDate)
    // const date = timeStamp
    //             console.log('reference.data.create_at',date.toDate().toDateString())
    return new Promise((resolve) =>{
        
        const db = getFirestore();
        const timeStamp = serverTimestamp()
        // Add a new document with a generated id.--------------------------------
        const newTodoRef = doc(collection(db, "todos"));
        console.log('new document with a generated id')
        console.log(newTodoRef.id)
        const addTodo =  {
            id:newTodoRef.id,//ドキュメントIDをフィールドに追加
            todo: values.todo,
            done: false,
            uid:values.uid,
        }
        setDoc(newTodoRef, addTodo ) 

        // Add a new document with a generated id.-------------------------------
        // const addTodo =  {
        //     id:nanoid(),//idを自動採番
        //     todo: values.todo,
        //     done: false,
        //     uid:values.uid,
        // }
        // addDoc(collection(db, "todos"), addTodo )
            
        // const todoRef = doc(db, 'todos', values.uid);
        // setDoc( todoRef, 
        //         {
        //             todo: values.todo,
        //             done: false,
        //             uid:values.uid
        //         }, 
        //         { merge: true })
        // setDoc(doc(db, "todo", values.uid), {
        //    todo: values.todo,
        //     done: false,
        //   })

       



        .then((res)=>{
              console.log('firestore setDoc success good**************')
                resolve({ 
                    data: addTodo
                })
            }
          )
        .catch((error) => {
            console.log('firestore setDoc error ');
            console.log(error);
            resolve({ 
                data: {
                    todo: null,
                    done: null,
                    uid:null,
                    // update_at:null,
                    // create_at:null,
                }  
            })
        })
    })
}