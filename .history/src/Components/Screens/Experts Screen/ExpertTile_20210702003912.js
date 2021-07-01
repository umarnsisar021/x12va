import React from 'react'
import './ExpertTile.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ExpertTile(props) {
    return (
        <div className="expert__grid">
            <div className="avatar__area">
                <img src={props.avatar}
                    className="avatar__expimage"
                />
                <span className="status__online" >
                    <FiberManualRecordIcon style={{color:'orange',fontSize: '12px'}} />
                </span>
            </div>
            <h6 style={{position: 'absolute',bottom: '90px'}}>{props.tileTitle}</h6>
            <button>view details</button>

        </div>
    )
}

export default ExpertTile
