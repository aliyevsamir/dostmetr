import { GET_SUBMISSION } from '../types';

const initialState = {
    loading: true,
    submission: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SUBMISSION:
            return {
                loading: false,
                submission: payload
            };

        default:
            return state;
    }
};
