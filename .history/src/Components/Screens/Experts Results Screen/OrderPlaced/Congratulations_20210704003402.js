import React from 'react'
import EverySectionHeader from '../../../EverySectionHeader'
import './Congratulations.css'

import CongAvatar from '../../../../Assets/Images/congratsIcon.png'

function Congratulations() {
    let task_id = 
    return (
        <div className="congo__wrapper">
            <EverySectionHeader
                title="Congratulations,"
            />
            <div className="cong__inner">
                <div className="cong__details">
                    <img src={CongAvatar} alt="" />
                    <h1>Congratulations,</h1>
                    <p>Your Task request has been generated. Please wait for exports propsals.</p>
                </div>
            </div>            
        </div>
    )
}

export default Congratulations
