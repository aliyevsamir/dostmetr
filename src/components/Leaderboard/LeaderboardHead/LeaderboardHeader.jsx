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
                fontWeight: '300',
                textTransform: 'uppercase'
            }}
        >
            <Col span={6}>
                <Row type='flex' justify='center' align='middle'>
                    <Col span={24}>Reytinq</Col>
                    <Col span={24}>{myLeaderboardInfo.rank}</Col>
                </Row>
            </Col>
            <Col span={12}>{myLeaderboardInfo.name}</Col>
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
