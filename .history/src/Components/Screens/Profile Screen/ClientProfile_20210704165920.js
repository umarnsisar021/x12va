import React from 'react'
import './ClientProfile.css'
import EverySectionHeader from '../../EverySectionHeader'
import ClientProfileSidebar from './Client profile components/ClientProfileSidebar'
import ClientProfileDetails from './Client profile components/ClientProfileDetails'
import HeaderButton from '../../HeaderButton'
import useJwt from '../../Util'
import {useQuery} from '../../Util'
  

function ClientProfile() {
    let query = useQuery();
    let self = query.get("self");
    const myComponent = <HeaderButton title="My Order"/>
    React.useEffect(()=>{
        if(self === true)
    },[])
    return (
        <div className="cpMain__wrapper">
            <EverySectionHeader
                title="Client Profile"
                childComponent={myComponent}
            />
            <div className="cp__section">
                <ClientProfileSidebar/>
                <ClientProfileDetails/>
            </div>
        </div>
    )
}

export default ClientProfile
