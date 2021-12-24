import { getStorage, ref, getDownloadURL,uploadBytes} from "firebase/storage";

export const uploadStrageImages = (file,folder,type) => {
    return new Promise((resolve,reject) => {
        console.log('uploadStrageImges-----------')
        let type = 'image/jpeg'
        let extension = 'jpeg'
        if(file[0].type=== 'image/png'){
            type= 'image/png'
            extension = 'png'
        } 
        if(file[0].type=== 'image/jpeg'){ 
            type= 'image/jpeg'
            extension = 'jpeg'
        }

        let blob = new Blob(file, { type: type })
        const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N=16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')
        // firebase strage v9
        const storage = getStorage()
        const storageRef = ref(storage,`${folder}/${fileName}.${extension}`)
        uploadBytes(storageRef,blob,type).then(snapshot=>{
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log('File available at----->', downloadURL);
                resolve({
                    data: {
                        downloadURL:downloadURL,
                        code:'',
                        msg:''
                    }
             })
            }).catch((error=>{
                console.log('storage getDownloadURL error');
                console.log(error);
                reject({
                    data: {
                        downloadURL:'',
                        code:error.code,
                        msg:error.message
                    }
                })
            }))
        }).catch((error)=>{
            console.log('storage uploadFile error');
            console.log(error);
            reject({
                data: {
                    downloadURL:'',
                    code:error.code,
                    msg:error.message
                }
            })
        })
    })
}