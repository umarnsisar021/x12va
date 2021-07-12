import React, { useEffect, useState } from 'react'
import './NotifyDropdown.css'

import userAvatar from '../Assets/Images/Mask Group 37.png'
import useJwt from './Util'
import { connect } from 'react-redux'
import { Bell } from 'react-feather'

function NotifyDropdown(props) {
    const [data,setData] = useState(null);
    useEffect(()=>{
        //let token  = props.sessionToken;
        let token  = '43bffc015e29cfedd1f4eaf7fd5f8f1e4c3fa5ae61edc7efa4a8b08ced17a344b05104e44bac43df5a2cfaf4d77a7517b59ee56aab20db656861333143e94764';
        setTimeout(()=>{
            useJwt.post('notifications/get_notifications',{token:token}).then((res)=>{
                setData(res.data.records);
            })
        })
    },[])
    const HandleViewNotification = (notification) =>{
        if
    }
    if(data){
        return (
            <div className="notifications__dd" style={{ display: props.dropShow ? "block" : "none" }}>
                <ul className="notifications__ul">
                    <h5>Notifications</h5>
    
                    { Object.keys(data).length > 0 ? 
                        Object.values(data).map((notification,index)=>{
                            return (
                                <li className={notification.view == 1 ? 'read':'un-read'} onClick={()=>{HandleViewNotification(notification)}}>
                                    <div className="notify__icon">
                                        <span className="icon">
                                            <Bell color="#808080" />
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
