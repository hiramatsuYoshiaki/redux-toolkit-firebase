import {getFirestore, doc, setDoc, serverTimestamp} from 'firebase/firestore'
export const updateDocActivity = (activityData) => {
    return new Promise ((resolve,reject) => {
        console.log('updateDocActivity***********')
        const db = getFirestore()
        const id = activityData.id
        const activitiy = {
            id:activityData.id,
            owner:activityData.owner,
            title:activityData.title,
            date:activityData.date,
            couse:activityData.couse,
            start:activityData.start, 
            gole:activityData.gole,
            distance:activityData.distance,
            elevation:activityData.elevation, 
            couse_map:activityData.couse_map,
            couse_link:activityData.couse_link,
            segment:activityData.segment,
            coment:activityData.coment,
            public:activityData.public,
            participation:activityData.participation,
            done:activityData.done,

            doneDistance:'0',
            doneElevation:'0',
            doneAverage:'0',
            doneTimehh:'0',
            doneTimemm:'0',
            photos:[],
            video:[], 

            garmin:activityData.garmin,
            relive:activityData.relive,
            strava:activityData.strava,
            // file:null,
            create_at:activityData.create_at,
            update_at:serverTimestamp(),
            starus:'idle', 
            code:'',
            message:'',
        } 
        //上書き
        const bikeRef = doc(db, 'activities_bike', id )
        setDoc(bikeRef, activitiy)
        .then(res=>{
            console.log('setDocActivity firestore setDoc ok')
            console.log('setDocActivity firestore setDoc ok activitiy',activitiy)
            resolve({data:activitiy})
        })
        .catch(error=>{
            console.log('firestore setDoc error activity');
            console.log(error.code);
            console.log(error.message);
            activitiy.code = error.code
            activitiy.message = error.message
            reject({ 
                data: activitiy
            })
        })
    })
}