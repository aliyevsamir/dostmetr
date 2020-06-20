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
        selectedAnswers: 0,
        questions: []
    });

    const [quizSubmissions, setQuizSubmissions] = useState({});

    useEffect(() => {
        loadQuizzes();
        setState({
            ...state,
            questions: quizzes
        });
    }, [quizzes]);

    const [optionValue, setOptionValue] = useState(null);

    const handleOptionChange = e => {
        setOptionValue(e.target.value);
    };

    const nextQuestion = () => {
        if (optionValue) {
            const { currentQuestionID, questions } = state;
            const newQuizSubmissions = { ...quizSubmissions };
            newQuizSubmissions[
                questions[currentQuestionID].question_id
            ] = optionValue;
            setQuizSubmissions(newQuizSubmissions);
            setOptionValue(null);

            const newQuestions = [...questions];
            newQuestions[currentQuestionID].selected = true;

            if (currentQuestionID < questions.length - 1) {
                let newQuiz = newQuestions
                    .slice(currentQuestionID + 1)
                    .find(quiz => quiz.selected !== true);

                if (!newQuiz) {
                    newQuiz = newQuestions
                        .slice(0, currentQuestionID)
                        .find(quiz => quiz.selected !== true);
                }

                if (!newQuiz) {
                    alert('You have already answered all questions');
                } else {
                    let newQuizIndex = newQuestions.findIndex(
                        question => question.question_id === newQuiz.question_id
                    );

                    setState({
                        currentQuestionID: newQuizIndex,
                        selectedAnswers: state.selectedAnswers + 1,
                        questions: newQuestions
                    });
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
                        selectedAnswers: state.selectedAnswers + 1,
                        questions: newQuestions
                    });
                } else {
                    alert('You have already answered all questions');
                }
            }
        } else {
            alert('You can not leave blank answer');
        }
    };

    const skipQuestion = () => {
        const { currentQuestionID, questions } = state;

        if (currentQuestionID < questions.length - 1) {
            let newQuiz = questions
                .slice(currentQuestionID + 1)
                .find(quiz => quiz.selected !== true);

            if (!newQuiz) {
                newQuiz = questions
                    .slice(0, currentQuestionID + 1)
                    .find(quiz => quiz.selected !== true);
            }

            let newQuizIndex = questions.findIndex(
                question => question.question_id === newQuiz.question_id
            );

            setState({
                ...state,
                currentQuestionID: newQuizIndex
            });
        } else {
            const newQuiz = questions.find(quiz => quiz.selected !== true);

            let newQuizIndex = questions.findIndex(
                question => question.question_id === newQuiz.question_id
            );

            setState({
                ...state,
                currentQuestionID: newQuizIndex
            });
        }
    };

    const { questions, currentQuestionID, selectedAnswers } = state;

    return !questions.length ? (
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
                quiz={questions[currentQuestionID]}
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
    ({ quizzes: { quizzes } }) => ({
        quizzes
    }),
    { loadQuizzes }
)(MakeQuiz);
