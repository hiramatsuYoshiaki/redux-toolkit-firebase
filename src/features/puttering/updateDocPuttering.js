import { getFirestore,doc, updateDoc } from "firebase/firestore";
export const updateDocPuttering = (puttering) => {
    return new Promise((resolve) =>{
        console.log('updateDocPuttering')
        const db = getFirestore()
        const putteringRef = doc(db, "putterings", puttering.id);
        updateDoc(putteringRef, {
           done: puttering.done === true ? false : true
          })
        .then((res)=>{
            console.log('firestore updateDoc success good**************')
            const updateTodo =  {
            id:puttering.id,//ドキュメントIDをフィールドに追加
            puttering: puttering.puttering,
            done: puttering.done === true ? false : true,
            uid:puttering.uid
            } 
            resolve({ 
                data: updateTodo 
            })
          })
        .catch((error) => {
            console.log('firestore updateDoc error ');
            console.log(error);
            const updateTodo =  {
                id:puttering.id,
                puttering: puttering.puttering,
                done: puttering.done ,
                uid:puttering.uid
                }
            resolve({ 
                data: updateTodo
            })
        })
    })
    // .then(res=>{console.log('ok updateDocPuttering')})
    // .catch(error=>{console.log(error.message)})
}
