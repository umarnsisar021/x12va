import React, { useEffect, useState } from 'react'
import './ProfileDetails.css'
import {SkillsTile} from './ToolLangSkillsTile'
import ContentLoader from "react-content-loader"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

/// Redux 
import {connect} from 'react-redux'
import useJwt from '@utils'

const MySwal = withReactContent(Swal)
function ExpertSkillComponent  (props) {
    const [data,setData] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            useJwt.post('experts/get_my_skills',{token:props.sessionToken}).then((res)=>{
                setData(res.data.records)
            })
        },1000)
      
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
                    {
                        Object.values(data).map((i)=>{
                            return <SkillsTile
                                        title={`${i.name}`}
                                        onDelete={()=>{
                                            MySwal.fire({
                                                title: <p>This Action will not be reversible.</p>,
                                                showCancelButton:true,
                                                showConfirmButton:true,
                                                icon: 'warning',
                                                confirmButtonColor:'#079f80',
                                                cancelButtonText: 'Cancle',
                                              }).then((result) => {
                                                
                                              })
                                        }}
                                        {...i}
                                    />
                        })
                    }
                  
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
        <rect x="0" y="1" rx="0" ry="0" width="70" height="24" /> 
        <rect x="0" y="35" rx="0" ry="0" width="508" height="0" /> 
        <rect x="0" y="36" rx="0" ry="0" width="468" height="2" /> 
        <rect x="0" y="49" rx="0" ry="0" width="114" height="30" /> 
        <rect x="130" y="50" rx="0" ry="0" width="114" height="30" /> 
        <rect x="260" y="50" rx="0" ry="0" width="114" height="30" /> 
        
       
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
