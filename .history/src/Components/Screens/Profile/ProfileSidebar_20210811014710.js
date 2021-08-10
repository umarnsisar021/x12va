import React from 'react'
import './ProfileSidebar.css'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form } from 'reactstrap'
import profileAvatar from '../../../Assets/Images/Mask Group 5.png'
import $ from 'jquery'; 
import useJwt from '@utils'
/// Redux
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
function ProfileSidebar(props) {
    const [avatar,setAvatar] = React.useState(null)
    let fileInputRef = React.useRef();
    const changeProfile = (e) =>{
        const reader = new FileReader(),
        files = e.target.files
        reader.onload = function () {
            setAvatar(reader.result);
            uploadProfile(reader.result)
        }
        reader.readAsDataURL(files[0])
    }
    const uploadProfile =(base64) =>{
        props.showFadeLoader('Uploading Profile...')
        useJwt.post('member/change_profile',{avatar:base64,token:props.sessionToken}).then((res)=>{
            toast.success(res.data.message,{});
        })
    } 
    return (
        <div className="profile__sidebar">
            <div className="profile__avatar">
                <img src={ avatar ? avatar : props.userData.avatar} />
            </div>
            <h3 className="pUser__name">{props.userData.first_name} {props.userData.last_name}</h3>
            {/* <p className="user__bio">Finance Project Manager</p> */}
            
            <button className="change__imgbtn" onClick={()=>{
                 $('input[type=file]').trigger('click')
            }}>
                Change image
                <Input type='file' ref={elem => fileInputRef.current = elem} onChange={changeProfile} hidden accept='image/*' />
            </button>
            <hr/>
            <div className="basic__details pb-2">
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
            <Link to="experts/orders" className="px-1 "><button className="btn-theme-default btn-sm mb-2">My Order</button></Link>
            <Link className="px-1"><button className="btn-theme-default btn-sm">Take Skills Test</button></Link>
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
