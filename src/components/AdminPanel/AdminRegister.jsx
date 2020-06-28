import React from 'react';
import { Col, Button, Row, Form, Input, message } from 'antd';
import { connect } from 'react-redux';
import { registerAdmin } from '../../redux/actions/auth';
import { useEffect } from 'react';
import { useState } from 'react';

const AdminRegister = ({ isOpen, setIsOpen, registerAdmin, errors }) => {
    const [form] = Form.useForm();
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        if (!firstRender) {
            if (errors) {
                message.error(`Something went wrong ! ${errors.message}`);
            } else {
                message.success('New admin added');
                setIsOpen(false);
            }
        } else {
            setFirstRender(false);
        }
    }, [errors]);

    const handleFinish = values => {
        registerAdmin(values);
    };

    return (
        <>
            {isOpen && (
                <Row
                    type='flex'
                    align='middle'
                    justify='center'
                    style={{
                        minHeight: '100vh'
                    }}
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
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    style={{ width: '100%' }}
                                >
                                    Əlavə et
                                </Button>
                            </Form.Item>
                        </Form>

                        <Button onClick={() => setIsOpen(false)}>Geri</Button>
                    </Col>
                </Row>
            )}
        </>
    );
};

const mapStateToProps = ({ errors }) => ({
    errors
});

export default connect(mapStateToProps, { registerAdmin })(AdminRegister);
