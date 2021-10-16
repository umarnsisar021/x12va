import React from 'react'
import profileAvatar from '../../../../Assets/Images/Mask Group 5.png'
import default_profile from '../../../../Assets/Images/default-profile.png'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import useJwt from '@utils'

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
                <img src={ props.data.avatar ? props.data.avatar : default_profile} />
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

export default ClientProfileSidebar
