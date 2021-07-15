import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './Congratulations.css'
import { useHistory, useLocation } from 'react-router-dom';
import CongAvatar from '../../../Assets/Images/congratsIcon.png'

function ExpertProposalSubmitCongratulations() {
    const { show} = useLocation();
    const history = useHistory();
    if(show){

    }
    else{
        history.push('/')
    }
    return (
        <div className="congo__wrapper">
            <EverySectionHeader
                title="Congratulations,"
            />
            <div className="cong__inner">
                <div className="cong__details">
                    <img src={CongAvatar} alt="" />
                    <h1>Congratulations,</h1>
                    <p>Your proposal has been sent. You will be paid if your proposal gets positive response from client.</p>
                </div>
            </div>            
        </div>
    )
}

export default ExpertProposalSubmitCongratulations