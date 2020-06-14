import {
    LOAD_QUIZZES,
    CREATE_QUIZZES,
    DELETE_QUESTION,
    UPDATE_OPTION,
    DELETE_OPTION
} from '../types';

const initialState = {
    quizzes: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_QUIZZES:
            return {
                quizzes: [...payload.data]
            };
        case CREATE_QUIZZES:
            return {
                quizzes: [payload.data, ...state.quizzes]
            };

        default:
            return state;
    }
};
