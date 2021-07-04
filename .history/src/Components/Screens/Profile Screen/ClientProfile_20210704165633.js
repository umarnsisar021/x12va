import React from 'react'
import './ClientProfile.css'
import EverySectionHeader from '../../EverySectionHeader'
import ClientProfileSidebar from './Client profile components/ClientProfileSidebar'
import ClientProfileDetails from './Client profile components/ClientProfileDetails'
import HeaderButton from '../../HeaderButton'
import useJwt from '../../Util'
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
  

function ClientProfile() {
    let query = useQuery();
    const myComponent = <HeaderButton title="My Order"/>
    React.useEffect(()=>{
        console.log(query.get("self"))
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
