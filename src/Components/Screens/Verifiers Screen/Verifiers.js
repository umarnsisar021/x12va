import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'

// child components
import VerifiersSection from './VerifiersSection'

function Verifiers() {
    return (
        <div className="verifiers__wrapper">
            <EverySectionHeader
                title="Verifiers"
            />
            <VerifiersSection/>
        </div>
    )
}

export default Verifiers
