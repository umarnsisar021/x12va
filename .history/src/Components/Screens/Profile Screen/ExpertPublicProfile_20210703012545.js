import React from 'react'
import './ExpertPublicProfile.css'
import ExpertPublicProfileSidebar from './ExpertPublicProfileComponents/ExpertPublicProfileSidebar'
import EverySectionHeader from '../../EverySectionHeader'
import ExpertPublicProfileDetails from './ExpertPublicProfileComponents/ExpertPublicProfileDetails'
import useJwt from '../../Util'
import {useParams} from "react-router-dom";
function ExpertPublicProfile() {
    let { username } = useParams();
    const [expertData,setExpertData] = React.useState(null)
    React.useEffect(()=>{

        useJwt.post('get_experts_public_profile',{username:username}).then((res)=>{
           if(res.data){
               setExpertData(res.data);
           }
        })
    },[username])
    if(expertData){
        return (
            <div className="cpMain__wrapper">
                <EverySectionHeader
                    title="Expert Public Profile"
                />
                <div className="cp__section">
                    <ExpertPublicProfileSidebar data={expertData}/>
                    <ExpertPublicProfileDetails data={expertData}/>
                </div>
            </div>
        )
    }
    else{
        return false;
    }
}

export default ExpertPublicProfile