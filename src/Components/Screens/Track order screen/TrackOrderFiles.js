import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './TrackOrderFIles.css'

function TrackOrderFiles() {
    return (
        <div className="trackOrder__files">
            <EverySectionHeader
                title="Track Your Order"
            />
            <div className="tOrder__inner">
                <h3 className="help__title"><span className="title__blue">Hi Dear,</span> Welcome to track Your order</h3>
                <p>Here Your work will be Download as some parts of it get completed.</p>
                <textarea name="" id="" 
                    className="trackorder__feedback"
                    placeholder="Type your message here"
                >
                </textarea>
                <button className="orderFile__btn">Download File</button>
            </div>
        </div>
    )
}

export default TrackOrderFiles
