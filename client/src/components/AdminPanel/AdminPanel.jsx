import React from 'react';
import Quizzes from '../Quizzes/Quizzes';
import { Col, Row } from 'antd';

const AdminPanel = () => {
    return (
        <Row type='flex' justify='center' align='middle'>
            <Col xs={20} sm={18} md={16} lg={14} xl={12}>
                <Quizzes />
            </Col>
        </Row>
    );
};

export default AdminPanel;
