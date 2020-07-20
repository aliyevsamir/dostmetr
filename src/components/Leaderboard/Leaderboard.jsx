import React from 'react';
import LeaderboardList from './LeaderboardList/LeaderboardList';
import LeaderboardHeader from './LeaderboardHead/LeaderboardHeader';
import { Col, Row } from 'antd';

const Leaderboard = ({ leaderboard, userId }) => {
    const myLeaderboardInfo = leaderboard.find(user => user.user_id == userId);

    if (leaderboard.length === 4) {
        leaderboard.pop();

        const placeholder = {
            quiz_submission_id: -1,
            name: '............',
            points: '...',
            rank: '...'
        };

        leaderboard.push(placeholder, myLeaderboardInfo);
    }

    return (
        <Row>
            <Col span={24}>
                <LeaderboardHeader myLeaderboardInfo={myLeaderboardInfo} />
            </Col>
            <Col
                span={24}
                style={{
                    backgroundColor: '#000',
                    borderBottomRightRadius: '20px',
                    borderBottomLeftRadius: '20px'
                }}
            >
                <LeaderboardList leaderboard={leaderboard} />
            </Col>
        </Row>
    );
};

export default Leaderboard;
