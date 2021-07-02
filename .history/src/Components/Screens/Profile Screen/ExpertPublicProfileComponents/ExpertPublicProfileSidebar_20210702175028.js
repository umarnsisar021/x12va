import React from 'react'
import profileAvatar from '../../../../Assets/Images/Mask Group 5.png'
import './ExpertPublicProfileSidebar.css'

function ExpertPublicProfileSidebar() {
    return (
        <div className="profile__sidebar">
            <div className="profile__avatar">
                <img src={profileAvatar} />
            </div>
            <h3 className="pUser__name">Jonathon Smith</h3>
            <p className="user__bio">Finance Project Manager</p>
            <table>
                <tbody>
                    <tr>
                        <td className="left__col">Overall Score: </td>
                        <td className="right__col">78 (11 orders)</td>
                    </tr>
                    <tr>
                        <td className="left__col">Country:</td>
                        <td className="right__col">UK</td>
                    </tr>
                </tbody>
            </table>
            <button className="change__imgbtn">Check Individual Scores</button>
        </div>
    )
}

export default ExpertPublicProfileSidebar
