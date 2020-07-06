import React from 'react';
import data from './data';
import QuizModel from '../QuizModel';

const TakeQuiz = ({
    match: {
        params: { quizId }
    }
}) => {
    return <QuizModel quizzes={data} mode='take' />;
};

export default TakeQuiz;
