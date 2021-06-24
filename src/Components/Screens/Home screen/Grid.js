import React from 'react'
import './Grid.css'



function Grid({tile__img, title}) {
    return (
        <div className="grid__tiles">
            <div className="img__area">
                    <img src={tile__img} className="tile__img"/>
            </div>
            <div className="img__text">
                <p> {title} </p>
            </div>
        </div>
    )
}

export default Grid
