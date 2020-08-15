import { GET_SUBMISSION } from '../types';

const initialState = {
    loading: true,
    submission: {
        created_by: null,
        submission: []
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SUBMISSION:
            const { created_by, submission } = payload;
            return {
                loading: false,
                submission: {
                    created_by,
                    submission
                }
            };

        default:
            return state;
    }
};
