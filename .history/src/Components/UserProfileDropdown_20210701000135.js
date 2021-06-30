import React from 'react'
import './UserProfileDropdown.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';

function UserProfileDropdown(props) {
    return (
        <div className="profile__dd" style={{ display: props.dropUser ? "block" : "none" }}>
            <ul className="profile__ul">
                <li className="profile__li">
                    <a href="">
                        <DashboardIcon />
                        Dashboard
                    </a>
                </li>
                <li className="profile__li">
                    <a href="">
                        <ExitToAppIcon />
                        Sign Out
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default UserProfileDropdown
