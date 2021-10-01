import { getStorage, ref, getDownloadURL} from "firebase/storage";
export const getStorageAvator = (url) => {
    return new Promise((resolve) =>{
        // console.log('getStorageAvator----------')
        // console.log(url)
        const storage = getStorage();
        const reference = ref(storage, url);
        getDownloadURL(reference)
        .then((url) => {
            // console.log('photoURL',url);
            // setAvater(url)
            resolve({ 
                data: {
                    downloadURL:url,
                } 
            })
        })
        .catch((error) => {
            console.log('storage getDownloadURL error');
            console.log(error);
            resolve({ 
                data: {
                    downloadURL:"",
                } 
            })
        })
    })
}