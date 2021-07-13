import React from 'react'
import './ProfileManagement.css'
import EverySectionHeader from '../../EverySectionHeader'

import ProfileSidebar from './ProfileSidebar'
import ProfileDetails from './ProfileDetails'
import { Link } from 'react-router-dom'


function ProfileManagement() {
    return (
        <div className="profileMain__wrapper">
            <EverySectionHeader
                title="Profile Management"
                childComponent={
                    <div className="HeaderLeftMenu" style={{paddingRight:'110px'}}>
                        <span><button className="btn-theme-default btn-sm"><Link to="/expert/tasks/new">New Tasks</Link></button></span>
                    </div>
                }
            />
            <div className="p__Section">
                <ProfileSidebar/>
                <ProfileDetails/>
            </div>
        </div>
    )
}

export default ProfileManagement
