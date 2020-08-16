import axios from 'axios';
import { GET_LEADERBOARD } from '../types';

export const getLeaderboard = (
    quizId,
    userId,
    limit,
    offset
) => async dispatch => {
    try {
        let res;
        if (userId) {
            res = await axios.get(`/api/v1/quizzes/${quizId}/leaderboard`, {
                params: {
                    limit,
                    offset: offset || 0,
                    userId
                }
            });
        } else {
            res = await axios.get(`/api/v1/quizzes/${quizId}/leaderboard`, {
                params: {
                    limit,
                    offset: offset || 0
                }
            });

            console.log(res);
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
