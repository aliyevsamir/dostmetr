import React from 'react';
import loading from './loading.gif';
import { Row, Col } from 'antd';

const Loading = () => {
    return (
        <Row
            type='flex'
            align='middle'
            justify='center'
            style={{ minHeight: '100vh' }}
        >
            <Col>
                <img
                    src={loading}
                    style={{ width: '120px' }}
                    alt='loading...'
                />
            </Col>
        </Row>
    );
};

export default Loading;
