import { getFirestore, doc, deleteDoc } from "firebase/firestore"

export const removeDocActivity = (activityData) => {
    return new Promise((resolve,reject)=>{
        console.log('removeDocActivity***********')
        const db = getFirestore()
        const id = activityData.id
        //削除
        const cityRef = doc(db, 'activities_bike', id )
        deleteDoc(cityRef)
        .then(res=>{
            console.log('deleteDocActivity firestore deleteDoc ok')
            console.log('deleteDocActivity firestore deleteDoc ok activitiy',activityData)
            resolve({data:activityData})
        })
        .catch(error=>{
            console.log('firestore deleteDoc error activity');
            console.log(error.code);
            console.log(error.message);
            activityData.code = error.code
            activityData.message = error.message
            reject({ 
                data: activityData
            })
        })
    }) 
}