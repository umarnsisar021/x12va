import React from 'react'
import './TopExpertSec.css'

function TopExpertSec() {
    return (
        <div className="searchbar__area">
            <h1 className="experts__title">
                Send your project to top experts
                with just one click
            </h1>
            <div className="search__input">
                <input type="text" className="searchbar" placeholder="Accounting, Engineering, Solid Works, etc" />
                <button className="search__button"></button>
            </div>
        </div>
    )
}

export default TopExpertSec