import { getFirestore,doc, deleteDoc} from "firebase/firestore";
export const removeDocPuttering = (puttering) => {
    return new Promise((resolve) =>{
        console.log('removeDocPuttering')
        const db = getFirestore()
        // const cityRef = doc(db, 'cities', 'BJ');
        // Remove the 'capital' field from the document
        // await updateDoc(cityRef, {
        //     capital: deleteField()
        // });
        // const putteringRef = doc(db, "putterings", puttering.id);
        deleteDoc(doc(db, "putterings", puttering.id))
        // updateDoc(putteringRef, {
        //    done: puttering.done === true ? false : true
        //   })
        .then((res)=>{
            console.log('firestore removeDoc success good**************')
            // const updateTodo =  {
            // id:puttering.id,//ドキュメントIDをフィールドに追加
            // puttering: puttering.puttering,
            // done: puttering.done === true ? false : true,
            // uid:puttering.uid
            // } 
            resolve({ 
                data: null
            })
          })
        .catch((error) => {
            console.log('firestore removeDoc error ');
            console.log(error);
            // const updateTodo =  {
            //     id:puttering.id,
            //     puttering: puttering.puttering,
            //     done: puttering.done ,
            //     uid:puttering.uid
            //     }
            resolve({ 
                data: null
            })
        })
    })
}
