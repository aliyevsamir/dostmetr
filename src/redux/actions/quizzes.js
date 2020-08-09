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
    GET_MY_QUIZ,
    GET_QUIZ_FOR_TAKING,
    GET_SUBMISSION
} from '../types';

export const loadQuizzes = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/questions/options?limit=100');

        dispatch({
            type: LOAD_QUIZZES,
            payload: res.data
        });
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};

export const createQuizzes = quizzes => async dispatch => {
    try {
        const res = await axios.post('/api/v1/questions/options', quizzes);

        dispatch({
            type: CREATE_QUIZZES,
            payload: res.data
        });
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};

export const updateQuestion = (id, newQuestion) => async dispatch => {
    try {
        const question = { question_content: newQuestion };
        const res = await axios.put(`/api/v1/questions/${id}`, question);

        dispatch({
            type: UPDATE_QUESTION,
            payload: res.data
        });
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};

export const deleteQuestion = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/v1/questions/${id}`);

        dispatch({
            type: DELETE_QUESTION,
            payload: res.data
        });
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};

export const updateOption = (id, newOption) => async dispatch => {
    try {
        const res = await axios.put(`/api/v1/options/${id}`, newOption);

        dispatch({
            type: UPDATE_OPTION,
            payload: res.data
        });
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};

export const deleteOption = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/v1/options/${id}`);

        dispatch({
            type: DELETE_OPTION,
            payload: res.data
        });
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};

export const addOption = (questionId, option) => async dispatch => {
    try {
        const res = await axios.post(
            `/api/v1/questions/${questionId}/options`,
            option
        );

        dispatch({
            type: ADD_OPTION,
            payload: res.data
        });

        return res;
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};

export const createQuiz = quizChoices => async dispatch => {
    try {
        console.log(quizChoices);
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

        return res;
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
    }
};

export const getQuizForTaking = quizId => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/quizzes/${quizId}`);

        dispatch({
            type: GET_QUIZ_FOR_TAKING,
            payload: res.data.data
        });
    } catch (err) {
        console.error(JSON.stringify(err.response.data));
        return err;
    }
};

export const getSubmission = (quizId, submissionId) => async dispatch => {
    try {
        const res = await axios.get(
            `/api/v1/quizzes/${quizId}/submissions/${submissionId}`
        );

        dispatch({
            type: GET_SUBMISSION,
            payload: res.data.data.submission
        });
    } catch (error) {
        console.error(JSON.stringify(error.response.data));
    }
};
