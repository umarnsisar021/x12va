import React from 'react'
import profileAvatar from '../../../../Assets/Images/Mask Group 5.png'


function ClientProfileSidebar() {
    return (
        <div className="profile__sidebar">
            <div className="profile__avatar">
                <img src={profileAvatar} />
            </div>
            <h3 className="pUser__name">Jonathon Smith</h3>
            <p className="user__bio">Finance Project Manager</p>
            <button className="change__imgbtn">Change image</button>
        </div>
    )
}

export default ClientProfileSidebar
