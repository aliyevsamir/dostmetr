import React from 'react';
import { connect } from 'react-redux';
import { getMyQuiz } from '../../redux/actions/quizzes';
import { useEffect } from 'react';
import { Row, Col } from 'antd';
import QuizTemplate2 from '../QuizTamplate2/QuizTemplate2';
import Navbar2 from '../Navbar/Navbar2';

const MyQuiz = ({ getMyQuiz, userQuiz }) => {
    useEffect(() => {
        getMyQuiz();
    }, []);

    const navItems = [{ navLink: 'profile', navText: 'Dostmetr' }];

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
            <Col span={24}>
                <Navbar2 navItems={navItems} />
            </Col>

            <Col xs={22} sm={16} md={12} lg={10} xl={8}>
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

export default connect(mapStateToProps, { getMyQuiz })(MyQuiz);
