import { getStorage, ref, getDownloadURL} from "firebase/storage";
export const getStorageAvator = (url) => {
    return new Promise((resolve) =>{
        const storage = getStorage();
        const reference = ref(storage, url);
        getDownloadURL(reference)
        .then((url) => {
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