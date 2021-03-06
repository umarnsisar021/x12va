// **  Initial State
const initialState = {
  userData: {},
  sessionToken:'',
  account_mode:'client',
  site_config : {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, userData: action.userData , sessionToken: action.token}

    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {},sessionToken:'', ...obj }
    case 'SWITCH_ACCOUNT_MODE':
      return { ...state, account_mode: action.mode}
    case 'SET_USERDATA':
      return {...state, userData: action.payload}
    case 'SITE_CONFIG':
        return {...state, site_config: action.payload }
    default:
      return state
  }
}


export default authReducer
