import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Row, message } from 'antd';
import QuizTemplate from './QuizTemplates/QuizTemplate';
import Loading from '../../utils/Loading';
import { withRouter } from 'react-router-dom';
import { createQuiz, submitQuiz } from '../../redux/actions/quizzes';
import { useEffect } from 'react';
import isEmpty from '../../utils/isEmpty';

const QuizModel = ({
    mode = 'make',
    quizzes = [],
    createQuiz,
    submitQuiz,
    history,
    name,
    quizId = null
}) => {
    const [optionValue, setOptionValue] = useState(null);
    const [quizSubmissions, setQuizSubmissions] = useState({});
    const [finalQuizSubmission, setFinalQuizSubmission] = useState({});
    const [loading, setLoading] = useState(false);

    const [state, setState] = useState({
        currentQuestionID: 0,
        selectedAnswers: 0
    });

    useEffect(() => {
        if (!isEmpty(finalQuizSubmission)) {
            setLoading(true);
            if (mode === 'make') {
                createQuiz(finalQuizSubmission).then(() => {
                    history.push('/profile');
                });
            } else {
                submitQuiz(quizId, finalQuizSubmission).then(() => {
                    history.push({
                        pathname: `/quizzes/${quizId}/submissions`,
                        state: { name }
                    });
                });
            }
        }
    }, [finalQuizSubmission]);

    const handleOptionChange = e => {
        setOptionValue(e.target.value);
    };

    const newQuizSubmissions = (type = 'not final') => {
        if (type === 'final') {
            const newQuizSubmissions = { ...quizSubmissions };

            newQuizSubmissions[
                quizzes[state.currentQuestionID].question_id
            ] = optionValue;

            setFinalQuizSubmission({
                quizChoices: {
                    ...newQuizSubmissions
                }
            });
        } else {
            const newQuizSubmissions = { ...quizSubmissions };

            newQuizSubmissions[
                quizzes[state.currentQuestionID].question_id
            ] = optionValue;

            setQuizSubmissions(newQuizSubmissions);
            setOptionValue(null);
        }
    };

    const handleFinishQuiz = () => {
        if (mode === 'make') {
            if (optionValue) {
                newQuizSubmissions('final');
            } else {
                setFinalQuizSubmission({
                    quizChoices: {
                        ...quizSubmissions
                    }
                });
            }
        } else if (mode === 'take') {
            if (optionValue) {
                newQuizSubmissions('final');
            } else {
                message.error('Cavablandırdıqdan sonra quizi tamamlayın 😊');
            }
        }
    };

    const nextQuestion = () => {
        if (optionValue) {
            const { currentQuestionID } = state;
            newQuizSubmissions();

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

    return !quizzes.length || loading ? (
        <Loading />
    ) : (
        <Row
            type='flex'
            align='middle'
            justify='center'
            style={{
                minHeight: '100vh',
                backgroundImage:
                    'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
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
                handleFinishQuiz={handleFinishQuiz}
                mode={mode}
                name={name}
            />
        </Row>
    );
};

export default connect(null, { createQuiz, submitQuiz })(withRouter(QuizModel));
