import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Quiz from './Quiz';
import Loading from '../../utils/Loading';
import { Row, Col } from 'antd';
import CreateQuiz from '../utils/Modal/CreateQuiz';
import { updateQuestion, loadQuizzes } from '../../redux/actions/quizzes';

const Quizzes = props => {
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        props.loadQuizzes();
    }, []);

    useEffect(() => {
        setQuizzes(props.quizzes);
    }, [props.quizzes]);

    const handleChange = (e, quizIndex, isQuestion, answerIndex) => {
        let newQuizzes = [...quizzes];

        if (isQuestion) {
            newQuizzes[quizIndex].question_content = e.target.value;
            setQuizzes(newQuizzes);
            props.updateQuestion(
                newQuizzes[quizIndex].question_id,
                newQuizzes[quizIndex].question_content
            );
        } else {
            newQuizzes[quizIndex].options[answerIndex].option_content =
                e.target.value;
            setQuizzes(newQuizzes);
        }
    };

    const handleDelete = index => {
        let newQuizzes = quizzes.filter(quiz => quiz.question_id !== index);

        setQuizzes(newQuizzes);
    };

    const template = quizzes.length ? (
        <Row type='flex' justify='center' className='quizzes-container'>
            <Col span={24}>
                <CreateQuiz />
            </Col>
            <Col span={24}>
                {quizzes.map((quiz, index) => (
                    <Quiz
                        quiz={quiz}
                        key={index}
                        quizIndex={index}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                    />
                ))}
            </Col>
        </Row>
    ) : (
        <Loading />
    );
    return !props.isOpen && template;
};

const mapStateToProps = ({ quizzes: { quizzes } }) => ({
    quizzes
});

export default connect(mapStateToProps, { loadQuizzes, updateQuestion })(
    Quizzes
);
