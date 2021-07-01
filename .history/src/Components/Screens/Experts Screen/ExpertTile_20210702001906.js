import React from 'react'
import './ExpertTile.css'


function ExpertTile(props) {
    return (
        <div className="expert__grid">
            <div className="avatar__area">
                <img src={props.avatar}
                    className="avatar__expimage"
                />
            </div>
            <h5>{props.tileTitle}</h5>
            <button>view details</button>

        </div>
    )
}

export default ExpertTile
