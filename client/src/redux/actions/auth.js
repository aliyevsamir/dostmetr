import axios from 'axios';
import {
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    SET_ONMAKING_QUIZ
} from '../types';
import setAuthToken from '../../utils/setAuthToken';

export const loadUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/users/me');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

export const register = name => async dispatch => {
    const body = { name };

    try {
        const res = await axios.post('/api/v1/users', body);

        const { token } = res.data.data;
        setAuthToken(token);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: REGISTER_USER_FAIL
        });
    }
};

export const setOnMakingQuiz = () => async dispatch => {
    dispatch({
        type: SET_ONMAKING_QUIZ
    });
};
