import React from 'react'
import ExpertGridRow from './ExpertGridRow'
import EverySectionHeader from '../../EverySectionHeader'


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
            setExpertData(res.data.records)
        })
    },[])
    if(Object.keys(expertData).length === 0){
        return false
    }
    else{
        return (
            <div className="wrapper">
                <EverySectionHeader
                    title="Meet our experts"
                />
                {
                    Object.keys(expertData).map((skill)=>{
                        if(Object.keys(skill.experts).length > 3 ){
                            return (
                                'hello'
                            )
                        }
                    })
                }
                <ExpertGridRow
                    title="Subject Specialists"
                    avatar1={exp5}
                    avatar2={exp6}
                    avatar3={exp7}
                    avatar4={exp8}
                    tileTitle1="Jonathon Smith"
                    tileTitle2="Kate Smith"
                    tileTitle3="John Doe"
                    tileTitle4="Katrina Morison"
                />
                <ExpertGridRow
                    title="Language Experts"
                    avatar1={exp5}
                    avatar2={exp6}
                    avatar3={exp7}
                    avatar4={exp8}
                    tileTitle1="Jonathon Smith"
                    tileTitle2="Kate Smith"
                    tileTitle3="John Doe"
                    tileTitle4="Katrina Morison"
                />
                <ExpertGridRow
                    title="Subject Specialists"
                    avatar1={exp5}
                    avatar2={exp6}
                    avatar3={exp7}
                    avatar4={exp8}
                    tileTitle1="Jonathon Smith"
                    tileTitle2="Kate Smith"
                    tileTitle3="John Doe"
                    tileTitle4="Katrina Morison"
                />
                <ExpertGridRow
                    title="Subject Specialists"
                    avatar1={exp5}
                    avatar2={exp6}
                    avatar3={exp7}
                    avatar4={exp8}
                    tileTitle1="Jonathon Smith"
                    tileTitle2="Kate Smith"
                    tileTitle3="John Doe"
                    tileTitle4="Katrina Morison"
                />
            </div>
        )
    }
    
}

export default Experts
