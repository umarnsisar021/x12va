import React from 'react'
import profileAvatar from '../../../../Assets/Images/Mask Group 5.png'
import default_profile from '../../../../Assets/Images/default-profile.png'


function ClientProfileSidebar(props) {
    return (
        <div className="profile__sidebar">
            <div className="profile__avatar">
                <img src={ props.data.avatar ? props.data.avatar : default_profile} />
                <span className="online__status" ></span>
            </div>
            <h3 className="pUser__name">{`${props.data.first_name} ${props.data.last_name}`}</h3>
            <p className="user__bio">Finance Project Manager</p>
            <button className="change__imgbtn">Change image</button>
        </div>
    )
}

export default ClientProfileSidebar
