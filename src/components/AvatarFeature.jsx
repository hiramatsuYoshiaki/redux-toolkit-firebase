import React from 'react'
import './AvatarFeature.scss'

const AvatarFeature = ({downloadURL,name,email}) => {
    return (
        <div>
            <div className="c-featureListContainer">
                <div className="c-featureListContainer_image">
                    <div className="c-avaterContainer"> 
                        <img src={downloadURL} alt="avater" className="c-avatar-image" />
                    </div>
                </div>
                <div className="page-FeatureListContainer_feature">
                    <div>{name}</div>
                    <div>{email}</div>
                </div>
            </div>
            {/* <img src={downloadURL} alt="avater" className="avatar-images"/> */}
        </div>
    )
}

export default AvatarFeature  
