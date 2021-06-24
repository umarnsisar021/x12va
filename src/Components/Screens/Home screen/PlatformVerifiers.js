import React from 'react'
import './PlatformVerifiers.css'

import secImage from '../../../Assets/Images/Mask Group 39@2x.png'

function PlatformVerifiers() {
    return (
        <div className="pv__sec">
            <h1>Platform backed by Verifiers.</h1>
            <p>A unique experience found on our platform. No one can send you wrong files. Your work is checked by our verifiers and is scored. Work is delivered to you only if gets approved from our verifiers.</p>
            <div className="pv__details">
                <div className="pv__imgContainer">
                    {/* <img src={secImage} className="pv__img" /> */}
                </div>
                <div className="sec__details">
                    <h3>Concrete Selection of experts</h3>
                    <p>Working on this platform as expert isn’t easy. We have very rigorous, concrete and solid process before someone can make a profile and start working on your project.</p>
                    
                    <h3>Send Your Task to multiple experts with just one click</h3>
                    <p>We know how important your time is and we have done everything to save that. With just one click, you can send your task to selected top 15 experts and get your quotes with complete explanation of the task from highly professional and intellectual experts.</p>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default PlatformVerifiers
