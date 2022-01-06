import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
const styles={
    map:{
        borderRadius: '16px',
        width:"300px",
        height:"200px",  
        border:"1px solid gery",  
    },
    icon: {
        marginRight: 8,
        height: 48,
        width: 48
    },
    bottomMargin:{
        marginBottom:"16px",
    },
    topMargin:{
        marginTop:"16px",
    }
}

const SelectPhotos = ({setFile,couseMap,setCouseMap}) => {
    const [selectPhoto,setSelectPhoto] = useState('')

    const preview =(previewFile) =>{
        const reader = new FileReader()
        reader.onload = (e) => {
        setSelectPhoto(e.target.result)
        }
        reader.readAsDataURL(previewFile)
    }

    const uploadImage = (event) => {
        //ストレージにアップロードするファイルをセット
        setFile(event.target.files)
        //現在の画像アドレスをクリアー
        setCouseMap(null)
        //変更画像のプレビュー
        preview(event.target.files[0])
    }
    return (
        <div>
            <div>
                コースマップ画像を選択してください
                <IconButton style={styles.icon}>
                    <label>
                        <AddPhotoAlternateIcon fontSize="large"/>
                        <input style={{display:'none'}}
                            type="file"
                            id="image"
                            accept={"image/jpeg,image/png"}
                            onChange={(event) => uploadImage(event)}
                        />
                    </label>
                </IconButton>
            </div>
            {couseMap 
                ? 
                <div className="page-avaterContainer"> 
                    <img src={couseMap} alt="couse map" style={styles.map} />
                </div>
                :null 
            }

            {selectPhoto !== '' 
                ? 
                <div className="page-avaterContainer"> 
                    <img src={selectPhoto} alt="couse map" style={styles.map} />
                </div>
                : null
            }
        </div>
    )
}

export default SelectPhotos
