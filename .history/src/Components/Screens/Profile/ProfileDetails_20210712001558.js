import React from 'react'
import './ProfileDetails.css'
import EducationTile from './EducationTile'
import ToolLangSkillsTile from './ToolLangSkillsTile'
import ExpertSkillComponent from './ExpertSkillComponent'

import renameIcon from '../../../Assets/Images/rename icon.png'
import eduAvatar from '../../../Assets/Images/eduAvatar.png'
/// Redux 
import {connect} from 'react-redux'
function ProfileDetails(props) {
    return (
        <div className="profile__details">
            <div className="pu__details">
                <h1>{props</h1>
                <span><img src={renameIcon} alt="" /></span>
            </div>
            <p className="bio__exp">Finance Project Manager</p>
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
                <table>
                    <tr>
                        <td>Mobile Number</td>
                        <td>Email Address</td>
                    </tr>
                    <tr className="second__row">
                        <td>(456) 6543456</td>
                        <td>Jonathon@gmail.com</td>
                    </tr>
                </table>
            </div>
            <div className="education__sec">
                <div className="eduInner__sec">
                    <h5 className="blue__heading">Education</h5>
                    <button className="buttontype2">Add new</button>
                </div>
                <hr/>
                <EducationTile
                    name="Federation University Australia"
                    degree="Master of Experience Rehabilitation,
                            Musculoskeletal Rehabilitation,"
                    avatar={eduAvatar}
                />
                <EducationTile
                    name="Charles Sturt University"
                    degree="Bachelor of Human Movement, Exercise Science"
                    avatar={eduAvatar}
                />
            </div>

            <div className="tool__sec">
                <div className="toolInner__sec">
                    <h5 className="blue__heading">Tools</h5>
                    <button className="buttontype2">Add new</button>
                </div>
                <hr/>
                <div className="toolLangSkills__wrapper">
                    <ToolLangSkillsTile
                        title="Praesent vehicula"
                    />
                    <ToolLangSkillsTile
                        title="Praesent vehicula"
                    />
                    <ToolLangSkillsTile
                        title="Praesent vehicula"
                    />
                </div>
                
            </div>

            <div className="lang__sec">
                <div className="langInner__sec">
                    <h5 className="blue__heading">Languages</h5>
                    <button className="buttontype2">Add new</button>
                </div>
                <hr/>
                <div className="toolLangSkills__wrapper">
                    <ToolLangSkillsTile
                        title="Praesent vehicula"
                    />
                    <ToolLangSkillsTile
                        title="Praesent vehicula"
                    />
                    <ToolLangSkillsTile
                        title="Praesent vehicula"
                    />
                </div>
                
            </div>

            <ExpertSkillComponent />
            <button className="btn-theme-default">Get my work verified</button>
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

