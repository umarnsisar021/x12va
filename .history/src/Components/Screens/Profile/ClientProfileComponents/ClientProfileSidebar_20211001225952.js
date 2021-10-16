import React from 'react'
import profileAvatar from '../../../../Assets/Images/Mask Group 5.png'
import default_profile from '../../../../Assets/Images/default-profile.png'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form } from 'reactstrap'
import $ from 'jquery';
import { toast } from 'react-toastify';
import useJwt from '@utils'
import {connect} from 'react-redux'
function ClientProfileSidebar(props) {
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
        props.showFadeLoader('Uploading Profile...');
        useJwt.post('member/change_profile',{avatar:base64,token:props.sessionToken}).then((res)=>{
            let data = props.userData;
            data['avatar'] = res.data.avatar;
            console.log(data)
            props.setUserData({...data});
            toast.success(res.data.message,{});
            props.hideFadeLoader();
        })
    } 
    return (
        <div className="profile__sidebar">
            <div className="profile__avatar">
                <img src={ avatar ? avatar : props.userData.avatar}/>
                <span className="online__status" ></span>
            </div>
            <h3 className="pUser__name">{`${props.data.first_name} ${props.data.last_name}`}</h3>
            <p className="user__bio">@{props.data.username}</p>
            <button className="change__imgbtn" onClick={()=>{
                 $('input[type=file]').trigger('click')
            }}>
                Change image
                <Input type='file' ref={elem => fileInputRef.current = elem} onChange={changeProfile} hidden accept='image/*' />
            </button>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      setUserData: (data) => dispatch({ type: 'SET_USERDATA', payload: data }),
      showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true' , text: text}),
      hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false , text:'' }),
    }
  }
function mapStateToProps(state) {
    const { auth,skills } = state
    return { userData : auth.userData,sessionToken : auth.sessionToken ,skillsData : skills.skillsData}
  }
export default connect(mapStateToProps,mapDispatchToProps)(ClientProfileSidebar)
