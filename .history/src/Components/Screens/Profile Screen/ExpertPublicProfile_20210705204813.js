import React from 'react'

import ExpertPublicProfileSidebar from './ExpertPublicProfileComponents/ExpertPublicProfileSidebar'
import EverySectionHeader from '../../EverySectionHeader'
import ExpertPublicProfileDetails from './ExpertPublicProfileComponents/ExpertPublicProfileDetails'
import useJwt from '../../Util'
import {useParams} from "react-router-dom";
import GlobalLoader from '../../GlobalLoader'
function ExpertPublicProfile() {
    let { username } = useParams();
    const [expertData,setExpertData] = React.useState([])
    React.useEffect(()=>{
        setTimeout(()=>{
            useJwt.post('get_experts_public_profile',{username:username}).then((res)=>{
                if(res.data){
                    setExpertData(res.data);
                }
             })
        },1000)
      
    },[username])
    if(Object.keys(expertData).length > 0 ){
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
        return <GlobalLoader />;
    }
}

export default ExpertPublicProfile
