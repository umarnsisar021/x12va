import React from 'react'
import './ClientProfile.css'
import EverySectionHeader from '../../EverySectionHeader'
import ClientProfileSidebar from './Client profile components/ClientProfileSidebar'
import ClientProfileDetails from './Client profile components/ClientProfileDetails'
import HeaderButton from '../../HeaderButton'
import useJwt from '../../Util'
import { useParams } from 'react-router-dom'

function ClientProfile() {
    let profile_type = useParams
    const myComponent = <HeaderButton title="My Order"/>
    React.useEffect(()=>{
        
    })
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
