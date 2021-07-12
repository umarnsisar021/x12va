import React, { useEffect, useState } from 'react'
import './ProfileDetails.css'
import ToolLangSkillsTile from './ToolLangSkillsTile'
import ContentLoader from "react-content-loader"
/// Redux 
import {connect} from 'react-redux'
import useJwt from '@utils'
function ExpertSkillComponent  (props) {
    const [data,setData] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            useJwt.post('experts/get_my_skills',{token:props.sessionToken}).then((res)=>{
                setData(res.data.records)
            })
        },30000)
      
    })
    if(data){
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
    else{
        return <ContentLoader 
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        style={{marginTop:'10px'}}
      >
        <rect x="0" y="1" rx="0" ry="0" width="77" height="24" /> 
        <rect x="0" y="35" rx="0" ry="0" width="508" height="0" /> 
        <rect x="0" y="36" rx="0" ry="0" width="468" height="2" /> 
        <rect x="0" y="49" rx="0" ry="0" width="114" height="30" /> 
        <rect x="130" y="50" rx="0" ry="0" width="114" height="30" /> 
        <rect x="276" y="50" rx="0" ry="0" width="114" height="30" /> 
        
       
      </ContentLoader>;
    }
    
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
