import React from 'react';
import { Col, Row } from 'antd';
import Loading from '../../../utils/Loading';

const LeaderboardHeader = ({ myLeaderboardInfo }) => {
    return myLeaderboardInfo ? (
        <Row
            type='flex'
            align='middle'
            style={{
                color: '#fff',
                textAlign: 'center',
                backgroundColor: 'tomato',
                borderRadius: '20px',
                borderBottomRightRadius: '0',
                borderBottomLeftRadius: '0',
                padding: '1rem',
                fontSize: '25px',
                fontWeight: '900',
                fontFamily: 'Francois One, sans-serif',
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
