import React from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { connect } from 'react-redux';
import { adminLogin } from '../../redux/actions/auth';
import { useEffect } from 'react';
import isEmpty from '../../utils/isEmpty';

const AdminLogin = ({ adminLogin, errors }) => {
    const handleFinish = values => {
        adminLogin(values);
    };

    useEffect(() => {
        if (!isEmpty(errors)) {
            if (errors.type === 'notification')
                message.error(
                    errors.errors.error.message
                        ? errors.errors.error.message
                        : errors.errors
                );
        }
    }, [errors]);

    return (
        <Row
            type='flex'
            justify='center'
            align='middle'
            style={{
                minHeight: '100vh',
                backgroundImage:
                    'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
            }}
        >
            <Col xs={16} sm={14} md={12} lg={8} xl={6}>
                <Form
                    name='basic'
                    layout='vertical'
                    initialValues={{
                        size: 'small'
                    }}
                    onFinish={handleFinish}
                >
                    <Form.Item
                        label='İstifadəçi adı'
                        name='username'
                        htmlFor='username'
                        rules={[
                            {
                                required: true,
                                message: 'İstifadəçi adını daxil edin!'
                            }
                        ]}
                        style={{ marginBottom: '5px' }}
                    >
                        <Input id='username' />
                    </Form.Item>

                    <Form.Item
                        label='Şifrə'
                        htmlFor='password'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Şifrəni daxil edin!'
                            }
                        ]}
                        style={{
                            marginBottom: '10px'
                        }}
                    >
                        <Input.Password id='password' />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            style={{ minWidth: '100%' }}
                        >
                            Daxil ol
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

const mapStateToProps = ({ errors }) => ({
    errors
});

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
