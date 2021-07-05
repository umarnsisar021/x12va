import React from 'react'
import ExpertGridRow from './ExpertGridRow'
import EverySectionHeader from '../../EverySectionHeader'
import Loader from "react-loader-spinner";

import exp1 from '../../../Assets/Images/Mask Group 5.png'
import exp2 from '../../../Assets/Images/Mask Group 6.png'
import exp3 from '../../../Assets/Images/Mask Group 7.png'
import exp4 from '../../../Assets/Images/Mask Group 8.png'
import exp5 from '../../../Assets/Images/Group 12.png'
import exp6 from '../../../Assets/Images/Mask Group 11.png'
import exp7 from '../../../Assets/Images/Mask Group 9.png'
import exp8 from '../../../Assets/Images/Mask Group 10.png'

/// Redux 
import useJwt from '../../Util'; 

function Experts() {
    const [expertData, setExpertData] = React.useState([]);
    React.useEffect(()=>{
        useJwt.post('get_skills_with_experts').then((res)=>{
            setExpertData(res.data.records);
        })
    },[])

    if(Object.keys(expertData).length === 0){
        return  <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
    }
    else{
        return (
            <div className="wrapper">
                <EverySectionHeader
                    title="Meet our experts"
                />
                {
                    Object.values(expertData).map((skill)=>{
                        if(Object.keys(skill.experts).length > 3 ){
                            return (
                                <ExpertGridRow
                                    title={skill.name}
                                    data={skill.experts}
                                />
                            )
                        }
                        else {
                            return false
                        }
                    })
                }
                
               
            </div>
        )
    }
    
}

export default Experts
