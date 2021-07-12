import React from 'react'
import './ProfileSidebar.css'

import profileAvatar from '../../../Assets/Images/Mask Group 5.png'

function ProfileSidebar() {
    return (
        <div className="profile__sidebar">
            <div className="profile__avatar">
                <img src={profileAvatar} />
            </div>
            <h3 className="pUser__name">Jonathon Smith</h3>
            <p className="user__bio">Finance Project Manager</p>
            <button className="change__imgbtn">Change image</button>
            <hr/>
            <div className="basic__details">
                <div className="basicLeft__sec">
                    <span>From</span>
                    <span>Member since</span>
                    <span>Score</span>
                    <span>Set Availability</span>
                </div>
                <div className="basicRight__sec">
                    <span>United States</span>
                    <span>Sep 2018</span>
                    <span>20%</span>    
                    <button>Set Availability</button>
                </div>
            </div> 
            <button>My Order</button>
            <button>Take Skills Test</button>
        </div>
    )
}

export default ProfileSidebar
