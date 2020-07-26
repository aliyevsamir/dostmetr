import React from 'react';
import { Row, Col } from 'antd';
import gold from '../../utils/gold.png';
import silver from '../../utils/silver.png';
import bronze from '../../utils/bronze.png';

const User = ({ user }) => {
    return (
        <Row type='flex' justify='center' align='middle'>
            <Col
                span={4}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'tomato'
                }}
            >
                {user.rank == 1 ? (
                    <img src={gold} style={{ height: '50px' }} />
                ) : user.rank == 2 ? (
                    <img src={silver} style={{ height: '50px' }} />
                ) : user.rank == 3 ? (
                    <img src={bronze} style={{ height: '50px' }} />
                ) : (
                    user.rank
                )}
            </Col>
            <Col
                span={16}
                style={{
                    textAlign: 'start',
                    lineHeight: '1'
                }}
            >
                {user.name}
            </Col>
            <Col span={4} style={{ color: 'tomato' }}>
                {user.points}
            </Col>
        </Row>
    );
};

export default User;
