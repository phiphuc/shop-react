import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app';

const rootReducer = combineReducers({
    app
});

export default rootReducer;