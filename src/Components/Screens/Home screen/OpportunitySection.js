import React from 'react'
import './OpportunitySection.css'

function OpportunitySection() {
    return (
        <div className="main__oppsec">
            <h1>A world of opportunities</h1>
            <p>Aenean gravida nibh sed erat aliquet, in rutrum eros pellentesque. Curabitur tincidunt faucibus est. </p>
            <div className="opp__sec">
            <div className="opp__grid">
                <div className="oppimg__area">
                    <div className="opptile__img">
                        <h2>01</h2>
                    </div>
                </div>
                <div className="opp__text">
                    <h3>Our vision</h3>
                    <p>
                    Aenean gravida nigbh lorem segd erat pellentesque 
                    curabitur ipsum tincidunt faucibus est praesent 
                    ullaorper aliquet ante lorem ipsum sit Mame. 
                    </p>
                </div>
            </div>

            <div className="opp__grid">
                <div className="oppimg__area">
                    <div className="opptile__img">
                        <h2>02</h2>
                    </div>
                </div>
                <div className="opp__text">
                    <h3>Mission</h3>
                    <p>
                    Aenean gravida nigbh lorem segd erat pellentesque
                    curabitur ipsum tincidunt faucibus est praesent 
                    ullaorper aliquet ante lorem ipsum sit Mame. 
                    </p>
                </div>
            </div>

            <div className="opp__grid">
                <div className="oppimg__area">
                    <div className="opptile__img">
                        <h2>03</h2>
                    </div>
                </div>
                <div className="opp__text">
                    <h3>Our Values</h3>
                    <p>
                    Aenean gravida nigbh lorem segd erat pellentesque
                    curabitur ipsum tincidunt faucibus est praesent 
                    ullaorper aliquet ante lorem ipsum sit Mame. 
                    </p>
                </div>
            </div>
            </div>
            <button>Place Order</button>
        </div>
    )
}

export default OpportunitySection
