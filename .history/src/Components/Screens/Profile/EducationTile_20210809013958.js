import React from 'react'
import { X } from 'react-feather'

function EducationTile({ name, degree, avatar }) {
    return (
        <div className="edu__comp">
            <img src={avatar} alt=""/>
            <div className="edu__header">
                <h5> {name} </h5>
                <p> {degree} </p>
            </div>
            <div>
                <span className="icon-delete" onClick={props.onDelete} style={{paddingLeft:'5px',float:'right' , borderLeft: "1px solid #D3D3D3"}}><X size={14}/></span>
            </div>
        </div>
    )
}

export default EducationTile
