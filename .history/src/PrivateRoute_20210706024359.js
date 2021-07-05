// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
/// Redux
import { Provider,connect } from 'react-redux'
const PrivateRoute = ({ component: Component,userData, ...rest }) => {
    console.log(userData)
  // Add your own authentication on the below line.
  return (
    <Route
      {...rest}

    >   
        { Object.keys(userData).length > 0  ? 
          <Component  />
            : 
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
       
    </Route>
  )
}

function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData }
  }
  export default connect(mapStateToProps,null)(PrivateRoute)