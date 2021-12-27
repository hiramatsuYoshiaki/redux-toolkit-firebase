import { getFirestore,doc, updateDoc } from "firebase/firestore";

export const updatePublish = (updateActivity) => {
    return new Promise((resolve, reject)=> {

        
        console.log('updatePublish ---')
        console.log('public:',updateActivity)

        const db = getFirestore()
        const putteringRef = doc(db, "activities_bike", updateActivity.id);
        updateDoc(putteringRef, {
          public: updateActivity.public === 'public' ? 'private' : 'public'
          })
        .then((res)=>{
            console.log('collection acticities_bik update ======== OK')
            updateActivity.public = updateActivity.id === 'public' ? 'private' : 'public'
            resolve({ 
                data: updateActivity
            })
        })
        .catch((error) => {
            console.log('collection acticities_bik updat ======== error ');
            console.log(error.code);
            console.log(error.message);
            // const error =  {
                // id:puttering.id,
                // puttering: puttering.puttering,
                // done: puttering.done ,
                // uid:puttering.uid
                // }
            reject({ 
                // data: [{code:error.code, msg:error.message}]
                data: [{code:error.code, msg:error.message}]
            })
        })
    })
}