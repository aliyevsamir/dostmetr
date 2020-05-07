import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './HomePage.scss';
import { withRouter } from 'react-router-dom';

const HomePage = ({ history }) => {
    const [name, setName] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        history.push('/make-quiz');
    };
    return (
        <Row>
            <Col span={18} style={{ border: '1px solid #000' }}>
                <form action='' onSubmit={onSubmit}>
                    <input
                        type='text'
                        placeholder='Name'
                        onChange={e => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <input type='submit' />
                </form>
            </Col>
        </Row>
    );
};

export default withRouter(HomePage);
