import React, { useState } from 'react';
import Quizzes from '../Quizzes/Quizzes';
import { Col, Row, Button } from 'antd';
import { connect } from 'react-redux';
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister';
import CreateQuiz from '../utils/Modal/CreateQuiz';
import LogoutButton from './LogoutButton';

const AdminPanel = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const template = !user ? (
        <AdminLogin />
    ) : (
        <Row type='flex' justify='center' align='middle'>
            <Col xs={22} sm={16} md={12} lg={10} xl={8}>
                {!isOpen && (
                    <Row type='flex' justify='center' align='middle' gutter={4}>
                        <Col span={8}>
                            <Button
                                type='primary'
                                style={{ minWidth: '100%' }}
                                onClick={() => setIsOpen(true)}
                            >
                                Admin əlavə et
                            </Button>
                        </Col>
                        <Col span={8}>
                            <CreateQuiz />
                        </Col>
                        <Col span={8}>
                            <LogoutButton />
                        </Col>
                    </Row>
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
