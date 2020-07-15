import React from 'react';
import QuizModel from '../QuizModel';
import { connect } from 'react-redux';
import Loading from '../../../utils/Loading';
import Register from '../../Register/Register';
import { useEffect } from 'react';
import { getQuizForTaking } from '../../../redux/actions/quizzes';

const TakeQuiz = ({
    match: {
        params: { quizId }
    },
    loading,
    isAuthenticated,
    getQuizForTaking,
    quizzes
}) => {
    useEffect(() => {
        if (isAuthenticated) {
            (async function() {
                await getQuizForTaking(quizId);
            })();
        }
    }, [isAuthenticated]);

    return loading ? (
        <Loading />
    ) : isAuthenticated ? (
        <QuizModel quizzes={quizzes} mode='take' quizId={quizId} />
    ) : (
        <Register mode='take' />
    );
};

const mapStateToProps = ({ auth: { loading, isAuthenticated }, quizzes }) => ({
    loading,
    isAuthenticated,
    quizzes
});

export default connect(mapStateToProps, { getQuizForTaking })(TakeQuiz);
