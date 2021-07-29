import React from 'react'
import EverySectionHeader from '../../../EverySectionHeader'

import {useQueryLocation} from '@utils'
import CongAvatar from '../../../../Assets/Images/congratsIcon.png'
import { Link, useHistory } from 'react-router-dom';

function ClientOrderPlaced() {
    let history = useHistory()
    let query =  useQueryLocation();
    if(query.show){

    }
    else{
        history.push('/')
    }
    return (
        <div className="wrapper__main">
            <EverySectionHeader
                title="Congratulations,"
            />
            <div className="cong__inner">
                <div className="cong__details">
                    <img src={CongAvatar} alt="" />
                    <h1>Congratulations,</h1>
                    <p>You have successfully placed Your order. We will keep on updating You about your work.</p>
                    <Link className="btn-theme-default">
                        Place another Order
                    </Link>
                </div>
            </div>            
        </div>
    )
}

export default ClientOrderPlaced
