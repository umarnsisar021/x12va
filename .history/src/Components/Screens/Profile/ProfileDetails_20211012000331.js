import React from 'react'
import './ProfileDetails.css'
import EducationTile from './EducationTile'
import ToolLangSkillsTile from './ToolLangSkillsTile'
import ExpertEducationComponent from './ExpertEducationComponent'
import ExpertSkillComponent from './ExpertSkillComponent'
import ExpertToolsComponent from './ExpertToolsComponent'
import ExpertLanguagesComponent from './ExpertLanguagesComponent'
import renameIcon from '../../../Assets/Images/rename icon.png'
import eduAvatar from '../../../Assets/Images/eduAvatar.png'
import {Link} from 'react-router-dom'
/// Redux 
import {connect} from 'react-redux'
function ProfileDetails(props) {
    return (
        <div className="profile__details">
            <div className="pu__details">
                <h1>{props.userData.first_name} {props.userData.last_name}</h1>
                {/* <span><img src={renameIcon} alt="" /></span> */}
            </div>
            <p className="bio__exp">@{props.userData.username}</p>
            <div className="info__sec">
                <h5 className="blue__heading">Info</h5>
                <hr/>
                <p className="info">
                Vestibulum vel consectetur erat. Nam 
                pulvinar commodo aliquam. Integer ac 
                sem vulputate hendrerit elit sit amet, 
                imperdiet nibh. Nam vitae volutpat sem. 
                Donec porttitor dui, tempo tortor 
                ultricies vitae. Vestibulum ultricies 
                molestie dui, id laoreet mi. Nulla 
                ultrices mattis arcu, non ullamcorper 
                odio tempus ut. Mauris fermentum.
                </p>
            </div>
            <div className="contact__detailsBio">
                <h5 className="blue__heading">Contact Details</h5>
                <hr/>
                <div className="d-flex" style={{justifyContent:'space-between',textAlign: 'center',padding:'15px 10px 30px 10px'}}>
                    <div>
                        <div>Mobile Number</div>
                        <div>(456) 6543456</div>
                    </div>
                    <div className="">
                        <div>Email Address</div>
                        <div>{props.userData.email}</div>
                    </div>
                </div>
            </div>

            <ExpertEducationComponent />
            <ExpertToolsComponent />
            <ExpertLanguagesComponent />
           

            <ExpertSkillComponent />
            <button className="btn-theme-default btn-sm">Get my work verified</button>
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
export default connect(mapStateToProps,mapDispatchToProps)(ProfileDetails)

