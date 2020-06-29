import { combineReducers } from 'redux';
import auth from './auth';
import quizzes from './quizzes';
import errors from './errors';

export default combineReducers({
    auth,
    quizzes,
    errors
});
