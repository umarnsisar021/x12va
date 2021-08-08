import React from 'react'
import { X } from 'react-feather'

function EducationTile(props) {
    return (
        <div className="edu__comp">
            <Avatar
                color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])}
                name={row.skill_name} round={true} size={32}  textSizeRatio={2}
                />
            <img src={props.avatar} alt=""/>
            <div className="edu__header">
                <h5> {props.name} </h5>
                <p> {props.degree} </p>
            </div>
            <div style={{position:'absolute',right:0}}>
                <span className="icon-delete" onClick={props.onDelete} style={{paddingLeft:'5px',float:'right' , borderLeft: "1px solid #D3D3D3"}}><X size={14}/></span>
            </div>
        </div>
    )
}

export default EducationTile
