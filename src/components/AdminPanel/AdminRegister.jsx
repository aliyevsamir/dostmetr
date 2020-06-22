import React from 'react';
import { Col, Button, Row, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { registerAdmin } from '../../redux/actions/auth';

const AdminRegister = ({ isOpen, setIsOpen, registerAdmin }) => {
    const [form] = Form.useForm();

    const handleFinish = values => {
        setIsOpen(false);
        registerAdmin(values);
    };

    return (
        <>
            {isOpen && (
                <Row
                    type='flex'
                    align='middle'
                    justify='center'
                    style={{ minHeight: '100vh' }}
                >
                    <Col style={{ margin: '20px 0' }} span={24}>
                        <Form
                            onFinish={handleFinish}
                            form={form}
                            layout='vertical'
                        >
                            <Form.Item
                                label='Ad'
                                name='first_name'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Adınızı daxil edin!'
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='Soyad'
                                name='last_name'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Soyadınızı daxil edin!'
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='İstifadəçi adı'
                                name='username'
                                rules={[
                                    {
                                        required: true,
                                        message: 'İstifadəçi adını daxil edin!'
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='Şifrə'
                                name='password'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Şifrənizi daxil edin!'
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' htmlType='submit'>
                                    Əlavə et
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default connect(null, { registerAdmin })(AdminRegister);
