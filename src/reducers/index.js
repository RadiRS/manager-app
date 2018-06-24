import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

//combine all reducer and return to global state to will be access
export default combineReducers({
    auth: AuthReducer
});