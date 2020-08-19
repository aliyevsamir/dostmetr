import React, { useState } from 'react';
import { Col, Input, Button, Row, Form } from 'antd';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { withRouter } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';
import { useEffect } from 'react';
import Logo from '../utils/Logo/Logo';
import quizSvg from '../../utils/undraw_questions_75e0.svg';
import './Register.scss';

const Register = ({ register, history, mode = 'make', createdBy = null }) => {
    const onFinish = async userData => {
        setRegisterLoading(true);
        if (mode === 'make') {
            try {
                await register(userData);
                history.push('/make-quiz');
                setRegisterLoading(false);
            } catch (error) {
                console.error(error.response);
            }
        } else {
            try {
                await register(userData);
                setRegisterLoading(false);
            } catch (error) {
                console.error(error.response);
            }
        }
    };

    const [registerLoading, setRegisterLoading] = useState(false);

    useEffect(() => {
        if (localStorage.token) history.push('/profile');
    }, []);

    const [form] = Form.useForm();

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
            <Col
                xs={24}
                sm={24}
                md={22}
                lg={22}
                xl={22}
                className='container'
                style={{
                    backgroundColor: '#fff',
                    padding: '2rem 4rem',
                    boxShadow:
                        '1px 1px 5px rgba(0,0,0,0.3), -1px -1px 5px rgba(0,0,0,.3)',
                    minHeight: '90vh',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '1rem',
                    position: 'relative'
                }}
            >
                <Col
                    xs={24}
                    sm={24}
                    md={14}
                    lg={16}
                    xl={18}
                    style={{
                        position: 'relative'
                    }}
                    className='left-box'
                >
                    <img src={quizSvg} alt='' style={{ width: '80%' }} />
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={10}
                    lg={8}
                    xl={6}
                    className='right-box'
                    style={{
                        textAlign: 'center',
                        backgroundColor: 'rgba(255,255,255,.6)',
                        padding: '2.2rem',
                        boxShadow:
                            '1px 1px 5px rgba(0,0,0,0.3), -1px -1px 5px rgba(0,0,0,.3)',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        borderRadius: '1rem',
                        position: 'relative'
                    }}
                >
                    <Logo type='dark' />
                    <h3
                        style={{
                            margin: mode === 'make' ? '1.5rem 0' : '0 0 1rem 0',
                            display: 'inline-block',
                            fontSize: mode === 'make' ? '1.7rem' : '1.4rem',
                            fontWeight: '600',
                            maxWidth: '80%'
                        }}
                    >
                        {mode === 'make'
                            ? 'Qeydiyyat'
                            : `${createdBy} tərəfindən yaradılmış dostluq testini etmək üçün adınızı daxil edin`}
                    </h3>
                    <Form onFinish={onFinish} form={form} layout='vertical'>
                        <Form.Item
                            name='name'
                            rules={[
                                {
                                    required: true,
                                    message: ' '
                                }
                            ]}
                        >
                            <Input
                                style={{ maxWidth: '200px' }}
                                placeholder='Adınızı daxil edin'
                            />
                        </Form.Item>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Button
                                type='primary'
                                htmlType='submit'
                                className='submit-button'
                                style={{
                                    width: '60%',
                                    height: '2.5rem',
                                    backgroundColor: '#6C63FF',
                                    border: 'none',
                                    borderRadius: '2rem',
                                    fontSize: '1.1rem',
                                    fontWeight: '600'
                                }}
                                loading={registerLoading}
                            >
                                <Text
                                    style={{ color: '#fff', fontWeight: '600' }}
                                >
                                    İrəli
                                </Text>
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Col>
        </Row>
    );
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
    isAuthenticated
});

export default connect(mapStateToProps, { register })(withRouter(Register));
