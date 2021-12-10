import { getStorage, ref, getDownloadURL,uploadBytes} from "firebase/storage";
// import { setDounloadURL } from "./storageSlice";
export const uploadStrageAvater = (file) => {
    return new Promise((resolve,reject) =>{
        console.log('uplaodStrageAvater-------')
        // console.log(file)

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
        const storageRef = ref(storage,`images/${fileName}.${extension}`)
        uploadBytes(storageRef,blob,type).then(snapshot=>{
            // console.log('Uploaded a blob or file!');
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log('File available at----->', downloadURL);
                
                resolve({
                    data: {
                        downloadURL:downloadURL,
                    }
             })
            }).catch((error=>{
                console.log('storage getDownloadURL error');
                console.log(error);
                reject({
                    data: {
                        downloadURL:'',
                    }
                })
            }))
        }).catch((error)=>{
            console.log('storage uploadFile error');
            console.log(error);
            reject({
                data: {
                    downloadURL:'',
                }
            })
        })




        // const uploadTask = uploadBytes(storageRef, uploadFile.file,'image/png');
        // const reference = ref(storage, url);
        //firebase storageのimageフォルダーにアップロードする
        // const uploadRef = storageRef.child(fileName);
        // const uploadTask = uploadRef.put(blob);
        //firebase storegeの画像ファイルのURLを取得する
        // uploadTask.then(() => {
        //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        //         const newImage = { id: uploadFile.fileName, path: downloadURL, description: '', instagram:'', twitter:'' };
        //         console.log(newImage)
        //         resolve({
        //             data:{newImage:newImage}
        //         })

        //         // if (props.Multiple) {
        //         //     props.setImages((prevState => [...prevState, newImage])) //追加する場合の書き方
               
        //         // } else {
                    
        //         //     props.setImages([newImage])
        //         // }
        //     }); 
        // }).catch((e) => {
        //     console.log(e)
        // });



    })
}