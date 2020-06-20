import axios from 'axios';
import {
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_ADMIN,
    REGISTER_ADMIN
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

export const adminLogin = loginData => async dispatch => {
    const res = await axios.post('/api/v1/users/login/admin', loginData);

    console.log(res);

    const { token } = res.data.data;
    setAuthToken(token);

    dispatch({
        type: LOGIN_ADMIN,
        payload: res.data
    });
};

export const registerAdmin = async registerData =>
    await axios.post('api/v1/users/register/admin', registerData);
