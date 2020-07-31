import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuizTemplate2 from '../QuizTamplate2/QuizTemplate2';
import { getLeaderboard } from '../../redux/actions/leaderboard';
import { useEffect } from 'react';
import Leaderboard from '../Leaderboard/Leaderboard';
import './QuizSubmissions.scss';
import { withRouter } from 'react-router-dom';

const QuizSubmissions = ({
    questions,
    questions: { submission, quiz_id, user_id },
    getLeaderboard,
    leaderboard,
    history: {
        location: {
            state: { name }
        }
    }
}) => {
    useEffect(() => {
        if (user_id) {
            getLeaderboard(quiz_id, user_id);
        }
    }, [user_id]);

    return (
        <Row
            gutter={6}
            type='flex'
            justify='center'
            style={{
                backgroundColor: '#F0F2F5',
                minHeight: '100vh'
            }}
        >
            <Col
                xs={22}
                sm={20}
                md={16}
                lg={12}
                xl={8}
                style={{
                    padding: '2rem',
                    margin: '.5rem 0',
                    height: '100%'
                }}
            >
                <Leaderboard leaderboard={leaderboard} userId={user_id} />
            </Col>

            {submission && (
                <Col
                    xs={22}
                    sm={20}
                    md={16}
                    lg={12}
                    xl={8}
                    className='right-side'
                    style={{
                        padding: '1rem',
                        margin: '0',
                        height: '100%'
                    }}
                >
                    <QuizTemplate2
                        questions={submission}
                        type='submission'
                        name={'Samir'}
                    />
                </Col>
            )}
        </Row>
    );
};

const mapStateToProps = ({ quizzes, leaderboard }) => ({
    questions: quizzes,
    leaderboard
});

QuizSubmissions.propTypes = {
    questions: PropTypes.object,
    getLeaderboard: PropTypes.func,
    leaderboard: PropTypes.array
};

export default connect(mapStateToProps, { getLeaderboard })(
    withRouter(QuizSubmissions)
);
