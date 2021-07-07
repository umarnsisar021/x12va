import React from 'react'
import './HireExpertTab.css'

function HireExpertTab() {
    return (
        <div className="hire__tab">
            <h3>Hire Expert</h3>
            <p>
                To save your time, this function is not currently 
                available on our platform. Our system automatically 
                selects experts for you based on expert’s
                credibility, score and potential.
            </p>
            <div className="ht__btn">
                <button>Back</button>
                <button>Place Order through us</button>
            </div>
        </div>
    )
}

export default HireExpertTab
