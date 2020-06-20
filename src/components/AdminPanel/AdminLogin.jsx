import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { adminLogin } from '../../redux/actions/auth';

const AdminLogin = ({ adminLogin }) => {
    const handleFinish = values => {
        console.log(values);
        adminLogin(values);
        console.log(values);
    };

    return (
        <Row
            type='flex'
            justify='center'
            align='middle'
            style={{
                minHeight: '100vh'
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
                        rules={[
                            {
                                required: true,
                                message: 'İstifadəçi adını daxil edin!'
                            }
                        ]}
                        style={{ marginBottom: '5px' }}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='Şifrə'
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
                        <Input.Password />
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

export default connect(null, { adminLogin })(AdminLogin);
