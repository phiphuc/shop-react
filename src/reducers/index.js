import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app';

const rootReducer = combineReducers({
    form: formReducer,
    app
});

export default rootReducer;