import {getFirestore, collection, doc, setDoc, serverTimestamp} from 'firebase/firestore'

export const setDocPuttering = (values) => {
    // console.log('setDocPuttering forestore setDoc---------')
    // console.log('setDocPuttering inputValues',values)
    return new Promise((resolve)=>{
       const db = getFirestore()
       const newTodoRef = doc(collection(db, "putterings"))
        // console.log('new document with a generated id')
        // console.log(newTodoRef.id)
        const addPuttering =  {
            id:newTodoRef.id,//ドキュメントIDをフィールドに追加
            puttering: values.data,
            done: values.done,
            uid:values.uid,
            create_at:serverTimestamp(),
            update_at:serverTimestamp(),
        }
        setDoc(newTodoRef, addPuttering )  
        .then((res)=>{
            // console.log('firestore setDoc success good**************')
              resolve({ 
                  data: addPuttering 
              })
          }
        )
        .catch((error) => {
            console.log('firestore setDoc error Putterings');
            console.log(error);
            resolve({ 
                data: null
            })
        })
    })
    // .then(res=>{console.log('ok setDocPuttering')})
    // .catch(error=>{console.log(error.message)})
}