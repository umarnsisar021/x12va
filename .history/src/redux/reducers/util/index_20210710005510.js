// **  Initial State
const initialState = {
  black_: false,
}

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SKILLS':
      console.log(action.payload);
      return {...state, skillsData: action.payload}
    default:
      return state
  }
}


export default utilsReducer
