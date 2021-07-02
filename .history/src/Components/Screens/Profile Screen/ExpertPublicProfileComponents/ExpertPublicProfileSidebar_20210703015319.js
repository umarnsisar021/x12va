import React from 'react'
import profileAvatar from '../../../../Assets/Images/Mask Group 5.png'
import './ExpertPublicProfileSidebar.css'

function ExpertPublicProfileSidebar(props) {
    return (
        <div className="profile__sidebar">
            <div className="profile__avatar">
                <img src={props.data.expert_detail.avatar} />
            </div>
            <h3 className="pUser__name">{`${props.data.expert_detail.first_name} ${props.data.expert_detail.last_name}`}</h3>
            <p className="user__bio">@</p>
            <table>
                <tbody>
                    <tr>
                        <td className="left__col">Overall Score: </td>
                        <td className="right__col">78 (11 orders)</td>
                    </tr>
                    <tr>
                        <td className="left__col">Country:</td>
                        <td className="right__col">{props.data.expert_detail.country}</td>
                    </tr>
                </tbody>
            </table>
            <button className="change__imgbtn">Check Individual Scores</button>
        </div>
    )
}

export default ExpertPublicProfileSidebar
