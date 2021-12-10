export const updatePhotoURL = (URL) =>{
    return new Promise((resolve,reject)=>{
        console.log('updatePhotoURL*******************************')
        resolve({
            data:{photoURL:URL}
        })

    })
}