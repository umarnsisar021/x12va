import React from 'react'
import './ExpertTile.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ExpertTile(props) {
    return (
        <div className="expert__grid">
            <div className="avatar__area">
                <div style={{position:'relative'}}>
                    <img src={props.avatar}
                        className="avatar__expimage"
                    />
                    <span className="status__online" >
                        <span></span>
                    </span>
                </div>
            </div>
            <h6 style={{position: 'absolute',bottom: '90px'}}>{props.tileTitle}</h6>
            <button onClick={{}}>view details</button>

        </div>
    )
}

export default ExpertTile
