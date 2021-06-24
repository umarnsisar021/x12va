import React from 'react'
import './ClientProfileDetails.css'

function ClientProfileDetails() {
    return (
        <div className="cprofile__details">
            <h2>My Orders</h2>
            <hr />
            <table className="order__tableContent">
                <thead>
                    <tr>
                        <th border="1">order numbers</th>
                        <th>subject</th>
                        <th>budget</th>
                        <th>start date</th>
                        <th>end date</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7634</td>
                        <td><span>Finance</span></td>
                        <td>$567.000</td>
                        <td>May 23, 2021</td>
                        <td>May 30, 2021</td>
                        <td><span className="order__status">completed</span></td>
                    </tr>
                    <tr>
                        <td>7634</td>
                        <td><span>Finance</span></td>
                        <td>$567.000</td>
                        <td>May 23, 2021</td>
                        <td>May 30, 2021</td>
                        <td><span className="order__status">completed</span></td>
                    </tr>
                    <tr>
                        <td>7634</td>
                        <td><span>Finance</span></td>
                        <td>$567.000</td>
                        <td>May 23, 2021</td>
                        <td>May 30, 2021</td>
                        <td><span className="order__status">completed</span></td>
                    </tr>
                    <tr>
                        <td>7634</td>
                        <td><span>Finance</span></td>
                        <td>$567.000</td>
                        <td>May 23, 2021</td>
                        <td>May 30, 2021</td>
                        <td><span className="order__status">completed</span></td>
                    </tr>
                    <tr>
                        <td>7634</td>
                        <td><span>Finance</span></td>
                        <td>$567.000</td>
                        <td>May 23, 2021</td>
                        <td>May 30, 2021</td>
                        <td><span className="order__status">completed</span></td>
                    </tr>
                </tbody>
            </table>
            <button>Place Order</button>
        </div>
    )
}

export default ClientProfileDetails
