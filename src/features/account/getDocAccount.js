import { getFirestore,  doc,  getDoc, } from "firebase/firestore";

export const getDocAccount = (uid) => {
    console.log('getDocAccount new-- uid: ',uid)
    return new Promise((resolve) => {
        const db = getFirestore()

        const docRef = doc(db, "account", uid);
        getDoc(docRef)
        .then((docSnap)=>{
            console.log('docSnap: ' ,docSnap)
            console.log(docSnap.exists())
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                resolve({ 
                    data: docSnap.data()
                })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                resolve({ 
                    data: null
                })
            }  
        })
        .catch((error) => {
            console.log('firestore setDoc error---------------------- ');
            console.log(error);
            resolve({ 
                data: null
            })
           
        })


         
        
    })
    // .then(res=>{console.log('ok getDocAccount')})
    // .catch(error=>{console.log(error.message)})
}