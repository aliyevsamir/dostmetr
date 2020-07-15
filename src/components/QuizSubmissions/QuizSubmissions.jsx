import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuizTemplate2 from '../QuizTamplate2/QuizTemplate2';

const QuizSubmissions = ({ questions }) => {
    return (
        <Row gutter={6}>
            <Col span={13}>
                <h1>Leaderboard</h1>
            </Col>
            <Col span={9}>
                {questions.length && (
                    <QuizTemplate2 questions={questions} type='submission' />
                )}
            </Col>
        </Row>
    );
};

const mapStateToProps = ({ quizzes }) => ({
    questions: quizzes
});

QuizSubmissions.propTypes = {
    questions: PropTypes.array
};

export default connect(mapStateToProps, null)(QuizSubmissions);
