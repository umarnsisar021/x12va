import React from 'react'
import EverySectionHeader from '../../../EverySectionHeader'
import './Congratulations.css'

import CongAvatar from '../../../../Assets/Images/congratsIcon.png'

function Congratulations() {
    return (
        <div className="congo__wrapper">
            <EverySectionHeader
                title="Congratulations,"
            />
            <div className="cong__inner">
                <div className="cong__details">
                    <img src={CongAvatar} alt="" />
                    <h1>Congratulations,</h1>
                    <p>Your Task request has been generated wait for propsals.</p>
                </div>
            </div>            
        </div>
    )
}

export default Congratulations
