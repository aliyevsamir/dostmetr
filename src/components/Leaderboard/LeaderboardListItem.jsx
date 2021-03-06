import React from 'react';
import { Row, Col } from 'antd';
import gold from '../../utils/gold.png';
import silver from '../../utils/silver.png';
import bronze from '../../utils/bronze.png';
import Modal from 'antd/lib/modal/Modal';
import './LeaderboardList.scss';
import Loading from '../../utils/Loading';

const LeaderboardListItem = ({ user, handleOnItemClick, showSubmission }) => {
    const mainStyle = {
        lineHeight: '50px',
        fontSize: '1.2rem',
        fontWeight: '600',
        width: '100%'
    };

    const additionalProps = showSubmission
        ? {
              style: { cursor: 'pointer', ...mainStyle },
              onClick: () =>
                  handleOnItemClick(user.quiz_id, user.quiz_submission_id)
          }
        : { style: { ...mainStyle } };

    return (
        <Row type='flex' justify='center' align='middle' {...additionalProps}>
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
    );
};

export default LeaderboardListItem;
