import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMyQuiz } from '../../redux/actions/quizzes';
import { useEffect } from 'react';
import { Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';

const MyQuiz = ({ getMyQuiz, userQuiz }) => {
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
            {userQuiz.length ? (
                <Col xs={22} sm={16} md={12} lg={10} xl={8}>
                    {userQuiz.map(quiz => (
                        <Row
                            key={quiz.question_id}
                            style={{
                                borderRadius: '5px',
                                boxShadow: '3px 3px 3px rgba(0,0,0,.3)',
                                padding: '20px 15px',
                                margin: '15px 0',
                                backgroundColor: '#33006F'
                            }}
                        >
                            <Col span={24}>
                                <Text
                                    style={{
                                        fontWeight: '600',
                                        fontSize: '18px',
                                        padding: '5px',
                                        backgroundColor: '#fff',
                                        minWidth: '100%',
                                        display: 'inline-block',
                                        borderRadius: '5px',
                                        marginBottom: '10px',
                                        minHeight: '65px'
                                    }}
                                >
                                    {quiz.question_content}
                                </Text>
                            </Col>
                            {quiz.options.map(option => (
                                <Col key={option.option_id} span={24}>
                                    <Text
                                        style={{
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            padding: '5px',
                                            backgroundColor: option.selected
                                                ? '#0f0'
                                                : '#fff',
                                            minWidth: '100%',
                                            display: 'inline-block',
                                            borderRadius: '5px',
                                            marginBottom: '5px'
                                        }}
                                    >
                                        {option.option_content}
                                    </Text>
                                </Col>
                            ))}
                        </Row>
                    ))}
                </Col>
            ) : (
                <h1>Hələ quizi tamamlamamısınız !</h1>
            )}
        </Row>
    );
};

const mapStateToProps = ({ auth: { userQuiz } }) => ({
    userQuiz
});

export default connect(mapStateToProps, { getMyQuiz })(MyQuiz);
