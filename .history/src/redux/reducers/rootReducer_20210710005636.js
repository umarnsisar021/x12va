// ** Redux Imports
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import {  persistReducer } from 'redux-persist'
// ** Reducers Imports
import auth from './auth'
import skills from './skills'

// ** init middleware
const persistConfig = {
    key: 'root',
    storage,
  }
const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, auth),
  skills,
  utilsReducer,
});
export default rootReducer
