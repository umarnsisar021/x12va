import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


import logo from '../Assets/Images/Group 143.png'
import signinIcon from '../Assets/Images/sign in icon.png'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Login from './Screens/Login Screen/Login'

function Navbar({ cName }) {
    
    const [show, handleShow] = useState(false);

    const transitionNavbar= () => {
        if (window.scrollY > 50) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
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


            <div className="click__menu" onClick={()=> setOpen(!open)}><MenuIcon/></div>
            <div className="nav__content" style={{ display: open ? "flex" : "flex", left: open ? "0" : "-100%"}}>
                <NavLink to="/trackorder" className="nav__link"><span>Track my order</span></NavLink>
                <NavLink to="/experts" className="nav__link"><span>Experts</span></NavLink>
                <NavLink to="/workforus" className="nav__link"><span>Work for us</span></NavLink>
                <NavLink to="/verifiers" className="nav__link"><span>Verifiers</span></NavLink>
                <NavLink to="/profile" className="nav__link"><span>Support us</span></NavLink>
                <span className="nav__link" onClick={()=> setModalShow(true)} >
                    <img src={signinIcon} className="signin__icon" />Sign in
                </span>
                
                <NavLink style={{padding:'0px'}} to="/signup" className="nav__link"><button>Create Account</button></NavLink>
                
                <div className="close__menu" onClick={()=> setOpen(false)}><CloseIcon/></div>
            </div>
        </div>
        <Login
            show={modalShow}
            onHide={()=> setModalShow(false)}
        />
        
        </>
    )
}

export default Navbar
