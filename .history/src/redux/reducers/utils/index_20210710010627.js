// **  Initial State
const initialState = {
  fade_loader: false,
  fade_loader_text: false,
}

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FADE_LOADER':
      return {...state, fade_loader: action.payload}
    default:
      return state
  }
}


export default utilsReducer
