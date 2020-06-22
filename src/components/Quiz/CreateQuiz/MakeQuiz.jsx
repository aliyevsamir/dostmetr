import React, { useState } from 'react';
import { Row } from 'antd';
import QuizTemplate from '../QuizTemplates/QuizTemplate';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { loadQuizzes } from '../../../redux/actions/quizzes';
import Loading from '../../../utils/Loading';

const MakeQuiz = ({ quizzes, loadQuizzes }) => {
    const [state, setState] = useState({
        currentQuestionID: 0,
        selectedAnswers: 0
    });

    const [quizSubmissions, setQuizSubmissions] = useState({});

    useEffect(() => {
        loadQuizzes();
    }, []);

    const [optionValue, setOptionValue] = useState(null);

    const handleOptionChange = e => {
        setOptionValue(e.target.value);
    };

    const nextQuestion = () => {
        if (optionValue) {
            const { currentQuestionID } = state;
            const newQuizSubmissions = { ...quizSubmissions };

            newQuizSubmissions[
                quizzes[currentQuestionID].question_id
            ] = optionValue;

            setQuizSubmissions(newQuizSubmissions);
            setOptionValue(null);

            const newQuestions = [...quizzes];
            newQuestions[currentQuestionID].selected = true;

            if (currentQuestionID < quizzes.length - 1) {
                let newQuiz = newQuestions
                    .slice(currentQuestionID + 1)
                    .find(quiz => quiz.selected !== true);

                if (!newQuiz) {
                    newQuiz = newQuestions
                        .slice(0, currentQuestionID)
                        .find(quiz => quiz.selected !== true);
                }

                if (newQuiz) {
                    let newQuizIndex = newQuestions.findIndex(
                        question => question.question_id === newQuiz.question_id
                    );

                    setState({
                        currentQuestionID: newQuizIndex,
                        selectedAnswers: state.selectedAnswers + 1
                    });

                    quizzes = newQuestions;
                } else {
                    alert('You have already answered all questions');
                }
            } else {
                // last question
                const newQuiz = newQuestions.find(
                    quiz => quiz.selected !== true
                );

                if (newQuiz) {
                    let newQuizIndex = newQuestions.findIndex(
                        question => question.question_id === newQuiz.question_id
                    );

                    setState({
                        currentQuestionID: newQuizIndex,
                        selectedAnswers: state.selectedAnswers + 1
                    });

                    quizzes = newQuestions;
                } else {
                    alert('You have already answered all questions');
                }
            }
        } else {
            alert('You can not leave blank answer');
        }
    };

    const skipQuestion = () => {
        const { currentQuestionID } = state;

        if (currentQuestionID < quizzes.length - 1) {
            let newQuiz = quizzes
                .slice(currentQuestionID + 1)
                .find(quiz => quiz.selected !== true);

            if (!newQuiz) {
                newQuiz = quizzes
                    .slice(0, currentQuestionID + 1)
                    .find(quiz => quiz.selected !== true);
            }

            let newQuizIndex = quizzes.findIndex(
                question => question.question_id === newQuiz.question_id
            );

            setState({
                ...state,
                currentQuestionID: newQuizIndex
            });
        } else {
            const newQuiz = quizzes.find(quiz => quiz.selected !== true);

            let newQuizIndex = quizzes.findIndex(
                question => question.question_id === newQuiz.question_id
            );

            setState({
                ...state,
                currentQuestionID: newQuizIndex
            });
        }
    };

    const { questions, currentQuestionID, selectedAnswers } = state;

    return !quizzes.length ? (
        <Loading />
    ) : (
        <Row
            type='flex'
            align='middle'
            justify='center'
            style={{
                minHeight: '100vh',
                background: 'linear-gradient:(to-right, #004e92, #000428)'
            }}
        >
            <QuizTemplate
                quiz={quizzes[currentQuestionID]}
                currentQuestionID={currentQuestionID}
                skipQuestion={skipQuestion}
                nextQuestion={nextQuestion}
                selectedAnswers={selectedAnswers}
                handleOptionChange={handleOptionChange}
                optionValue={optionValue}
            />
        </Row>
    );
};

export default connect(
    ({ quizzes }) => ({
        quizzes
    }),
    { loadQuizzes }
)(MakeQuiz);
