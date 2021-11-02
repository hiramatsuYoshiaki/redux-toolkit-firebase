import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";

export const getDocPuttering = (uid) => {
    // console.log('getDocPuttering firestore-----------')
    // console.log('uid: ',uid)
    return new Promise((resolve) => {
        const putterings = []
        const db = getFirestore()

        getDocs(collection(db, 'putterings'))
        const putteringRef = collection(db, 'putterings')
        const q = query(putteringRef, where('uid', '==', uid))
        getDocs(q)
        .then((querySnapshot)=>{
            // console.log('firestore getDocs ok++++++++')
            querySnapshot.forEach(doc=>{
                const putteringDoc = doc.data()
                putterings.push(putteringDoc) 
            })
            // console.log('querySnapshot putteringDoc', putterings)
            resolve({ 
                data: putterings  
            })
        })
        .catch((error) => {
            console.log('firestore setDoc error---------------------- ')
            console.log(error);
            resolve({ 
                data: []
            })
        })
    })
    // .then((res)=>{console.log('ok getDocPuttering')})
    // .catch(error=>{console.log(error.maeesge)})
}