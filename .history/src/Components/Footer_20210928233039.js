import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>
                © 2021 .x12VA. All rights reserved.
                <br/>
                Privacy&emsp;l&emsp;Terms and Condition&emsp;l&emsp;<NavLink to="/about">About Us</NavLink>
            </p>
        </div>
    )
}

export default Footer
