import React from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import QuizTemplate2 from '../QuizTamplate2/QuizTemplate2';
import { getLeaderboard } from '../../redux/actions/leaderboard';
import { getMyQuiz, getSubmission } from '../../redux/actions/quizzes';
import { useEffect } from 'react';
import Leaderboard from '../Leaderboard/Leaderboard';
import './QuizSubmissions.scss';
import { withRouter, Link } from 'react-router-dom';
import Loading from '../../utils/Loading';
import { useState } from 'react';
import isEmpty from '../../utils/isEmpty';

const QuizSubmissions = props => {
    const {
        getLeaderboard,
        leaderboard,
        getMyQuiz,
        userId,
        match: {
            params: { quizId, submissionId }
        }
    } = props;

    const [loading, setLoading] = useState(true);
    const [haveQuiz, setHaveQuiz] = useState(false);
    const [submission, setSubmission] = useState({});

    useEffect(() => {
        getSubmission();
        checkHaveQuiz();
    }, []);

    const checkHaveQuiz = async () => {
        const res = await getMyQuiz();
        if (res?.data.data.length) setHaveQuiz(true);
        setLoading(false);
    };

    const getSubmission = async () => {
        const submission = await props.getSubmission(quizId, submissionId);

        setSubmission(submission);
    };

    useEffect(() => {
        if (userId) {
            getLeaderboard(quizId, userId, 10);
        }
    }, []);

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
            <Col
                xs={22}
                sm={20}
                md={16}
                lg={12}
                xl={8}
                style={{
                    padding: '1rem',
                    height: '100%'
                }}
            >
                <Row>
                    <Col span={24} style={{ height: '100%' }}>
                        {!haveQuiz && (
                            <Col span={24} style={{ padding: '1rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <h3>
                                        Sən də öz quizini hazırla və paylaş !
                                    </h3>
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
                            span={24}
                            style={{
                                margin: '.5rem 0',
                                height: '100%'
                            }}
                        >
                            <Leaderboard
                                leaderboard={leaderboard}
                                userId={userId}
                            />
                        </Col>
                    </Col>
                </Row>
            </Col>

            {!isEmpty(submission) && (
                <Col
                    xs={22}
                    sm={20}
                    md={16}
                    lg={12}
                    xl={8}
                    className='right-side'
                    style={{
                        padding: '0 1rem',
                        margin: '0',
                        height: '100%'
                    }}
                >
                    <QuizTemplate2
                        questions={submission.submission}
                        type='submission'
                        name={submission.created_by}
                    />
                </Col>
            )}
        </Row>
    );
};

const mapStateToProps = ({
    leaderboard: { leaderboard },
    auth: {
        user: { user_id }
    }
}) => ({
    userId: user_id,
    leaderboard
});

export default connect(mapStateToProps, {
    getLeaderboard,
    getMyQuiz,
    getSubmission
})(withRouter(QuizSubmissions));
