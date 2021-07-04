import { Link } from 'react-router-dom'
import React from 'react'
import './HeaderButton.css'

function HeaderButton(props) {
    return (
        <Link to="/orders" >
            <button className="header__button">
                {props.title}
            </button>
        </Link>
       
    )
}

export default HeaderButton
