import React from 'react'
import userAvatar from '../Assets/Images/Mask Group 37.png'

function InboxDropdown(props) {
    return (
        <div className="notifications__dd" style={{ display: props.dropInbox ? "block" : "none" }}>
            <ul className="notifications__ul">
                <h5>Messages</h5>
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
                    <span>show all messages</span>
                </li>
            </ul>
        </div>
    )
}

export default InboxDropdown
