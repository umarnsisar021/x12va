import React from 'react'
import EverySectionHeader from '../../../EverySectionHeader'
import './Congratulations.css'

import CongAvatar from '../../../../Assets/Images/congratsIcon.png'
import { useParams } from 'react-router-dom'

function Congratulations() {
    let {task_id} = useParams();

    React.useEffect(()=>{
        useJwt.post("clients/get_client_tasks",{token:'c7c421dc53312247de824be6ad16225911ba21abb99f2a2dca0dc588264caef767c1ae75f03990eeb20cd09bbdc6c53fa0303af2c34b9588e39e0c36e4fac285'}).then((res)=>{
            if(res.data.records) {
                console.log(res)
                setExpertsCount(res.data.records)
            }
        })
    },[skill_id])
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
                    <h5 style={{color:'#056fc0'}}>Your Task ID #{task_id}</h5>
                </div>
            </div>            
        </div>
    )
}

export default Congratulations
