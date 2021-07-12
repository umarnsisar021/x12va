import React from 'react'
import './NotifyDropdown.css'

import userAvatar from '../Assets/Images/Mask Group 37.png'

function NotifyDropdown(props) {

    // const NotificationArray=[
    //     {
    //         img: 
    //     }
    // ]

    return (
        <div className="notifications__dd" style={{ display: props.dropShow ? "block" : "none" }}>
            <ul className="notifications__ul">
                <h5>Notifications</h5>
                <li className="success">
                    <div className="notify__icon">
                        <span className="icon">
                            <img src={userAvatar} alt="" />
                        </span>
                    </div>
                    <div className="notify__data">
                        <div className="notify__title">
                            lorem ipsum dolor sit.
                        </div>
                        <div className="notifySub__title">
                            lorem ipsum dolor sit Amet,
                            conecuref.
                        </div>
                    </div>
                    {/* <div className="notify__status">
                                            success
                                        </div> */}
                </li>
                <li className="success">
                    <div className="notify__icon">
                        <span className="icon">
                            <img src={userAvatar} alt="" />
                        </span>
                    </div>
                    <div className="notify__data">
                        <div className="notify__title">
                            lorem ipsum dolor sit.
                        </div>
                        <div className="notifySub__title">
                            lorem ipsum dolor sit Amet,
                            conecuref.
                        </div>
                    </div>
                    {/* <div className="notify__status">
                                            success
                                        </div> */}
                </li>
                <li className="failed">
                    <div className="notify__icon">
                        <span className="icon">
                            <img src={userAvatar} alt="" />
                        </span>
                    </div>
                    <div className="notify__data">
                        <div className="notify__title">
                            lorem ipsum dolor sit.
                        </div>
                        <div className="notifySub__title">
                            lorem ipsum dolor sit Amet,
                            conecuref.
                        </div>
                    </div>
                    {/* <div className="notify__status">
                                            failed
                                        </div> */}
                </li>
                <li className="failed">
                    <div className="notify__icon">
                        <span className="icon">
                            <img src={userAvatar} alt="" />
                        </span>
                    </div>
                    <div className="notify__data">
                        <div className="notify__title">
                            lorem ipsum dolor sit.
                        </div>
                        <div className="notifySub__title">
                            lorem ipsum dolor sit Amet,
                            conecuref.
                        </div>
                    </div>
                    {/* <div className="notify__status">
                                            fai                
                </div> */}
                </li>
                <li className="show__all">
                    <span>show all notifications</span>
                </li>
            </ul>
        </div>
    )
}

export default NotifyDropdown
