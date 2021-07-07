import React from 'react'
import './ServicesSearchBar.css'

function ServicesSearchBar() {
    return (
        <div className="searchbar__area">
            <h2>What services are you looking for?</h2>
            <div className="search__input">
                <input type="text" className="searchbar" placeholder="Accounting, Engineering, Solid Works, etc" />
                <button className="search__button"></button>
            </div>
        </div>
    )
}

export default ServicesSearchBar
