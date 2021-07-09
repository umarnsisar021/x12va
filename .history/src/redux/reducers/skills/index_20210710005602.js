// **  Initial State
const initialState = {
  skillsData: {}
}

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SKILLS':
      return {...state, skillsData: action.payload}
    default:
      return state
  }
}


export default skillsReducer
