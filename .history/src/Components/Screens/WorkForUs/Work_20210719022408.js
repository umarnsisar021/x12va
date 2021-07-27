import React from 'react'
import WorkBanner from './WorkBanner'
import WorkDetails from "./WorkDetails"
import WorkLowerBanner from './WorkLowerBanner'

function Work() {
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

export default Work
