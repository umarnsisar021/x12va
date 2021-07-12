import React, { useEffect } from 'react'
import './ProfileDetails.css'
import ToolLangSkillsTile from './ToolLangSkillsTile'
/// Redux 
import {connect} from 'react-redux'
import useJwt from '@utils'
function ExpertSkillComponent  (props) {
    useEffect(()=>{
        useJwt
    })
    return (
        <div className="skills__sec">
            <div className="skillsInner__sec">
                <h5 className="blue__heading">Skills</h5>
                <button className="buttontype2">Add new</button>
            </div>
            <hr/>
            <div className="toolLangSkills__wrapper">
                <ToolLangSkillsTile
                    title="vehicula risus vel turpis"
                />
                <ToolLangSkillsTile
                    title="Commodo"
                />
                <ToolLangSkillsTile
                    title="Praesent vehicula"
                />
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(ExpertSkillComponent )
