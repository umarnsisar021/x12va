import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './ExpertResultFound.css'

function ExpertResultFound() {
    return (
        <div className="erf__wrapper">
            <EverySectionHeader
                title="Expert Results"
            />
            <div className="er__inner erf__inner">
                <h4><span>15 exact matches found. </span> Almost there.</h4>
                <p>Just let us know when you need work. And we will start it immediately.</p>
                <div className="order__box mt-2">
                    <div className="secOrder">
                        <label>Enter in how many days you need work:</label>
                        <div className="input__secOrder">
                            <input type="number" 
                                placeholder="user can enter digits only"
                            />
                            <button>Next</button>
                        </div>
                    </div>
                </div>
                <p className="mt-2 bl-c">On basis of input, website will determine deadline itself.</p>
                <p className="mt-2 fs-1">Great. You have done it.</p>
                <button className="erf__button">Yes, Start my work</button>
            </div>
        </div>
    )
}

export default ExpertResultFound
