import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import NotifyDropdown from './NotifyDropdown'
import UserProfileDropdown from './UserProfileDropdown'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import logo from '../Assets/Images/Group 143.png'
import default_profile from '../Assets/Images/default-profile.png'
import signinIcon from '../Assets/Images/sign in icon.png'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Login from '@screens/Login/Login'
import notifyIcon from '../Assets/Images/notify.png'
import messageIcon from '../Assets/Images/meesage.png'
import dropIcon from '../Assets/Images/dropdown.png'
import InboxDropdown from './InboxDropdown'

///Redux
import {connect} from 'react-redux';
import { propTypes } from 'react-bootstrap/esm/Image'

function Navbar(props) {
    const [open, setOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [dropShow, setDropShow] = useState(false);

    const [dropInbox, setDropInbox] = useState(false);
    const [show, handleShow] = useState(false);
    const [dropUser, setDropUser] = useState(false);
    // 
    const NAV_BecomeVerifier = ()=>{
       
        if(Object.keys(props.userData).length > 0){
            if(props.userData.is_seller == 1){
                if(props.userData.is_verifier == 0){
                    return <NavLink to="/register/verifier" className="nav__link"><span>Become Verifier</span></NavLink>
                }
                else if(typeof props.userData.is_verifier == 'undefined'){
                    return <NavLink to="/register/verifier" className="nav__link"><span>Become Verifier</span></NavLink>
                }
                else{
                    return null
                }
            }
            else{
                return null
            }   
        }
        else{
            return null
        }
    }
    

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
        window.addEventListener("click",()=>{
            
            if(dropUser  === true){
                console.log("hello")
                setDropUser(false)
            }
        });
        // document.addEventListener('click',function (e){
        
        //     if (!e.target.classList.contains('notifications') || !e.target.classList.contains('icon__wrap')) {
                
        //     }
        // });
        return () => window.removeEventListener("scroll", transitionNavbar);
       
    }, []);

    
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
        <div className={`navbar ${show && 'nav__scroll'} ${props.cName}`}>
            <NavLink to="/">
                <div className="logo__container">
                    <img src={props.siteConfig.company_logo} className="logo" />
                </div>
            </NavLink>


            <div className="click__menu" onClick={()=> setOpen(!open)}><MenuIcon/></div>
            <div className="nav__content" style={{ display: open ? "flex" : "flex", left: open ? "0" : "-100%"}}>
                <NavLink to="/trackorder" className="nav__link"><span>Track my order</span></NavLink>
                <NavLink to="/experts" className="nav__link"><span>Experts</span></NavLink>
                {
                    Object.keys(props.userData).length > 0 ?
                    props.userData.is_seller == 1 ? '':<NavLink to="/workforus" className="nav__link"><span>Work for us</span></NavLink>
                    : <NavLink to="/workforus" className="nav__link"><span>Work for us</span></NavLink>
                }
                
                {
                    Object.keys(props.userData).length > 0 ?
                    props.userData.is_seller == 1 ? '': <NavLink to="/verifiers" className="nav__link"><span>Verifiers</span></NavLink>
                    : <></>
                }
  
                <NAV_BecomeVerifier />
               
                <NavLink to="/supportus" className="nav__link"><span>Support us</span></NavLink>

                {
                    Object.keys(props.userData).length == 0 ?
                    <>
                        <span id="login-modal" className="nav__link" onClick={()=> setModalShow(true)} >
                            <img src={signinIcon} className="signin__icon" />Sign in
                        </span>
                        <NavLink style={{padding:'0px'}} to="/signup" className="nav__link"><button>Create Account</button></NavLink>
                    </>
                    : ""
                }


                <div className="close__menu" onClick={()=> setOpen(false)}><CloseIcon/></div>

                {
                    Object.keys(props.userData).length > 0 ?
                    <div className="navbar__right">
                        <div className="inbox">
                            <div className="icon__wrap" onClick={handleInboxToggle}>
                                <img src={messageIcon} alt="" />
                                <span style={{position:'absolute',right:'-3px',top:'-4px'}}>
                                    <FiberManualRecordIcon style={{color:'orange',fontSize: '12px'}} />
                                </span>
                            </div>
                            <InboxDropdown
                                dropInbox={dropInbox}
                            />
                        </div>
                        <div className="notifications">
                            <div className="icon__wrap" onClick={handleDropToggle}>
                                <img  src={notifyIcon} alt=""  />
                                <span style={{position:'absolute',right:'0px',top:'-4px'}}>
                                    <FiberManualRecordIcon style={{color:'orange',fontSize: '12px'}} />
                                </span>

                            </div>
                            <NotifyDropdown
                                dropShow={dropShow}
                            />
                        </div>
                        <div className="userProfile__auth">
                            <div className="icon__wrap" onClick={handleUserProfToggle}>
                                {
                                    <img src={props.userData.avatar ? props.userData.avatar : default_profile} alt="" />
                                }
                                <span>
                                    <img src={dropIcon} alt="" />
                                </span>

                            </div>
                            <UserProfileDropdown
                                onClick={handleUserProfToggle}
                                dropUser={dropUser}
                            />
                        </div>
                    </div> : ""

                }

                    <div className="close__menu" onClick={() => setOpen(false)}><CloseIcon /></div>
            </div>
        </div>
        <Login
            show={modalShow}
            onHide={()=> setModalShow(false)}
        />

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      login: (data) => dispatch({ type: 'LOGIN', payload:data }),
    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData ,siteConfig:auth.site_config}
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
