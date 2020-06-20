import React, { useState } from 'react';
import Quizzes from '../Quizzes/Quizzes';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister';

const AdminPanel = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const template = !user ? (
        <AdminLogin />
    ) : (
        <Row type='flex' justify='center' align='middle'>
            <Col xs={22} sm={16} md={12} lg={10} xl={8}>
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
