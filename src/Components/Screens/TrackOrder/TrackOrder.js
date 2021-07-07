import React from 'react'
import './TrackOrder.css'
import EverySectionHeader from '../../EverySectionHeader'

// the classes used for styling are from Help component

function TrackOrder() {
    return (
        <div className="help__wrapper">
            <EverySectionHeader
                title="Track Your Order"
            />
            <div className="tOrder__inner">
                <h3 className="help__title"><span className="title__blue">Hi Dear,</span> Welcome to track Your order</h3>
                <div className="order__box">
                    <div className="secOrder">
                        <label>Enter order id:</label>
                        <div className="input__secOrder">
                            <input type="text" 
                                placeholder="Enter here"
                            />
                            <button>Track</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder
