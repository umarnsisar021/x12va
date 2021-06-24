import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './CreditCardDetails.css'

function CreditCardDetails() {
    return (
        <div className="ccd__wrapper">
            <EverySectionHeader
                title="Credit Card Details"
            />
            <div className="ccd__inner">
                <div className="ccd__header">
                    <h4>we have calculated your budget. It is …….</h4>
                    <h3>But as first customer, you will get 10% off.</h3>
                </div>
                <div className="ccd__form">
                    <form action="">
                        <div className="form__row">
                            <div className="input__box">
                                <label htmlFor="">Cardholder Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>

                            <div className="input__box">
                                <label htmlFor="">Credit Card</label>
                                <input type="text" placeholder="2345 6789 7654" />
                            </div>
                        </div>

                        <div className="form__row2">
                            <div className="input__box2">
                                <label htmlFor="">Expiration Date</label>
                                <input type="text" placeholder="08 / 2021" />
                            </div>

                            <div className="input__box2">
                                <label htmlFor="">CW</label>
                                <input type="text" placeholder="654" />
                            </div>
                        </div>

                        <button>Pay</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreditCardDetails
