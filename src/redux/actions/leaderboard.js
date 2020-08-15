import axios from 'axios';
import { GET_LEADERBOARD } from '../types';

export const getLeaderboard = (quizId, userId) => async dispatch => {
    try {
        let res;
        if (userId) {
            res = await axios.get(`/api/v1/quizzes/${quizId}/leaderboard`, {
                params: {
                    limit: 10,
                    offset: 0,
                    userId
                }
            });
        } else {
            res = await axios.get(`/api/v1/quizzes/${quizId}/leaderboard`);
        }

        dispatch({
            type: GET_LEADERBOARD,
            payload: res.data.data
        });
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};
