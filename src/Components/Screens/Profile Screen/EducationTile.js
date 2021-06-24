import React from 'react'

function EducationTile({ name, degree, avatar }) {
    return (
        <div className="edu__comp">
            <img src={avatar} alt=""/>
            <div className="edu__header">
                <h5> {name} </h5>
                <p> {degree} </p>
            </div>
        </div>
    )
}

export default EducationTile
