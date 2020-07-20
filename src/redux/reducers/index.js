import { combineReducers } from 'redux';
import auth from './auth';
import quizzes from './quizzes';
import errors from './errors';
import leaderboard from './leaderboard';

export default combineReducers({
    auth,
    quizzes,
    errors,
    leaderboard
});
