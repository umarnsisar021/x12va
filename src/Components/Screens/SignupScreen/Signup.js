import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './Signup.css'

function Signup() {
    return (
        <div className="refc__wrapper">
            <EverySectionHeader
                title="Create Account"
            />
            <div className="refc__inner">
                <form action="">
                    <div className="rfcUser__details">
                        <div className="rfcInput__box">
                            <span>Username</span>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="rfcInput__box">
                            <span>Enter Email Address</span>
                            <input type="email" placeholder="info@gmail.com" />
                        </div>
                        <div className="rfcInput__box">
                            <span>Enter Password</span>
                            <input type="password" placeholder="Password" />
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
                            <button>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
