import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import NotifyDropdown from './NotifyDropdown'
import UserProfileDropdown from './UserProfileDropdown'

import logo from '../Assets/Images/Group 143.png'
import signinIcon from '../Assets/Images/sign in icon.png'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Login from './Screens/Login Screen/Login'
import notifyIcon from '../Assets/Images/notify.png'
import messageIcon from '../Assets/Images/meesage.png'
import dropIcon from '../Assets/Images/dropdown.png'
import userAvatar from '../Assets/Images/Mask Group 37.png'
import InboxDropdown from './InboxDropdown'

function Navbar({ cName }) {

    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 80) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    const [open, setOpen] = useState(false);

    const [modalShow, setModalShow] = useState(false);

    const [dropShow, setDropShow] = useState(false);
    const handleDropToggle = () => {
        if (dropShow) {
            setDropShow(false)
        }
        else {
            setDropShow(true)
            setDropInbox(false)
            setDropUser(false)
        }
    }
    const [dropUser, setDropUser] = useState(false);
    const handleUserProfToggle = () => {
        if (dropUser) {
            setDropUser(false)
        }
        else {
            setDropUser(true)
            setDropShow(false)
            setDropInbox(false)
        }
    }
    const [dropInbox, setDropInbox] = useState(false);
    const handleInboxToggle = () => {
        if (dropInbox) {
            setDropInbox(false)
        }
        else {
            setDropInbox(true)
            setDropShow(false)
            setDropUser(false)
        }
    }
    return (
        <>
            <div className={`navbar ${show && 'nav__scroll'} ${cName}`}>
                <NavLink to="/">
                    <div className="logo__container">
                        <img src={logo} className="logo" />
                    </div>
                </NavLink>


                <div className="click__menu" onClick={() => setOpen(!open)}><MenuIcon /></div>
                <div className="nav__content" style={{ display: open ? "flex" : "flex", left: open ? "0" : "-100%" }}>
                    <NavLink to="/trackorder" className="nav__link"><span>Track my order</span></NavLink>
                    <NavLink to="/experts" className="nav__link"><span>Experts</span></NavLink>
                    <NavLink to="/workforus" className="nav__link"><span>Work for us</span></NavLink>
                    <NavLink to="/verifiers" className="nav__link"><span>Verifiers</span></NavLink>
                    <NavLink to="/profile" className="nav__link"><span>Support us</span></NavLink>
                    {/* <div className="login__details">
                        <span className="nav__link" onClick={() => setModalShow(true)} >
                            <img src={signinIcon} className="signin__icon" />Sign in
                        </span>
                        <button>Create Account</button>
                    </div> */}
                    <div className="navbar__right">
                        <div className="inbox">
                            <div className="icon__wrap">
                                <img src={messageIcon} alt="" onClick={handleInboxToggle}/>
                            </div>
                            <InboxDropdown
                                dropInbox={dropInbox}
                            />
                        </div>
                        <div className="notifications">
                            <div className="icon__wrap">
                                <img src={notifyIcon} alt="" onClick={handleDropToggle} />
                            </div>
                            <NotifyDropdown
                                dropShow={dropShow}
                            />
                        </div>
                        <div className="userProfile__auth">
                            <div className="icon__wrap" onClick={handleUserProfToggle}>
                                <img src={userAvatar} alt="" />
                                <span>
                                    <img src={dropIcon} alt="" />
                                </span>
                            </div>
                            <UserProfileDropdown
                                dropUser={dropUser}
                            />
                        </div>
                    </div>
                    <div className="close__menu" onClick={() => setOpen(false)}><CloseIcon /></div>
                </div>
            </div>
            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
    )
}

export default Navbar
