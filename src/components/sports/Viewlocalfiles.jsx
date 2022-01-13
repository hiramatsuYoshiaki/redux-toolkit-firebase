import React from 'react'
import IconButton from '@mui/material/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const styles={
    map:{
        borderRadius: '16px',
        width:"300px",
        height:"300px",  
        border:"1px solid gery", 
        // objectFit: 'cover', 
        objectFit: 'scale-down', 
    },
    icon: {
        marginRight: 8,
        height: 48,
        width: 48
    }
}
const Viewlocalfiles = ({photos,setPhotos}) => {

    const fileleader = (event) =>{
        console.log('fileleader*-*-*-*-*-*-*-*-*-*');
        const files = Array.from(event.target.files)
        files.forEach(file=>{
            console.log(file.type)
            // 画像ファイルを base64 文字列に変換します
            const reader = new FileReader()
            reader.onload = (e) => {
                setPhotos(prevPhotos =>[...prevPhotos,e.target.result])
            }
            reader.readAsDataURL(file)
        })

    }
    const uploadImage = async (event) => {
        fileleader(event)
    }

    return (
        <>
           <div>
                写真を選択してください
                <IconButton style={styles.icon}>
                    <label>
                        <AddPhotoAlternateIcon fontSize="large"/>
                        <input style={{display:'none'}}
                            type="file"
                            id="image"
                            accept={"image/jpeg,image/png"}
                            multiple
                            onChange={(event) => uploadImage(event)}
                        />
                    </label>
                </IconButton>
            </div>
            {photos.length > 0
                ? 
                photos.map((Photo,index)=>(
                    <div className="page-avaterContainer" key={index}> 
                        <img src={Photo} alt="couse map" style={styles.map} />
                    </div>
                ))
                : null
            } 
        </>
    )
}

export default Viewlocalfiles
