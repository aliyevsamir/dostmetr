import {
    LOAD_QUIZZES,
    CREATE_QUIZZES,
    UPDATE_QUESTION,
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
                quizzes: payload
            };
        case CREATE_QUIZZES:
            return {
                // TODO
            };
        case UPDATE_QUESTION:
            return {
                // TODO
            };
        case DELETE_QUESTION:
            return {
                // TODO
            };
        case UPDATE_OPTION:
            return {
                // TODO
            };
        case DELETE_OPTION:
            return {
                // TODO
            };
        default:
            return state;
    }
};
