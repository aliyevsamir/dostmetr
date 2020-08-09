import { combineReducers } from 'redux';
import auth from './auth';
import quizzes from './quizzes';
import errors from './errors';
import leaderboard from './leaderboard';
import submission from './submission';

export default combineReducers({
    auth,
    quizzes,
    errors,
    leaderboard,
    submission
});
