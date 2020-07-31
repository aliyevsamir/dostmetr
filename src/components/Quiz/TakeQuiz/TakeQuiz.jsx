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
    user,
    getQuizForTaking,
    quiz,
    created_by
}) => {
    useEffect(() => {
        getQuizForTaking(quizId);
    }, []);

    return loading ? (
        <Loading />
    ) : isAuthenticated ? (
        <QuizModel
            quizzes={quiz}
            mode='take'
            quizId={quizId}
            name={created_by}
        />
    ) : (
        <Register mode='take' createdBy={created_by} />
    );
};

const mapStateToProps = ({
    auth: { user, loading, isAuthenticated },
    quizzes: { created_by, quiz }
}) => ({
    user,
    loading,
    isAuthenticated,
    quiz,
    created_by
});

export default connect(mapStateToProps, { getQuizForTaking })(TakeQuiz);
