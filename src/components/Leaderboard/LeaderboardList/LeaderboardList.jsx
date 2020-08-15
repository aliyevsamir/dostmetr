import React from 'react';
import User from '../User';

const LeaderboardList = ({ leaderboard, showSubmission }) => {
    return leaderboard.map(user => (
        <User
            key={user.quiz_submission_id}
            user={user}
            showSubmission={showSubmission}
        />
    ));
};

export default LeaderboardList;
