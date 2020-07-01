import React, { useState } from 'react';
import Quizzes from '../Quizzes/Quizzes';
import { Col, Row, Button, Layout, Divider } from 'antd';
import { connect } from 'react-redux';
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister';
import CreateQuiz from '../utils/Modal/CreateQuiz';
import LogoutButton from './LogoutButton';
import Text from 'antd/lib/typography/Text';

const AdminPanel = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const template = !user ? (
        <AdminLogin />
    ) : (
        <Row
            type='flex'
            justify='center'
            align='middle'
            style={{
                backgroundImage:
                    'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
            }}
        >
            <Col xs={22} sm={16} md={12} lg={10} xl={8}>
                {!isOpen && (
                    <>
                        <Row
                            type='flex'
                            justify='center'
                            align='middle'
                            style={{ marginTop: '5px' }}
                        >
                            <Col
                                span={24}
                                style={{
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    marginBottom: '0'
                                }}
                            >
                                <Row type='flex' justify='space-between'>
                                    <Col>
                                        <Text>{`${user.first_name} ${user.last_name}`}</Text>{' '}
                                    </Col>
                                    <Col>
                                        <span
                                            style={{
                                                fontSize: '16px',
                                                padding: '5px',
                                                backgroundColor:
                                                    'rgba(0,0,0,0.3)',
                                                borderRadius: '5px',
                                                color: '#fff'
                                            }}
                                        >
                                            {user.username}
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Divider style={{ margin: '5px 0' }} />
                        <Row
                            type='flex'
                            justify='center'
                            align='middle'
                            gutter={4}
                        >
                            <Col span={9}>
                                <Button
                                    type='primary'
                                    style={{ minWidth: '100%' }}
                                    onClick={() => setIsOpen(true)}
                                >
                                    Admin əlavə et
                                </Button>
                            </Col>
                            <Col span={9}>
                                <CreateQuiz />
                            </Col>
                            <Col span={6}>
                                <LogoutButton />
                            </Col>
                        </Row>
                    </>
                )}
                <AdminRegister isOpen={isOpen} setIsOpen={setIsOpen} />
                <Quizzes isOpen={isOpen} />
            </Col>
        </Row>
    );

    return template;
};

const mapStateToProps = ({ auth: { user } }) => ({
    user
});

export default connect(mapStateToProps, null)(AdminPanel);
