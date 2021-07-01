import React from 'react'
import './ExpertTile.css'


function ExpertTile(props) {
    return (
        <div className="expert__grid">
            <div className="avatar__area">
                <img src={props.avatar}
                    className="avatar__expimage"
                />
                <span className="" ></span>
            </div>
            <h6 style={{position: 'absolute',bottom: '90px'}}>{props.tileTitle}</h6>
            <button>view details</button>

        </div>
    )
}

export default ExpertTile
