import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>
                © 2021 .Z12VA. All rights reserved.
                <br/>
                Privacy  l  Terms and Condition  
                l  <NavLink to="/about">About Us</NavLink>
            </p>
        </div>
    )
}

export default Footer
