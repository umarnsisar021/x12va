// **  Initial State
const initialState = {
  fade_loader: false,
  fade_loader_text: '',
  site_config : {}
}

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FADE_LOADER':
      return {...state, fade_loader: action.payload , fade_loader_text: action.text}
      case 'SET_FADE_LOADER':
      return {...state, fade_loader: action.payload , fade_loader_text: action.text}
    default:
      return state
  }
}


export default utilsReducer
