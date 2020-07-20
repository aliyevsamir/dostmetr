import { GET_LEADERBOARD } from '../types';

const initialState = [];

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_LEADERBOARD:
            return payload;

        default:
            return state;
    }
}
