import React from 'react'
import {Link} from 'react-router-dom'
import './CardLayoutLink.scss'
const CardLayoutLink = ({items}) => {
    return (
        <div className="c-cards">
            {items.map(item=>(
                <div key={item.id} className="c-cards__item">
                    <div className="c-card__item-wraper">
                        <Link to={item.link}>{item.name}</Link>
                    </div>
                    
                </div>
            ))}
           
        </div>
    )
}

export default CardLayoutLink
