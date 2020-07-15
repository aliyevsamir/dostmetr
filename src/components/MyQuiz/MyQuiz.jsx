import React from 'react';
import { connect } from 'react-redux';
import { getMyQuiz } from '../../redux/actions/quizzes';
import { useEffect } from 'react';
import { Row, Col, Menu } from 'antd';
import Text from 'antd/lib/typography/Text';
import { withRouter } from 'react-router-dom';
import QuizTemplate2 from '../QuizTamplate2/QuizTemplate2';

const MyQuiz = ({ getMyQuiz, userQuiz, history }) => {
    useEffect(() => {
        getMyQuiz();
    }, []);

    return (
        <Row
            type='flex'
            justify='center'
            style={{
                minHeight: '100vh',
                backgroundImage:
                    'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
            }}
        >
            <Col xs={22} sm={16} md={12} lg={10} xl={8}>
                <Col span={24}>
                    <Menu theme='dark' style={{ borderRadius: '0 0 5px 5px' }}>
                        <Menu.Item onClick={() => history.push('/profile')}>
                            <span
                                style={{
                                    color: '#fff',
                                    fontSize: '25px',
                                    fontFamily: 'Montserrat, sans-serif'
                                }}
                            >
                                Dost
                                <span style={{ color: '#faf' }}>metr</span>
                            </span>
                        </Menu.Item>
                    </Menu>
                </Col>

                {userQuiz.length ? (
                    <Col span={24}>
                        <QuizTemplate2 questions={userQuiz} />
                    </Col>
                ) : (
                    <h1>Hələ quizi tamamlamamısınız !</h1>
                )}
            </Col>
        </Row>
    );
};

const mapStateToProps = ({ auth: { userQuiz } }) => ({
    userQuiz
});

export default connect(mapStateToProps, { getMyQuiz })(withRouter(MyQuiz));
