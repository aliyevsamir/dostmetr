import React from 'react';
import LeaderboardList from './LeaderboardList/LeaderboardList';
import LeaderboardHeader from './LeaderboardHead/LeaderboardHeader';
import { Col, Row } from 'antd';

const Leaderboard = ({ leaderboard, userId }) => {
    const myLeaderboardInfo = leaderboard.find(user => user.user_id == userId);

    if (
        leaderboard.length === 11 &&
        Number(myLeaderboardInfo?.rank) - Number(leaderboard[9]['rank']) > 1
    ) {
        leaderboard.pop();

        const placeholder = {
            quiz_submission_id: -1,
            name: '............',
            points: '...',
            rank: '...'
        };

        leaderboard.push(placeholder);
        leaderboard.push(myLeaderboardInfo);
    }

    return (
        <>
            <Row
                style={{
                    borderRadius: '.5rem',
                    backgroundColor: '#fff',
                    color: '#110',
                    padding: '1rem 2rem',
                    margin: '.5rem 0',
                    boxShadow: '0px 1px 1px rgba(0,0,0,.3)'
                }}
            >
                <Col span={24}>
                    <LeaderboardHeader myLeaderboardInfo={myLeaderboardInfo} />
                </Col>
            </Row>
            <Row
                span={24}
                style={{
                    borderRadius: '.5rem',
                    backgroundColor: '#fff',
                    color: '#110',
                    margin: '.5rem 0',
                    boxShadow: '0px 1px 1px rgba(0,0,0,.3)',
                    textAlign: 'center',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1rem',
                    padding: '1rem 2rem',
                    marginTop: '10px'
                }}
            >
                <Col span={24}>
                    <LeaderboardList leaderboard={leaderboard} />
                </Col>
            </Row>
        </>
    );
};

export default Leaderboard;
