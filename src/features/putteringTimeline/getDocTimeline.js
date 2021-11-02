import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";

export const getDocTimeline = (uid) => {
    return new Promise((resolve)=> {
        console.log('getDocTimeline start')
        const posts = []
        const db = getFirestore()

        getDocs(collection(db, 'posts_putterings'))
        const posts_putterings = collection(db, 'posts_putterings')
        const q = query(posts_putterings, where('uid', '==', uid))
        getDocs(q)
        .then((querySnapshot)=>{
            console.log('firestore getDocs ok++++++++')
            querySnapshot.forEach(doc=>{
                const putteringDoc = doc.data()
                posts.push(putteringDoc) 
            })
            console.log('querySnapshot timelineDoc', posts)
            resolve({ 
                data: posts  
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
    // .then(res=>console.log('getDocTimeline'))
    // .catch(error=>{console.log(error.message)})
}