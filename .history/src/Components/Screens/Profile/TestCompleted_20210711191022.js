import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'


import CongAvatar from '../../../Assets/Images/congratsIcon.png'

function TestCompleted() {
    let query =  useQueryLocation();
    if(query.data.true)
    return (
        <div className="congo__wrapper">
            <EverySectionHeader
                title="Congratulations,"
            />
            <div className="cong__inner">
                <div className="cong__details">
                    <img src={CongAvatar} alt="" />
                    <h1>Congratulations,</h1>
                    <p>You have successfully submitted your Test. We will update you about scoring.</p>
                </div>
            </div>            
        </div>
    )
}

export default TestCompleted
