import React from 'react';
import errorGif from './404.gif';
import { Row, Col } from 'antd';

const Error404 = () => {
    return (
        <Row
            type='flex'
            justify='center'
            align='middle'
            style={{ height: '100vh' }}
        >
            <Col span={12}>
                <img
                    src={errorGif}
                    alt='Error 404 not found'
                    style={{ maxWidth: '100%' }}
                />
            </Col>
        </Row>
    );
};

export default Error404;
