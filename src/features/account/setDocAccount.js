import {getFirestore,  doc, setDoc, serverTimestamp} from 'firebase/firestore'

export const setDocAccount = (user) => {
    console.log('setDocAccount-------->>>>>start')
    console.log(user)
    return new Promise((resolve,reject)=>{
        const db = getFirestore()
        const person = {
            uid: user.uid,
            username:user.username,
            email:user.email,
            photoURL:user.photoURL,
            create_at:serverTimestamp(),
            update_at:serverTimestamp(),
        }
        // setDoc(doc(db, "account",user.uid), person)
        const accountRef = doc(db, 'account', user.uid);
        setDoc(accountRef, person, { merge: true })
        
        .then((res)=>{
            console.log('setDoc ok')
            resolve({ 
                data: 'ユーザー情報　setDocAccount　ok' 
            })
        })
        .catch((error) => {
            console.log('firestore setDoc account error ');
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage) 
            reject({ 
                data: {
                    errorCode: error.code,
                    errorMessage: error.message,
                }
            })
        })

    //     const person = {
    //             uid: user.uid,
    //             username:user.displayName,
    //             email:user.email,
    //             photoURL:user.photoURL,
    //             create_at:serverTimestamp(),
    //             update_at:serverTimestamp(),
    //     }
    //     const accountRef = doc(db, 'account', {
    //         uid: user.uid,
    //         username:user.displayName,
    //         email:user.email,
    //         photoURL:user.photoURL,
    //         create_at:serverTimestamp(),
    //         update_at:serverTimestamp(),
    // });
    //     setDoc(accountRef, person, { merge: true })
    //     .then((res)=>{
    //         resolve({ 
    //             data: person 
    //         })
    //     })
    //     .catch((error) => {
    //         console.log('firestore setDoc account error ');
    //         console.log(error);
    //         resolve({ 
    //             data: null
    //         })
    //     })

        // const newAccountRef = doc(collection(db, "putterings"));
        // const newTodoRef = doc(collection(db, "account"));
        // console.log('newTodoRef',newTodoRef)
        // const person = {
        //         id:newTodoRef.id,
        //         uid: user.uid,
        //         username:user.displayName,
        //         email:user.email,
        //         photoURL:user.photoURL,
        //         create_at:serverTimestamp(),
        //         update_at:serverTimestamp(),
        // }
        // console.log('person',person)

        // setDoc(newTodoRef, person) 
        // .then((res)=>{
        //     console.log('firestore setDoc success good**************')
        //       resolve({ 
        //           data: person 
        //       })
        //   }
        // )
        // .catch((error) => {
        //     console.log('firestore setDoc error ');
        //     console.log(error);
        //     resolve({ 
        //         data: null
        //     })
        // })

    })
    // .then(res=>{console.log('ok setDocAccount')})
    // .catch(error=>{console.log(error.message)})
}