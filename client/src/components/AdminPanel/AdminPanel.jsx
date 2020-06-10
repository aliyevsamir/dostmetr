import React from 'react';
import Quizzes from '../Quizzes/Quizzes';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <div className='admin-panel-container'>
            <Quizzes />
        </div>
    );
};

export default AdminPanel;
