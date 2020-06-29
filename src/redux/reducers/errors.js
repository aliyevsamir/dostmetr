import { SET_ERRORS, CLEAR_ERRORS } from '../types';

const initialState = {
    type: '',
    errors: {}
};

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case SET_ERRORS:
            return {
                type: payload.type ? payload.type : 'notification',
                errors: payload.response.data
            };
        case CLEAR_ERRORS:
            return payload;
        default:
            return state;
    }
}
