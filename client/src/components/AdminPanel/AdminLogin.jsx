import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useState } from 'react';

const AdminLogin = () => {
    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // TODO: send user info to server check if user is admin or not
    };

    return (
        <Row
            type='flex'
            justify='center'
            align='middle'
            style={{ minHeight: '100vh' }}
        >
            <Col xs={18} sm={16} md={14} lg={10} xl={8}>
                <Form
                    name='basic'
                    initialValues={{
                        remember: true
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        label='Username'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]}
                    >
                        <Input
                            name='username'
                            value={state.username}
                            onChange={handleChange}
                        />
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!'
                            }
                        ]}
                    >
                        <Input.Password
                            name='password'
                            value={state.password}
                            onChange={handleChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Daxil ol
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default AdminLogin;
