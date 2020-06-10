import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Quiz from './Quiz';
import Loading from '../../utils/Loading';
import { Row, Col } from 'antd';
import MyModal from '../utils/Modal/MyModal';

const Quizzes = props => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        setQuizzes(props.quizzes);
    }, [props.quizzes]);

    const handleChange = (e, quizIndex, isQuestion, answerIndex) => {
        let newQuizzes = [...quizzes];

        if (isQuestion) {
            newQuizzes[quizIndex].question = e.target.value;
            setQuizzes(newQuizzes);
        } else {
            newQuizzes[quizIndex].answers[answerIndex] = e.target.value;
            setQuizzes(newQuizzes);
        }
    };

    const handleDelete = index => {
        let newQuizzes = quizzes.filter(quiz => quiz.question_id !== index);

        setQuizzes(newQuizzes);
    };

    const template = quizzes ? (
        <Row className='quizzes-container'>
            <Col xs={20} sm={18} md={16} lg={14} xl={12}>
                <MyModal />
            </Col>
            {quizzes.map((quiz, index) => (
                <Quiz
                    quiz={quiz}
                    key={index}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                />
            ))}
        </Row>
    ) : (
        <Loading />
    );
    return template;
};

const mapStateToProps = ({ quizzes: { quizzes } }) => ({
    quizzes
});

export default connect(mapStateToProps, null)(Quizzes);
