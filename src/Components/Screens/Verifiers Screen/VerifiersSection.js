import React from 'react'
import './VerifiersSection.css'

// child components
import VerifiersForm from './VerifiersForm'

function VerifiersSection() {
    return (
        <div className="verifiers__sec">
            <h2><span>Hi Dear,</span> Welcome to Verifiers</h2>
            <p>
            A experience found on our platform. Here you can upload your work to be 
            verified from different professionals. For each verification, you would
            have to pay a nominal fee. You can control from how many people you want
            your work verified. For __, you can upload your work publicly and
            get it verified from hundreds of verifiers.
            </p>
            <p>
            Each verifier will see your requirements documents and will analyze 
            and rate your work out of 5 stars. If, your work gets an overall rating less
            than 3, there are 2 things you can do with it.
            </p>
            <div className="bullets">
                <div><span>1</span>Claim your money and you can also keep the work.</div>
                <div><span>2</span>Re assign this work</div>
            </div>
            <VerifiersForm/>
        </div>
    )
}

export default VerifiersSection
