import React from 'react'
import ExpertGridRow from './ExpertGridRow'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from "../../GlobalLoader";


/// Redux 
import useJwt from '../../Util'; 
import { Divider } from '@material-ui/core';

function Experts() {
    const [expertData, setExpertData] = React.useState([]);
    React.useEffect(()=>{
        setTimeout(()=>{
            useJwt.post('get_skills_with_experts').then((res)=>{
                setExpertData(res.data.records);
            })
        },1000)
        
    },[])

    if(Object.keys(expertData).length === 0){
        return <GlobalLoader  text='' />
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
