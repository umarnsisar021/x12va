import React from 'react'
import './ClientProfileDetails.css'
import Table from './Table'

function ClientProfileDetails(props) {
    return (
        <div className="cprofile__details">
            <h2>My Orders</h2>
            <Table className="mt-2"/>
            <button className="buttonType__one mt-2 btn-sm">Place Order</button>
        </div>
    )
}

export default ClientProfileDetails
