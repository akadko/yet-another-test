import auth from './auth'
import posts from './posts'
import { combineReducers } from 'redux';

export default combineReducers({ auth, posts })
