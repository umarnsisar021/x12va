// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { persistStore,  } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
//import storage from 'redux-persist/lib/storage'
// ** init middleware
// const persistConfig = {
//     key: 'root',
//     storage,
//   }

  export default () => {
    let store = createStore(rootReducer,applyMiddleware(thunk))
    let persistor = persistStore(store);
    return { store, persistor }
  }