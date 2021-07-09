// ** Redux Imports
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import {  persistReducer } from 'redux-persist'
// ** Reducers Imports
import auth from './auth'
import skills from './skills'
import utils from './utils'

// ** init middleware
const persistConfig = {
    key: 'root',
    storage,
  }
const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, auth),
  skills,
  utils,
});
export default rootReducer
