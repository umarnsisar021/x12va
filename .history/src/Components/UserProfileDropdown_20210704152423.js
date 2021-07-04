import React from 'react'
import './UserProfileDropdown.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
function UserProfileDropdown(props) {
    return (
        <div className="profile__dd" style={{ display: props.dropUser ? "block" : "none" }}>
            <ul className="profile__ul">
                <li className="profile__li">
                  
                    {
                        props.account_mode == 'client' ?
                        <Link to="/cprofile?=name" >
                            <DashboardIcon />
                            Profile
                        </Link>
                        :
                        <Link to="/profile?=name" >
                            <DashboardIcon />
                            Profile
                        </Link>
                    }
                   
                </li>
                <li className="profile__li">
                    <a href="">
                        <DashboardIcon />
                        Dashboard
                    </a>
                </li>
                {
                    props.userData.is_seller == 1 ? 
                        props.account_mode == 'client' ?
                        <li className="profile__li">
                            <a href="" onClick={()=> props.switch('expert')}>
                                <ExitToAppIcon />
                                Switch to Expert
                            </a>
                        </li> : <li className="profile__li">
                            <a href="" onClick={()=> props.switch('client')}>
                                <ExitToAppIcon />
                                Switch to Expert
                            </a>
                        </li> 
                    :
                    ""
                }
                <li className="profile__li">
                    <a href="" onClick={()=> props.logout()}>
                        <ExitToAppIcon />
                        Sign Out
                    </a>
                </li>

            </ul>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      logout: (data) => dispatch({ type: 'LOGOUT', payload:data }),
      switch: (data) => dispatch({ type: 'SWITCH_ACCOUNT_MODE', mode:data }),
    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData, 
            account_mode : auth.account_mode        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfileDropdown)

