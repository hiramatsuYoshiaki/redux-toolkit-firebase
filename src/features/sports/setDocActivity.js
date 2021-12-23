import {getFirestore, collection, doc, setDoc, serverTimestamp} from 'firebase/firestore'

export const setDocActivity = (activityData) => {
    return new Promise((resolve,reject) => {
        console.log('setDocActivity')
        const db = getFirestore()
        const activities_bikeRef = doc(collection(db, 'activities_bike'))
        const activities_bike = {
            id:activities_bikeRef.id,
            owner:activityData.owner,
            title:activityData.title,
            date:activityData.date,
            couse:activityData.couse,
            start:activityData.start,
            gole:activityData.gole,
            distance:activityData.distance,
            couse_map:activityData.couse_map,
            couse_link:activityData.couse_link,
            coment:activityData.coment,
            public:activityData.public,
            participation:activityData.participation,
            done:false,
            garmin:activityData.garmin,
            relive:activityData.relive,
            strava:activityData.strava,
            file:null,
            create_at:serverTimestamp(),
            update_at:serverTimestamp(),
            starus:'idle', 
            code:'',
            message:'',
        } 
        setDoc(activities_bikeRef,activities_bike)
        .then(res=>{
            console.log('setDocActivity firestore setDoc ok')
            resolve({data:activities_bike})
        })
        .catch((error=>{
            console.log('firestore setDoc error activites_bike');
            console.log(error.code);
            console.log(error.message);
            activities_bike.code = error.code
            activities_bike.message = error.message
            reject({ 
                data: activities_bike
            })
        }))
    })
} 