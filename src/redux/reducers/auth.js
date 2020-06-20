import {
    USER_LOADED,
    REGISTER_USER_SUCCESS,
    AUTH_ERROR,
    LOGIN_ADMIN
} from '../types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null
};

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload.data
            };

        case AUTH_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null
            };

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                token: payload.data.token,
                isAuthenticated: true,
                loading: false,
                user: payload.data.user
            };

        case LOGIN_ADMIN:
            return {
                ...state,
                token: payload.data.token,
                isAuthenticated: true,
                loading: false,
                user: payload.data.user
            };

        default:
            return state;
    }
}
