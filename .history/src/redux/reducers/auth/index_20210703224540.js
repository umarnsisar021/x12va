// **  Initial State
const initialState = {
  userData: {},
  sessionToken: {},
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {userData: action.payload}

    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {}, ...obj }
    default:
      return state
  }
}


export default authReducer
