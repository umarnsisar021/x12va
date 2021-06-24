import React from 'react'
import './Category.css'

function Category({title,img}) {
    return (
        <div className="category__container">
            <img src={img}  
                className="category__img"
            />
            <p> {title} </p>
        </div>
    )
}

export default Category
