import React from 'react'
import './AboutBanner.css'

function AboutBanner() {
    return (
        <div className="abtBanner">
            <div className="abt__content">
                <h1 className="company__title">About the Company</h1>
                <p className="company__desc">
                    A place where nothing is wrong. 
                    Specifically designed for you. 
                    Where work is verified by many 
                    specialists around the globe.
                </p>
                <p className="company__slogan">
                    A rigorous, concrete and solid 
                    platform.
                </p>
            </div>
        </div>
    )
}

export default AboutBanner
