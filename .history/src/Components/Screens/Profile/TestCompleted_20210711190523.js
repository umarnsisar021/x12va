import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'


import CongAvatar from '../../../Assets/Images/congratsIcon.png'

function TestCompleted() {
    return (
        <div className="congo__wrapper">
            <EverySectionHeader
                title="Congratulations,"
            />
            <div className="cong__inner">
                <div className="cong__details">
                    <img src={CongAvatar} alt="" />
                    <h1>Congratulations,</h1>
                    <p>You have successfully submitted your Test. We will keep on updating You about scoring.</p>
                </div>
            </div>            
        </div>
    )
}

export default TestCompleted
