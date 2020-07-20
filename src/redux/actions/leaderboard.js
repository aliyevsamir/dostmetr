import axios from 'axios';
import { GET_LEADERBOARD } from '../types';

export const getLeaderboard = (quizId, userId) => async dispatch => {
    try {
        let res;
        if (userId) {
            res = await axios.get(`/api/v1/quizzes/${quizId}/leaderboard`, {
                params: {
                    limit: 3,
                    offset: 0,
                    userId
                }
            });
        } else {
            res = await axios.get(`/api/v1/quizzes/${quizId}/leaderboard`);
        }

        console.log(res);

        dispatch({
            type: GET_LEADERBOARD,
            payload: res.data.data
        });
    } catch (err) {
        console.log(err.response);
    }
};
