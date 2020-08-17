import axios from 'axios';
import { GET_LEADERBOARD } from '../types';

export const getLeaderboard = props => async dispatch => {
    const { quizId, userId, limit, offset } = props;
    try {
        let res;
        if (userId) {
            res = await axios.get(`/api/v1/quizzes/${quizId}/leaderboard`, {
                params: {
                    limit: limit || 10,
                    offset: offset || 0,
                    userId
                }
            });
        } else {
            res = await axios.get(`/api/v1/quizzes/${quizId}/leaderboard`, {
                params: {
                    limit: limit || 10,
                    offset: offset || 0
                }
            });
        }

        dispatch({
            type: GET_LEADERBOARD,
            payload: res.data.data
        });

        return res;
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};
