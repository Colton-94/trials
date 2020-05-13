import {combineReducers} from 'redux';
import authGoogle from './authGoogle';
import {reducer} from 'redux-form';
import formsReducer from './formsReducer';

export default combineReducers({
    auth:authGoogle,
    data:formsReducer,
    form:reducer 
});




