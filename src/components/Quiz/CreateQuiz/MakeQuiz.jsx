import React, { useEffect } from 'react';
import {
    loadQuizzes,
    createQuiz,
    getMyQuiz
} from '../../../redux/actions/quizzes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuizModel from '../QuizModel';

const MakeQuiz = ({
    quizzes,
    loadQuizzes,
    createQuiz,
    getMyQuiz,
    userQuiz,
    history
}) => {
    useEffect(() => {
        loadQuizzes();
        getMyQuiz();
    }, []);

    useEffect(() => {
        if (userQuiz.length) history.push('/profile');
    }, [userQuiz]);

    return <QuizModel quizzes={quizzes} />;
};

export default connect(
    ({ quizzes, auth: { userQuiz } }) => ({
        quizzes,
        userQuiz
    }),
    { loadQuizzes, createQuiz, getMyQuiz }
)(withRouter(MakeQuiz));
