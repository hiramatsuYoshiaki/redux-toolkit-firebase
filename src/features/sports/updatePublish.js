import { getFirestore,doc, updateDoc } from "firebase/firestore";

export const updatePublish = (updateActivity) => {
    return new Promise((resolve, reject)=> {

        console.log('updatePublish ---')
        console.log('public:',updateActivity)

        const db = getFirestore()
        const Ref = doc(db, "activities_bike", updateActivity.id);
        updateDoc(Ref, {
          public: updateActivity.public === 'public' ? 'private' : 'public'
          })
        .then((res)=>{
            console.log('collection acticities_bik update ======== OK')
            resolve({ 
                data: updateActivity
            })
        })
        .catch( error => {
            console.log('collection acticities_bik updat ======== error ');
            console.log(error.code);
            console.log(error.message);
            reject({ 
                data: [{code:error.code, msg:error.message}]
            })
        })
    })

}