import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";

export const getDocTodo = (uid) => {
    console.log('getDocTodo uid: ',uid)
    return new Promise((resolve) =>{
        const todos = []
        const db = getFirestore()
        //all
        getDocs(collection(db, 'todos'))
        // uid と一致する
        const todosRef = collection(db, 'todos')
        const q = query(todosRef, where('uid','==', uid)) 
        getDocs(q)
        .then((querySnapshot)=>{
            console.log('firestore getDocs ok------------------------')
            querySnapshot.forEach(doc=>{
                const todosDoc = doc.data()
                todos.push(todosDoc)
            })
            console.log('querySnapshot todos',todos)
            resolve({ 
                data: todos
            })
          }
        )
      .catch((error) => {
          console.log('firestore setDoc error---------------------- ');
          console.log(error);
          resolve({ 
              data: []
          })
      })
    })
    
    

}