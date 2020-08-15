import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import Logo from '../utils/Logo/Logo';
import './Navbar.scss';
import { getMyQuiz } from '../../redux/actions/quizzes';
import { connect } from 'react-redux';

const Navbar2 = ({ history, getMyQuiz }) => {
    const [hasOwnQuiz, setHasOwnQuiz] = useState(false);

    useEffect(() => {
        checkForQuiz();
    }, []);

    const checkForQuiz = async () => {
        const res = await getMyQuiz();
        if (res?.data.status === 'success') {
            console.log('heey');
            setHasOwnQuiz(true);
        }
    };

    return (
        <Menu
            theme='dark'
            mode='horizontal'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Menu.Item
                onClick={() => history.push(`/profile`)}
                style={{ float: 'left' }}
            >
                <Logo />
            </Menu.Item>
            {hasOwnQuiz && (
                <Menu.Item onClick={() => history.push('/my-quiz')}>
                    <span
                        style={{
                            color: '#fff',
                            fontSize: '1rem'
                        }}
                    >
                        Testim
                    </span>
                </Menu.Item>
            )}
        </Menu>
    );
};
export default connect(null, { getMyQuiz })(withRouter(Navbar2));
