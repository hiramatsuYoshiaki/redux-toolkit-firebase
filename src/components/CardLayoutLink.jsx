import React from 'react'
import {Link} from 'react-router-dom'
import './CardLayoutLink.scss'
const CardLayoutLink = ({items}) => {
    return (
        <div className="c-cards">
            {items.map(item=>(
                <div key={item.id} className="c-cards__item">
                    <Link to={item.link}>
                        <div className="c-card__item-wraper">
                            <div>
                                <h5>{item.name}</h5>
                                {/* <h6>{item.guide}</h6> */}
                            </div>
                        </div> 
                    </Link>
                    
                </div>
            ))}
           
        </div>
    )
}

export default CardLayoutLink
