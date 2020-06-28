import { SET_ERRORS, CLEAR_ERRORS } from '../types';

const initialState = null;

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case SET_ERRORS:
            return payload;
        case CLEAR_ERRORS:
            return payload;
        default:
            return state;
    }
}
