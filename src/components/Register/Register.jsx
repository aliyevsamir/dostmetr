import React from 'react';
import { Col, Input, Button, Row, Form } from 'antd';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { withRouter } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';
import { useEffect } from 'react';

const Register = ({ register, history, isAuthenticated, mode = 'make' }) => {
    const onFinish = async userData => {
        if (mode == 'make') {
            await register(userData);
            history.push('/make-quiz');
        } else {
            await register(userData);
        }
    };

    useEffect(() => {
        if (isAuthenticated && mode === 'make') history.push('/make-quiz');
    }, [isAuthenticated]);

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
            <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                <h3
                    style={{
                        marginBottom: '10px',
                        fontFamily: 'Montserrat, sans-serif'
                    }}
                >
                    {mode === 'make'
                        ? 'Öz quizinizi yaratmaq üçün zəhmət olmasa qeydiyyatdan keçin'
                        : 'Dostunuzun quizini həll etmək üçün zəhmət olmasa qeydiyyatdan keçin'}
                </h3>
                <Form onFinish={onFinish} form={form} layout='vertical'>
                    <Form.Item
                        name='name'
                        label='İstifadəçi adı'
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <Input placeholder='Adınızı daxil edin' />
                    </Form.Item>

                    <Button
                        type='primary'
                        htmlType='submit'
                        style={{ width: '100%' }}
                    >
                        <Text style={{ color: '#fff', fontWeight: '600' }}>
                            {mode === 'make' ? 'Öz quizini yarat' : 'Qeydiyyat'}
                        </Text>
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
    isAuthenticated
});

export default connect(mapStateToProps, { register })(withRouter(Register));
