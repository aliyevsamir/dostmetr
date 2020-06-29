import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Quiz from './Quiz';
import Loading from '../../utils/Loading';
import { Row, Col } from 'antd';
import {
    updateQuestion,
    loadQuizzes,
    deleteQuestion,
    updateOption,
    deleteOption
} from '../../redux/actions/quizzes';

const Quizzes = ({
    quizzes,
    loadQuizzes,
    updateQuestion,
    updateOption,
    deleteQuestion,
    deleteOption,
    isOpen
}) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        loadQuizzes();
    }, []);

    useEffect(() => {
        setQuestions(quizzes);
    }, [quizzes]);

    const handleChange = (e, quizIndex, isQuestion, answerIndex) => {
        let newQuizzes = [...questions];

        if (isQuestion) {
            newQuizzes[quizIndex].question_content = e.target.value;

            updateQuestion(
                newQuizzes[quizIndex].question_id,
                newQuizzes[quizIndex].question_content
            );

            setQuestions(newQuizzes);
        } else {
            newQuizzes[quizIndex].options[answerIndex].option_content =
                e.target.value;
            updateOption(newQuizzes[quizIndex].options[answerIndex].option_id, {
                option_content: e.target.value
            });
            setQuestions(newQuizzes);
        }
    };

    const handleDelete = questionId => {
        deleteQuestion(questionId);
    };

    const handleDeleteOption = async optionId => {
        await deleteOption(optionId);
        loadQuizzes();
    };

    const template = questions.length ? (
        <Col span={24}>
            {questions.map((quiz, index) => (
                <Quiz
                    quiz={quiz}
                    key={quiz.question_id}
                    quizIndex={index}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                    handleDeleteOption={handleDeleteOption}
                />
            ))}
        </Col>
    ) : (
        <Loading />
    );
    return (
        !isOpen && (
            <Row type='flex' justify='center' className='quizzes-container'>
                {template}
            </Row>
        )
    );
};

const mapStateToProps = ({ quizzes }) => ({
    quizzes
});

export default connect(mapStateToProps, {
    loadQuizzes,
    updateQuestion,
    updateOption,
    deleteQuestion,
    deleteOption
})(Quizzes);
