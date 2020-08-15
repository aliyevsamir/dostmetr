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

const User = ({ user, getSubmission, showSubmission }) => {
    const [content, setContent] = useState({
        loading: false,
        content: null
    });

    const handleClick = async (quizId, submissionId) => {
        setContent({
            loading: true,
            content: null
        });

        const submission = await getSubmission(quizId, submissionId);

        setContent({
            loading: false,
            content: (
                <QuizTemplate2
                    questions={submission.submission}
                    type='submission'
                    name={submission.created_by}
                    from='profile'
                />
            )
        });
    };
    const additionalProps = showSubmission
        ? {
              style: { cursor: 'pointer' },
              onClick: () => handleClick(user.quiz_id, user.quiz_submission_id)
          }
        : {};

    return (
        <Row
            type='flex'
            justify='center'
            align='middle'
            {...additionalProps}
            style={{ lineHeight: '50px' }}
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
                    lineHeight: '1'
                }}
            >
                {user.name}
            </Col>
            <Col span={4} style={{ color: 'tomato' }}>
                {user.points}
            </Col>
            {!content.loading && content.content ? (
                <Col span={24} style={{}}>
                    {content.content}
                </Col>
            ) : content.loading && !content.content ? (
                <Col span={24}>
                    <Loading />
                </Col>
            ) : null}
        </Row>
    );
};

const mapDispatchToProps = {
    getSubmission
};

export default connect(null, mapDispatchToProps)(User);
