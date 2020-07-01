import axios from 'axios';
import {
    LOAD_QUIZZES,
    CREATE_QUIZZES,
    UPDATE_QUESTION,
    DELETE_QUESTION,
    UPDATE_OPTION,
    DELETE_OPTION,
    ADD_OPTION,
    CREATE_CHOICES,
    GET_MY_QUIZ
} from '../types';

export const loadQuizzes = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/questions/options?limit=100');

        console.log(res);
        dispatch({
            type: LOAD_QUIZZES,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const createQuizzes = quizzes => async dispatch => {
    const res = await axios.post('/api/v1/questions/options', quizzes);

    dispatch({
        type: CREATE_QUIZZES,
        payload: res.data
    });
};

export const updateQuestion = (id, newQuestion) => async dispatch => {
    const question = { question_content: newQuestion };
    const res = await axios.put(`/api/v1/questions/${id}`, question);

    dispatch({
        type: UPDATE_QUESTION,
        payload: res.data
    });
};

export const deleteQuestion = id => async dispatch => {
    const res = await axios.delete(`/api/v1/questions/${id}`);

    dispatch({
        type: DELETE_QUESTION,
        payload: res.data
    });
};

export const updateOption = (id, newOption) => async dispatch => {
    const res = await axios.put(`/api/v1/options/${id}`, newOption);

    dispatch({
        type: UPDATE_OPTION,
        payload: res.data
    });
};

export const deleteOption = id => async dispatch => {
    const res = await axios.delete(`/api/v1/options/${id}`);

    dispatch({
        type: DELETE_OPTION,
        payload: res.data
    });
};

export const addOption = (questionId, option) => async dispatch => {
    const res = await axios.post(
        `/api/v1/questions/${questionId}/options`,
        option
    );

    dispatch({
        type: ADD_OPTION,
        payload: res.data
    });

    return res;
};

export const createQuiz = quizChoices => async dispatch => {
    try {
        const res = await axios.post('/api/v1/quizzes', quizChoices);

        console.log(res);

        dispatch({
            type: CREATE_CHOICES,
            payload: res.data
        });
    } catch (err) {
        console.error(err.response.message);
    }
};

export const getMyQuiz = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/quizzes/my_quiz');

        dispatch({
            type: GET_MY_QUIZ,
            payload: res.data
        });
    } catch (err) {
        console.error(err.response);
    }
};
