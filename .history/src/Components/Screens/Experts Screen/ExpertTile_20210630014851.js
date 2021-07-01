import React from 'react'
import './ExpertTile.css'


function ExpertTile({ tileTitle, avatar }) {
    return (
        <div className="expert__grid">
            <div className="avatar__area">
                <img src={avatar}
                    className="avatar__expimage"
                />
            </div>
            <h5>{tileTitle}</h5>
            <button>view details</button>

        </div>
    )
}

export default ExpertTile
