import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Quiz from './Quiz';
import Loading from '../../utils/Loading';
import { Row, Col } from 'antd';
import {
    updateQuestion,
    loadQuizzes,
    deleteQuestion
} from '../../redux/actions/quizzes';

const Quizzes = ({
    quizzes,
    loadQuizzes,
    updateQuestion,
    deleteQuestion,
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
            setQuestions(newQuizzes);
            updateQuestion(
                newQuizzes[quizIndex].question_id,
                newQuizzes[quizIndex].question_content
            );
        } else {
            newQuizzes[quizIndex].options[answerIndex].option_content =
                e.target.value;
            setQuestions(newQuizzes);
        }
    };

    const handleDelete = index => {
        deleteQuestion(index);
    };

    const template = questions.length ? (
        <Col span={24}>
            {questions.map((quiz, index) => (
                <Quiz
                    quiz={quiz}
                    key={index}
                    quizIndex={index}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
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
    deleteQuestion
})(Quizzes);
