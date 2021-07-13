import React from 'react'
import './ProfileManagement.css'
import EverySectionHeader from '../../EverySectionHeader'

import ProfileSidebar from './ProfileSidebar'
import ProfileDetails from './ProfileDetails'


function ProfileManagement() {
    return (
        <div className="profileMain__wrapper">
            <EverySectionHeader
                title="Profile Management"
                childComponent={()=>{
                    <div>
                        <span>Order</span>
                        <span></span>
                    </div>
                }}
            />
            <div className="p__Section">
                <ProfileSidebar/>
                <ProfileDetails/>
            </div>
        </div>
    )
}

export default ProfileManagement
