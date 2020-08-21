import React, { useState } from 'react';
import LeaderboardListItem from '../LeaderboardListItem';
import { getSubmission } from '../../../redux/actions/quizzes';
import { connect } from 'react-redux';
import Loading from '../../../utils/Loading';
import QuizTemplate2 from '../../QuizTamplate2/QuizTemplate2';
import Modal from 'antd/lib/modal/Modal';
import { Col } from 'antd';

const LeaderboardList = ({ leaderboard, showSubmission, getSubmission }) => {
    const [content, setContent] = useState(null);
    const [showQuizSubmission, setShowQuizSubmission] = useState(false);

    const handleClose = () => {
        setShowQuizSubmission(false);
        setContent(null);
    };

    const handleOnItemClick = async (quizId, submissionId) => {
        setShowQuizSubmission(true);

        const submission = await getSubmission(quizId, submissionId);

        setContent(
            <QuizTemplate2
                questions={submission.submission}
                type='submission'
                name={submission.created_by}
            />
        );
    };

    const leaderboardList = leaderboard.map(user => (
        <LeaderboardListItem
            key={user.quiz_submission_id}
            user={user}
            showQuizSubmission={showQuizSubmission}
            showSubmission={showSubmission}
            handleOnItemClick={handleOnItemClick}
            handleClose={handleClose}
            content={content}
        />
    ));

    return (
        <>
            {leaderboardList}

            {showSubmission && (
                <Modal
                    visible={showQuizSubmission}
                    onCancel={handleClose}
                    onOk={handleClose}
                    cancelButtonProps={{ danger: true }}
                    cancelText='Çıx'
                >
                    <Col span={24}>{content ? content : <Loading />}</Col>
                </Modal>
            )}
        </>
    );
};

export default connect(null, { getSubmission })(LeaderboardList);
