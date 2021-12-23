import { getFirestore, collection, getDocs, query, where} from  'firebase/firestore'

export const getDocActivities = (profile) => {
    return new Promise((resolve, reject) => {
        console.log('getDocActivities ===> firestore getdoc')
        const activities = []
        const db = getFirestore()

        getDocs(collection(db,'activities_bike'))
        const activitiesRef = collection(db,'activities_bike')
        const q= query(activitiesRef,where('owner.uid','==',profile.uid))
        getDocs(q)
        .then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                const activitiesDoc = doc.data()
                activities.push(activitiesDoc) 
            })
            resolve({ 
                data: activities  
            })
        })
        .catch((error) => {
            console.log('firestore setDoc error')
            console.log(error.code);
            console.log(error.message);
            reject({ 
                data: []
            })
        })
    })
}