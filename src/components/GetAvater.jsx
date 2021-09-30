import React,{useState} from 'react'
import { getStorage, ref, getDownloadURL} from "firebase/storage";
const styles= {
    avater:{
        borderRadius: '50%',
        width:"100%",
        height:"100%", 
    },
}

const GetAvater = ({url}) => {
    const [avater,setAvater] = useState(null)
    const storage = getStorage();
    const reference = ref(storage, url);
        getDownloadURL(reference)
        .then((url) => {
            console.log('photoURL',url);
            setAvater(url)
        })
        .catch((error) => {
            console.log('storage getDownloadURL error');
            console.log(error);
        })
    return (
        <>
            <img src={avater} alt="avater" style={styles.avater} />
        </>
    )
}

export default GetAvater
