import quizzes from '../../components/Quiz/CreateQuiz/quizzes';
import axios from 'axios';
import {
    LOAD_QUIZZES,
    CREATE_QUIZZES,
    UPDATE_QUESTION,
    DELETE_QUESTION,
    UPDATE_OPTION,
    DELETE_OPTION
} from '../types';

export const loadQuizzes = () => async dispatch => {
    // const res = await axios.get('/api/v1/questions/options');

    // dispatch({
    //     type: LOAD_QUIZZES,
    //     payload: res.data
    // });

    dispatch({
        type: LOAD_QUIZZES,
        payload: quizzes
    });
};

export default createQuizzes = quizzes => async dispatch => {
    const res = await axios.post('/api/v1/questions/options', quizzes);

    dispatch({
        type: CREATE_QUIZZES,
        payload: res.data
    });
};

export const updateQuestion = (id, newQuestion) => async dispatch => {
    const res = await axios.put(`/api/v1/questions/${id}`, newQuestion);

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
