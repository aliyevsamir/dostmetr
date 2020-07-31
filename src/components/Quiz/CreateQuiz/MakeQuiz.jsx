import React, { useEffect } from 'react';
import {
    loadQuizzes,
    createQuiz,
    getMyQuiz
} from '../../../redux/actions/quizzes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuizModel from '../QuizModel';

const MakeQuiz = ({ quizzes, loadQuizzes, getMyQuiz, history, name }) => {
    useEffect(() => {
        getMyQuiz().then(res => {
            if (res) {
                history.push('/profile');
            } else {
                loadQuizzes();
            }
        });
    }, []);

    return <QuizModel quizzes={quizzes} name={name} />;
};

const mapStateToProps = ({
    quizzes,
    auth: {
        user: { name }
    }
}) => ({
    quizzes,
    name
});

export default connect(mapStateToProps, { loadQuizzes, createQuiz, getMyQuiz })(
    withRouter(MakeQuiz)
);
