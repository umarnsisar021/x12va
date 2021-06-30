import React from 'react'
import './EverySectionHeader.css'

function EverySectionHeader(props) {
    return (
        <div className="evSec__wrapper">
            <div className="evSec__header">
                <h2> {props.title} </h2>
                {props.childComponent}
            </div>
        </div>
    )
}

export default EverySectionHeader
