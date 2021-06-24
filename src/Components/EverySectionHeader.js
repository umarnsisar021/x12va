import React from 'react'
import './EverySectionHeader.css'

function EverySectionHeader({title}) {
    return (
        <div className="evSec__wrapper">
            <div className="evSec__header">
                <h2> {title} </h2>
            </div>
        </div>
    )
}

export default EverySectionHeader
