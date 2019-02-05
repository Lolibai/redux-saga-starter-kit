import { combineReducers } from 'redux';
import userReducer from './users.reducer';

const reducers = combineReducers({ userModule: userReducer });

export default reducers;
