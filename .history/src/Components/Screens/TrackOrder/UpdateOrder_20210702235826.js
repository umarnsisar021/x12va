import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './UpdateOrder.css'

function UpdateOrder() {
    return (
        <div className="update__orders">
            <EverySectionHeader
                title="Update Your Order"
            />
            <div className="tOrder__inner">
                <h3 className="help__title"><span className="title__blue">Hi Dear,</span> Here You can update your order</h3>
                <div className="order__box">
                    <div className="secOrder">
                        <label>Enter order id:</label>
                        <div className="input__secOrder">
                            <input type="text" 
                                placeholder="Enter here"
                            />
                            <button>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateOrder
