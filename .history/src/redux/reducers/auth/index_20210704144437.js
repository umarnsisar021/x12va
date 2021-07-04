// **  Initial State
const initialState = {
  userData: {},
  sessionToken:'',
  sessionToken:'',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, userData: action.userData , sessionToken: action.token}

    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {},sessionToken:'', ...obj }
    default:
      return state
  }
}


export default authReducer
