import { combineReducers } from 'redux';
import errors from './errors';
import auth from './auth';
import quizzes from './quizzes';

export default combineReducers({
    auth,
    quizzes,
    errors
});
