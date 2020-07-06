import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Row, message } from 'antd';
import QuizTemplate from './QuizTemplates/QuizTemplate';
import Loading from '../../utils/Loading';
import { withRouter } from 'react-router-dom';
import { createQuiz } from '../../redux/actions/quizzes';

const QuizModel = ({ mode = 'make', quizzes = [], createQuiz, history }) => {
    const [optionValue, setOptionValue] = useState(null);
    const [quizSubmissions, setQuizSubmissions] = useState({});

    const [state, setState] = useState({
        currentQuestionID: 0,
        selectedAnswers: 0
    });

    const handleOptionChange = e => {
        setOptionValue(e.target.value);
    };

    const handleFinishMakeQuiz = async () => {
        if (mode === 'make') {
            const quizChoices = {
                quizChoices: {
                    ...quizSubmissions
                }
            };

            await createQuiz(quizChoices);
            history.push('/profile');
        } else if (mode === 'take') {
            if (optionValue) {
                const newQuizSubmissions = { ...quizSubmissions };

                newQuizSubmissions[
                    quizzes[currentQuestionID].question_id
                ] = optionValue;

                setQuizSubmissions(newQuizSubmissions);
                setOptionValue(null);

                const quizChoices = {
                    quizChoices: {
                        ...quizSubmissions
                    }
                };

                console.log(quizChoices);
            } else message.error('Cavablandırdıqdan sonra quizi tamamlayın 😊');
        }
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
                // not last question
                let newQuiz = newQuestions
                    .slice(currentQuestionID + 1)
                    .find(quiz => quiz.selected !== true);

                if (!newQuiz) {
                    newQuiz = newQuestions
                        .slice(0, currentQuestionID + 1)
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
                    message.warning(
                        'Bütün sualları cavablandırmısınız, quizi tamamlayın 😊'
                    );
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
                    message.warning(
                        'Bütün sualları cavablandırmısınız, quizi tamamlayın 😊'
                    );
                }
            }
        } else {
            message.error(
                "Sualı boş cavablandıra bilməzsiniz, sualı keçmək üçün keç'ə tıklayın 😊"
            );
        }
    };

    const skipQuestion = () => {
        const { currentQuestionID } = state;

        if (currentQuestionID < quizzes.length - 1) {
            // not last question

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
            // last question
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

    const { currentQuestionID, selectedAnswers } = state;

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
                quizLength={quizzes.length}
                handleOptionChange={handleOptionChange}
                optionValue={optionValue}
                handleFinishMakeQuiz={handleFinishMakeQuiz}
                mode={mode}
            />
        </Row>
    );
};

const mapDispatchToProps = {
    createQuiz
};

export default connect(null, mapDispatchToProps)(withRouter(QuizModel));
