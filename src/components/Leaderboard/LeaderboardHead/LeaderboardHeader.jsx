import React from 'react';
import { Col, Row } from 'antd';
import Loading from '../../../utils/Loading';

const LeaderboardHeader = ({ myLeaderboardInfo }) => {
    return myLeaderboardInfo ? (
        <Row
            type='flex'
            align='middle'
            style={{
                textAlign: 'center',
                padding: '1rem',
                fontSize: '1.1rem',
                fontFamily: 'Roboto, sans-serif',
                justifyContent: 'space-between',
                letterSpacing: '2px',
                fontWeight: '500',
                textTransform: 'uppercase'
            }}
        >
            <Col span={6}>
                <Row type='flex' justify='center' align='middle'>
                    <Col span={24}>REYTİNQ</Col>
                    <Col span={24}>{myLeaderboardInfo.rank}</Col>
                </Row>
            </Col>
            <Col span={6}>
                <Row type='flex' justify='center' align='middle'>
                    <Col span={24}>Xal</Col>
                    <Col span={24}>{myLeaderboardInfo.points}</Col>
                </Row>
            </Col>
        </Row>
    ) : (
        <Loading />
    );
};

export default LeaderboardHeader;
