import {
    LOAD_QUIZZES,
    CREATE_QUIZZES,
    DELETE_QUESTION,
    ADD_OPTION,
    GET_QUIZ_FOR_TAKING,
    QUIZ_SUBMISSION_SUCCESS,
    QUIZ_SUBMISSION_ERROR
} from '../types';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_QUIZZES:
            return [...payload.data];

        case CREATE_QUIZZES:
            return [payload.data, ...state];

        case DELETE_QUESTION:
            return [...state].filter(
                quiz => quiz.question_id !== payload.data.question_id
            );

        case ADD_OPTION:
            return [...state];

        case GET_QUIZ_FOR_TAKING:
            return payload;

        case QUIZ_SUBMISSION_SUCCESS:
            return payload;

        case QUIZ_SUBMISSION_ERROR:
            return [...payload];

        default:
            return state;
    }
};
