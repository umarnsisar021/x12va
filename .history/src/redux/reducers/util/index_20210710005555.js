// **  Initial State
const initialState = {
  fade_loader: false,
}

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAID_LOADER':
      return {...state, skillsData: action.payload}
    default:
      return state
  }
}


export default utilsReducer
