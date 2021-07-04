import React from 'react'
import './HeaderButton.css'

function HeaderButton(props) {
    return (
        <button className="header__button">
            {props.title}
        </button>
    )
}

export default HeaderButton
