import React from 'react';
import User from '../User';

const LeaderboardList = ({ leaderboard }) => {
    return leaderboard.map(user => (
        <User key={user.quiz_submission_id} user={user} />
    ));
};

export default LeaderboardList;
