import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <header>
            <div className="banner__content">
                <h6 className="banner__title">what services are you looking for?</h6>
                <p className="banner__desc">we help business build their tempor sodales at  sit amet quam etiam vel lascus consectetur</p>
            </div>
            <div className="banner__input">
                <input type="text" className="input__field" placeholder="Accounting, Engineering, Solid Works, etc" />
                <button className="banner__button"></button>
            </div>
        </header>
    )
}

export default Banner
