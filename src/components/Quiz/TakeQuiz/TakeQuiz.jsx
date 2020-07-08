import React from 'react';
import data from './data';
import QuizModel from '../QuizModel';
import { connect } from 'react-redux';
import Loading from '../../../utils/Loading';
import Register from '../../Register/Register';

const TakeQuiz = ({
    match: {
        params: { quizId }
    },
    loading,
    isAuthenticated
}) => {
    return loading ? (
        <Loading />
    ) : isAuthenticated ? (
        <QuizModel quizzes={data} mode='take' />
    ) : (
        <Register mode='take' />
    );
};

const mapStateToProps = ({ auth: { loading, isAuthenticated } }) => ({
    loading,
    isAuthenticated
});

export default connect(mapStateToProps, null)(TakeQuiz);
