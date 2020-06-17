import React from 'react';
import Quizzes from '../Quizzes/Quizzes';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import AdminLogin from './AdminLogin';

const AdminPanel = ({ user }) => {
    const template = !user ? (
        <AdminLogin />
    ) : (
        <Row type='flex' justify='center' align='middle'>
            <Col xs={20} sm={18} md={16} lg={14} xl={12}>
                <Quizzes />
            </Col>
        </Row>
    );

    return template;
};

const mapStateToProps = ({ auth: { user } }) => ({
    user
});

export default connect(mapStateToProps, null)(AdminPanel);
