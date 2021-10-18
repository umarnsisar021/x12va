import React, { useEffect, useState } from 'react'
import './NotifyDropdown.css'

import userAvatar from '../Assets/Images/Mask Group 37.png'
import useJwt from './Util'
import { connect } from 'react-redux'
import { Bell } from 'react-feather'
import { useHistory } from 'react-router-dom'
import Moment from 'react-moment'


function NotifyDropdown(props) {
    let history =     useHistory();
    const [data,setData] = useState(null);
    let token  = props.sessionToken;
    useEffect(()=>{
        
        setTimeout(()=>{
            useJwt.post('notifications/get_notifications',{token:token}).then((res)=>{
                setData(res.data.records);
            })
        })
    },[])
    const HandleViewNotification = (notification) =>{
        if(notification.view == 0){
            useJwt.post('notifications/set_view_notification',{token:token,notification_id:notification.id}).then(()=>{})
        }
        if(notification.type == 1){
            history.push('/experts/order/view?id='+notification.primary_id)
        }
        else if(notification.type == 2){
            history.push('/proposal/view/'+notification.primary_id)
        }
        props.onClick();
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
                                        
                                            {
                                                notification.from !== '' ? <img className="notification-img" src={notification.from.avatar} /> :  <Bell color="#808080" />
                                            }
                                           
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
                                    <div style={{alignSelf: 'baseline',fontSize:'10px',color:'black'}}> 
                                        <Moment format="D MMM YYYY" withTitle>
                                            {notification.created_at}
                                        </Moment>
                                        <div>
                                            <Moment format="HH:m:s" withTitle>
                                                {notification.created_at}
                                            </Moment>
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
