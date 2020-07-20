import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuizTemplate2 from '../QuizTamplate2/QuizTemplate2';
import { getLeaderboard } from '../../redux/actions/leaderboard';
import { useEffect } from 'react';
import Leaderboard from '../Leaderboard/Leaderboard';
import './QuizSubmissions.scss';

const QuizSubmissions = ({
    questions: { submission, quiz_id, user_id },
    getLeaderboard,
    leaderboard
}) => {
    useEffect(() => {
        if (user_id) getLeaderboard(quiz_id, user_id);
    }, [user_id]);

    return (
        <Row gutter={6} type='flex' justify='center'>
            <Col
                xs={22}
                sm={16}
                md={12}
                lg={8}
                xl={8}
                style={{
                    margin: '1rem'
                }}
            >
                <Leaderboard leaderboard={leaderboard} userId={user_id} />
            </Col>
            <Col
                xs={22}
                sm={16}
                md={12}
                lg={14}
                xl={14}
                className='right-side'
                style={{
                    backgroundColor: '#ddd',
                    padding: '1rem',
                    borderRadius: '20px'
                }}
            >
                <h1
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                        textAlign: 'center'
                    }}
                >
                    Sizin cavablarınız
                </h1>
                {submission && (
                    <QuizTemplate2 questions={submission} type='submission' />
                )}
            </Col>
        </Row>
    );
};

const mapStateToProps = ({ quizzes, leaderboard }) => ({
    questions: quizzes,
    leaderboard: leaderboard
});

QuizSubmissions.propTypes = {
    questions: PropTypes.object,
    getLeaderboard: PropTypes.func,
    leaderboard: PropTypes.array
};

export default connect(mapStateToProps, { getLeaderboard })(QuizSubmissions);
