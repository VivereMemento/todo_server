import { combineReducers } from 'redux';
import initialState from './initialState';
import inputValues from './inputValues';

const reducer = combineReducers({
    initialState,
    inputValues,
});

export default reducer;