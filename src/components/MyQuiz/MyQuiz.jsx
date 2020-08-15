import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMyQuiz } from '../../redux/actions/quizzes';
import { useEffect } from 'react';
import { Row, Col } from 'antd';
import QuizTemplate2 from '../QuizTamplate2/QuizTemplate2';
import Loading from '../../utils/Loading';

const MyQuiz = ({ getMyQuiz, userQuiz, name }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getMyQuiz().then(() => setLoading(false));
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
            {loading ? (
                <Loading />
            ) : (
                <Col xs={22} sm={16} md={12} lg={10} xl={8}>
                    {userQuiz.length ? (
                        <Col span={24}>
                            <QuizTemplate2 questions={userQuiz} name={name} />
                        </Col>
                    ) : (
                        <h1>Hələ testi tamamlamamısınız !</h1>
                    )}
                </Col>
            )}
        </Row>
    );
};

const mapStateToProps = ({
    auth: {
        user: { name },
        userQuiz
    }
}) => ({
    name,
    userQuiz
});

export default connect(mapStateToProps, { getMyQuiz })(MyQuiz);
