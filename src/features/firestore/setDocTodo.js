import { getFirestore, collection, addDoc, doc, setDoc, Timestamp,serverTimestamp} from "firebase/firestore";
import moment from 'moment';
import { nanoid } from 'nanoid'

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
        // const newCityRef = doc(collection(db, "todos"));
        // setDoc(newCityRef,  
        //     {
        //         todo: values.todo,
        //         done: false,
        //         uid:values.uid
        //     }, 
        // )

        // Add a new document with a generated id.-------------------------------
        const addTodo =  {
            id:nanoid(),
            todo: values.todo,
            done: false,
            uid:values.uid,
            // update_at:timeStamp,
            // create_at:timeStamp,
        }
        addDoc(collection(db, "todos"), addTodo )
            
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