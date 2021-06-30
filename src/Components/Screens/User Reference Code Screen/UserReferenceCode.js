import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './UserReferenceCode.css'

function UserReferenceCode() {
    return (
        <div className="refc__wrapper">
            <EverySectionHeader
                title="User Reference Code"
            />
            <div className="refc__inner">
                <form action="">
                    <div className="rfcUser__details">
                        <div className="rfcInput__box">
                            <span>First Name</span>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="rfcInput__box">
                            <span>Middle Name</span>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="rfcInput__box">
                            <span>Last Name</span>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="rfcInput__box">
                            <span>Date of birth</span>
                            <input type="date" placeholder="John Doe" />
                        </div>
                        <div className="rfcInput__box">
                            <span>Gender</span>
                            <input list="gender" placeholder="Gender" />
                            <datalist id="gender">
                                <option value="male"/>
                                <option value="female"/>
                            </datalist>
                        </div>
                        <div className="rfcInput__box">
                            <span>Enter Email Address</span>
                            <input type="email" placeholder="info@gmail.com" />
                        </div>
                        <div className="rfcInput__box">
                            <span>Enter Reference Code</span>
                            <input type="text" placeholder="Male" />
                            <button>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserReferenceCode
