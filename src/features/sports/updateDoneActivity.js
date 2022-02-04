import {getFirestore, doc, setDoc, serverTimestamp} from  'firebase/firestore'

export const updateDoneActivity = (activityData) => {
    return new Promise((resolve,reject)=>{
        console.log('updateDoneActivity')
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

            // file:null,

            doneDistance:activityData.doneDistance,
            doneElevation:activityData.doneElevation,
            doneAverage:activityData.doneAverage,
            // doneTimehh:activityData.doneTimehh,
            // doneTimemm:activityData.doneTimemm,
            doneRideTime:activityData.doneRideTime,
            garmin:activityData.garmin, 
            relive:activityData.relive,
            strava:activityData.strava, 

            photos:activityData.photos,
            video:activityData.video, 

            create_at:activityData.create_at,
            update_at:serverTimestamp(),
            starus:'idle', 
            code:'',
            message:'',
        } 
        const bikeRef = doc(db, 'activities_bike', id )
        setDoc(bikeRef, activitiy)
        .then(res=>{
            console.log('setDocActivity firestore setDoc ok')
            // console.log('setDocActivity firestore setDoc ok activitiy',activitiy)
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