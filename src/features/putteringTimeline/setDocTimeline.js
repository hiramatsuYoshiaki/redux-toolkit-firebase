import {getFirestore, collection,  setDoc, doc,  serverTimestamp} from 'firebase/firestore'

export const setDocTimeline = (post) => {
    return  new Promise((resolve) =>{
        console.log('setDocTimeline---->promise start1')
        const db = getFirestore()
        const newPostRef = doc(collection(db, 'posts_putterings'))
        console.log(post)
        const addPost = {
            id:newPostRef,
            uid:post.state.field.uid,
            title:post.state.field.puttering.title,
            course:post.state.field.puttering.course,
            datePicker:post.state.field.puttering.datePicker,
            user:post.state.field.user,
            create_at:serverTimestamp(),
            update_at:serverTimestamp(),
        }
        // console.log(addPost)
        setDoc(newPostRef,addPost)
        .then((res) =>{
            console.log('firestore setDoc success PutteringPots****')
            resolve({
                data:addPost
            }) 
        })
        .catch((error)=>{
            console.log('firestore setDoc error PutteringPots');
            console.log(error);
            resolve({ 
                data: null
            })
        })
    })
    // .then(res=>{console.log('ok setDocTimeline')})
    // .catch(error=>{console.log(error.message)})
}