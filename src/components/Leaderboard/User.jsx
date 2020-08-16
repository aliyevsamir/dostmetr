import React from 'react';
import { Row, Col, Popover } from 'antd';
import gold from '../../utils/gold.png';
import silver from '../../utils/silver.png';
import bronze from '../../utils/bronze.png';
import { connect } from 'react-redux';
import { getSubmission } from '../../redux/actions/quizzes';
import QuizTemplate2 from '../QuizTamplate2/QuizTemplate2';
import { useState } from 'react';
import Loading from '../../utils/Loading';
import Modal from 'antd/lib/modal/Modal';
import './LeaderboardList.scss';

const User = ({ user, getSubmission, showSubmission }) => {
    const [content, setContent] = useState({
        content: null
    });

    const [showQuizSubmission, setShowQuizSubmission] = useState(false);

    const handleClose = () => {
        setShowQuizSubmission(false);
        setContent({
            content: null
        });
        console.log(showQuizSubmission);
    };

    const handleClick = async (quizId, submissionId) => {
        setContent({
            content: <Loading />
        });

        setShowQuizSubmission(true);

        const submission = await getSubmission(quizId, submissionId);

        setContent({
            loading: false,
            content: (
                <QuizTemplate2
                    questions={submission.submission}
                    type='submission'
                    name={submission.created_by}
                />
            )
        });
    };

    const mainStyle = {
        lineHeight: '50px',
        fontSize: '1.2rem',
        fontWeight: '600',
        width: '100%'
    };
    const additionalProps = showSubmission
        ? {
              style: { cursor: 'pointer', ...mainStyle },
              onClick: () => handleClick(user.quiz_id, user.quiz_submission_id)
          }
        : { style: { ...mainStyle } };

    return (
        <>
            <Row
                type='flex'
                justify='center'
                align='middle'
                {...additionalProps}
            >
                <Col
                    span={4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000'
                    }}
                >
                    {user.rank == 1 ? (
                        <img src={gold} style={{ height: '50px' }} />
                    ) : user.rank == 2 ? (
                        <img src={silver} style={{ height: '50px' }} />
                    ) : user.rank == 3 ? (
                        <img src={bronze} style={{ height: '50px' }} />
                    ) : (
                        user.rank
                    )}
                </Col>
                <Col
                    span={16}
                    style={{
                        textAlign: 'start',
                        lineHeight: '1',
                        padding: '0 1rem'
                    }}
                >
                    {user.name}
                </Col>
                <Col
                    span={4}
                    style={{
                        color: 'tomato',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    {user.points}
                </Col>
            </Row>

            {showQuizSubmission ? (
                <Modal
                    visible={showQuizSubmission}
                    onCancel={handleClose}
                    onOk={handleClose}
                    cancelButtonProps={{ danger: true }}
                    cancelText='Çıx'
                >
                    <Col span={24}>{content.content}</Col>
                </Modal>
            ) : null}
        </>
    );
};

const mapDispatchToProps = {
    getSubmission
};

export default connect(null, mapDispatchToProps)(User);
