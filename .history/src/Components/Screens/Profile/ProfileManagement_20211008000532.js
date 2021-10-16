import React from 'react'
import './ProfileManagement.css'
import EverySectionHeader from '../../EverySectionHeader'
import ProfileSidebar from './ProfileSidebar'
import ProfileDetails from './ProfileDetails'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


function ProfileManagement() {
    return (
        <div className="profileMain__wrapper">
            <EverySectionHeader
                title="Profile Management"
                childComponent={
                    <div className="HeaderLeftMenu" style={{paddingRight:'110px'}}>
                        <span><button className="btn-theme-default btn-sm"><Link to="/expert/tasks/new">New Tasks</Link></button></span>
                    </div>
                }
            />
            <div className="p__Section">
                <ProfileSidebar/>
                <ProfileDetails/>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      login: (data) => dispatch({ type: 'LOGIN', userData:data.user_info, token:data.token }),
      setToken: (data) => dispatch({ type: 'LOGIN', payload:data }),
      showFadeLoader: (text) => dispatch({type:'SET_FADE_LOADER', payload: 'true', text: text }),
      hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false, text: '' }),

    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData,
            sessionToken : auth.sessionToken
    }
}
export default connect()(ProfileManagement)
