import React from 'react'
import './ExpertPublicProfile.css'
import ExpertPublicProfileSidebar from './ExpertPublicProfileComponents/ExpertPublicProfileSidebar'
import EverySectionHeader from '../../EverySectionHeader'
import ExpertPublicProfileDetails from './ExpertPublicProfileComponents/ExpertPublicProfileDetails'

function ExpertPublicProfile() {
    return (
        <div className="cpMain__wrapper">
            <EverySectionHeader
                title="Expert Public Profile"
            />
            <div className="cp__section">
                <ExpertPublicProfileSidebar/>
                <ExpertPublicProfileDetails/>
            </div>
        </div>
    )
}

export default ExpertPublicProfile
