import React, { useState, useEffect } from 'react';
import { Col, Menu, Row } from 'antd';
import { withRouter } from 'react-router-dom';
import Logo from '../utils/Logo/Logo';
import './Navbar.scss';
import { getMyQuiz } from '../../redux/actions/quizzes';
import { connect } from 'react-redux';
import { MenuOutlined } from '@ant-design/icons';

const Navbar2 = ({ history, getMyQuiz, isAuthenticated }) => {
    const [hasOwnQuiz, setHasOwnQuiz] = useState(false);

    useEffect(() => {
        checkForQuiz();
    }, []);

    const checkForQuiz = async () => {
        const res = await getMyQuiz();
        if (res?.data.status === 'success') {
            setHasOwnQuiz(true);
        }
    };

    return (
        <Row
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Col
                xs={22}
                sm={19}
                md={16}
                lg={14}
                xl={20}
                style={{ display: 'flex', alignItems: 'center' }}
            >
                <div onClick={() => history.push(`/profile`)}>
                    <Logo />
                </div>
                <Menu
                    theme='dark'
                    mode='horizontal'
                    selectable
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: 'calc(100% - 165px)',
                        height: '64px'
                    }}
                    overflowedIndicator={<MenuOutlined />}
                >
                    {isAuthenticated && (
                        <Menu.Item
                            onClick={() => history.push('/profile')}
                            style={{ padding: '0 10px' }}
                        >
                            <span
                                style={{
                                    color: '#fff',
                                    fontSize: '1rem'
                                }}
                            >
                                Profilim
                            </span>
                        </Menu.Item>
                    )}
                    {hasOwnQuiz && (
                        <Menu.Item
                            onClick={() => history.push('/my-quiz')}
                            style={{ padding: '0 10px' }}
                        >
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
            </Col>
        </Row>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getMyQuiz })(withRouter(Navbar2));
