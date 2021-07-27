import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import WorkBanner from './WorkBanner'
import WorkDetails from "./WorkDetails"
import WorkLowerBanner from './WorkLowerBanner'

function Work(props) {
    let history = useHistory()
    if(Object.keys(props.userData).length> 0){
        if(props.userData.is_seller == 1){
            useHistory.push('/')
        }
    }
    return (
        <div>
            <WorkBanner/>
            <WorkDetails/>
            <WorkLowerBanner/>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      login: (data) => dispatch({ type: 'LOGIN', payload:data }),
    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData }
}

export default connect(mapStateToProps,mapDispatchToProps)(Work)
