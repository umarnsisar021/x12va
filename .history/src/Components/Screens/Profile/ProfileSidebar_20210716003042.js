import React from 'react'
import './ProfileSidebar.css'

import profileAvatar from '../../../Assets/Images/Mask Group 5.png'
/// Redux
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
function ProfileSidebar(props) {
    
    return (
        <div className="profile__sidebar">
            <div className="profile__avatar">
                <img src={props.userData.avatar} />
            </div>
            <h3 className="pUser__name">{props.userData.first_name} {props.userData.last_name}</h3>
            {/* <p className="user__bio">Finance Project Manager</p> */}
            <button className="change__imgbtn">Change image</button>
            <hr/>
            <div className="basic__details">
                <div className="basicLeft__sec">
                    <span>From</span>
                    <span>Member since</span>
                    <span>Score</span>
                    <span>Set Availability</span>
                </div>
                <div className="basicRight__sec">
                    <span>United States</span>
                    <span>Sep 2018</span>
                    <span>20%</span>    
                    <button>Set Availability</button>
                </div>
            </div> 
            <Link to="experts/orders" className="px-2"><button className="btn-theme-default btn-sm">My Order</button></Link>
            <Link ><button className="btn-theme-default btn-sm">Take Skills Test</button></Link>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true' , text: text}),
      hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false , text:'' }),
    }
  }
function mapStateToProps(state) {
    const { auth,skills } = state
    return { userData : auth.userData,sessionToken : auth.sessionToken ,skillsData : skills.skillsData}
  }
export default connect(mapStateToProps,mapDispatchToProps)(ProfileSidebar)
