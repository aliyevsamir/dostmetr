import React, { useState } from 'react';
import quizData from './quizzes';
import { Row } from 'antd';
import './MakeQuiz.scss';
import QuizTemplate from '../QuizTemplates/QuizTemplate';

const MakeQuiz = ({ quizProp = quizData }) => {
    const [state, setState] = useState({
        currentQuestionID: 0,
        selectedAnswers: 0,
        quizzes: quizProp
    });

    const nextQuestion = () => {
        const { currentQuestionID } = state;

        const newQuizzes = state.quizzes.map(quiz => {
            return quiz.question_id === currentQuestionID
                ? { ...quiz, selected: true }
                : { ...quiz };
        });

        if (currentQuestionID < state.quizzes.length - 1) {
            let newQuizIndex = state.quizzes
                .slice(currentQuestionID + 1)
                .find(quiz => quiz.selected !== true);

            if (!newQuizIndex) {
                newQuizIndex = state.quizzes
                    .slice(0, currentQuestionID)
                    .find(quiz => quiz.selected !== true);
            }

            if (newQuizIndex || newQuizIndex === 0) {
                setState({
                    currentQuestionID: newQuizIndex.question_id,
                    selectedAnswers: state.selectedAnswers + 1,
                    quizzes: newQuizzes
                });
            } else {
                alert('You have already answered all questions');
            }
        } else {
            // last question
            const newQuizIndex = state.quizzes.find(
                quiz => quiz.selected !== true
            );

            if (newQuizIndex || newQuizIndex === 0) {
                setState({
                    currentQuestionID: newQuizIndex.question_id,
                    selectedAnswers: state.selectedAnswers + 1,
                    quizzes: newQuizzes
                });
            } else {
                alert('You have already answered all questions');
            }
        }
    };

    const skipQuestion = () => {
        const { currentQuestionID, quizzes } = state;

        if (currentQuestionID < quizzes.length - 1) {
            let newQuizIndex = quizzes
                .slice(currentQuestionID + 1)
                .find(quiz => quiz.selected !== true);

            if (!newQuizIndex) {
                newQuizIndex = quizzes
                    .slice(0, currentQuestionID)
                    .find(quiz => quiz.selected !== true);
            }

            setState({
                ...state,
                currentQuestionID: newQuizIndex.question_id
            });
        } else {
            const newQuizIndex = state.quizzes.find(
                quiz => quiz.selected !== true
            );

            setState({
                ...state,
                currentQuestionID: newQuizIndex.question_id
            });
        }
    };

    const { quizzes, currentQuestionID } = state;
    return (
        <Row className='quiz-container'>
            <QuizTemplate
                quiz={quizzes[currentQuestionID]}
                skipQuestion={skipQuestion}
                nextQuestion={nextQuestion}
                selectedAnswers={state.selectedAnswers}
            />
        </Row>
    );
};

export default MakeQuiz;
