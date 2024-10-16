import { combineReducers } from 'redux';
import gym from './gym';
import store from './store';
import variety from './variety';




const rootReducer = combineReducers({
gym,
store ,
variety

})

export default rootReducer;