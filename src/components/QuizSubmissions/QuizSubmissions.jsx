import React from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuizTemplate2 from '../QuizTamplate2/QuizTemplate2';
import { getLeaderboard } from '../../redux/actions/leaderboard';
import { getMyQuiz } from '../../redux/actions/quizzes';
import { useEffect } from 'react';
import Leaderboard from '../Leaderboard/Leaderboard';
import './QuizSubmissions.scss';
import { withRouter, Link } from 'react-router-dom';
import Loading from '../../utils/Loading';
import { useState } from 'react';

const QuizSubmissions = ({
    questions: { submission, quiz_id, user_id },
    getLeaderboard,
    leaderboard,
    history,
    getMyQuiz,
    history: {
        location: { state }
    }
}) => {
    const [loading, setLoading] = useState(true);
    const [haveQuiz, setHaveQuiz] = useState(true);

    useEffect(() => {
        getMyQuiz().then(res => {
            if (res && (res.status !== '200' || !res.statusText === 'OK'))
                setHaveQuiz(false);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (!state) {
            history.push('/profile');
        }
    });

    useEffect(() => {
        if (user_id) {
            getLeaderboard(quiz_id, user_id);
        }
    }, [user_id]);

    return loading ? (
        <Loading />
    ) : (
        <Row
            gutter={6}
            type='flex'
            justify='center'
            style={{
                backgroundColor: '#F0F2F5',
                minHeight: '100vh'
            }}
        >
            {!haveQuiz && (
                <Col
                    xs={22}
                    sm={20}
                    md={16}
                    lg={12}
                    xl={8}
                    className='suggestion'
                >
                    <div style={{ textAlign: 'center' }}>
                        <h3>Sən də öz quizini hazırla və paylaş !</h3>
                        <Link to='/make-quiz'>
                            <Button
                                type='primary'
                                style={{
                                    borderRadius: '1rem',
                                    border: 'none',
                                    width: '70%',
                                    maxWidth: '200px'
                                }}
                            >
                                Hazırla
                            </Button>
                        </Link>
                    </div>
                </Col>
            )}

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
                        name={state.name}
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

export default connect(mapStateToProps, { getLeaderboard, getMyQuiz })(
    withRouter(QuizSubmissions)
);
