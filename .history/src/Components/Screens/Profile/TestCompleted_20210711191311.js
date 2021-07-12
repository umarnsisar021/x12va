import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'

import {useQueryLocation} from '@utils'
import CongAvatar from '../../../Assets/Images/congratsIcon.png'
import { useHistory } from 'react-router-dom';

function TestCompleted() {
    let history = useHistory()
    let query =  useQueryLocation();
    if(query.data.show === true){

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
                    <p>You have successfully submitted your Test. We will update you about scoring.</p>
                </div>
            </div>            
        </div>
    )
}

export default TestCompleted
