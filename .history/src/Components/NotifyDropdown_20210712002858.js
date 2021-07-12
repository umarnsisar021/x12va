import React, { useEffect, useState } from 'react'
import './NotifyDropdown.css'

import userAvatar from '../Assets/Images/Mask Group 37.png'
import useJwt from './Util'
import { connect } from 'react-redux'

function NotifyDropdown(props) {
    const [data,setData] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            useJwt.post('notifications/get_notifications',{token:props.sessionToken}).then((res)=>{
                setData(res.data.records);
            })
        })
    },[])
    if(data){
        return (
            <div className="notifications__dd" style={{ display: props.dropShow ? "block" : "none" }}>
                <ul className="notifications__ul">
                    <h5>Notifications</h5>
    
                    { Object.keys(data).length > 0 ? 
                        Object.values(data).map((notification,index)=>{
                            return (
                                <li className="success">
                                    <div className="notify__icon">
                                        <span className="icon">
                                            <img src={userAvatar} alt="" />
                                        </span>
                                    </div>
                                    <div className="notify__data">
                                        <div className="notify__title">
                                            {notification.title}
                                        </div>
                                        <div className="notifySub__title">
                                            {notification.message}
                                        </div>
                                    </div>
                                    {/* <div className="notify__status">
                                                            success
                                                        </div> */}
                                </li>
                            )
                        })
                    : '' }
                    
                    <li className="show__all">
                        <span>show all notifications</span>
                    </li>
                </ul>
            </div>
        )
    }
    else{
        return false;
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
export default connect(mapStateToProps,mapDispatchToProps)(NotifyDropdown)
