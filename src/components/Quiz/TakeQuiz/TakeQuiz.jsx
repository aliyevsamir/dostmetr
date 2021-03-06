import React from 'react';
import QuizModel from '../QuizModel';
import { connect } from 'react-redux';
import Loading from '../../../utils/Loading';
import Register from '../../Register/Register';
import { useEffect } from 'react';
import { getQuizForTaking } from '../../../redux/actions/quizzes';
import { withRouter } from 'react-router-dom';

const TakeQuiz = ({
    match: {
        params: { quizId }
    },
    history,
    loading,
    isAuthenticated,
    user,
    getQuizForTaking,
    quiz,
    created_by
}) => {
    useEffect(() => {
        checkForTaking();
    }, []);

    const checkForTaking = async () => {
        try {
            const res = await getQuizForTaking(quizId);
            console.log(res);
        } catch (error) {
            console.log(error);
            history.push('/profile');
        }
    };

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

export default connect(mapStateToProps, { getQuizForTaking })(
    withRouter(TakeQuiz)
);
