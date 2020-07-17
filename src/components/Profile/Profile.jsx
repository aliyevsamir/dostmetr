import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Button, message } from 'antd';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import ShareButtons from '../utils/Share Buttons/ShareButtons';
import { blue } from '@ant-design/colors';
import { Typography } from 'antd';
const { Title, Text } = Typography;

const Profile = ({ user }) => {
    const [isCopied, setIsCopied] = useState(false);

    const hasOwnQuiz = user.quiz_id ? true : false;

    return (
        <Row type='flex' justify='center' gutter={[16, 8]}>
            <Col
                xs={20}
                sm={18}
                md={18}
                lg={18}
                xl={16}
                style={{
                    backgroundColor: blue[5],
                    padding: '10px',
                    margin: '15px',
                    borderRadius: '10px'
                }}
            >
                <Row type='flex' justify='center'>
                    <Col span={24} style={{ marginBottom: '10px' }}>
                        <Row type='flex' justify='center'>
                            <Col span={8}>
                                <Title
                                    level={3}
                                    style={{
                                        marginBottom: 0,
                                        color: '#fff',
                                        textAlign: 'center '
                                    }}
                                >
                                    {user.is_admin
                                        ? `${user.first_name} ${user.last_name}`
                                        : user.name}
                                </Title>
                            </Col>
                            {user.is_admin && (
                                <Col
                                    span={10}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Link to='admin'>
                                        <Button>Admin Panel</Button>
                                    </Link>
                                </Col>
                            )}
                        </Row>
                    </Col>

                    <Col span={24}>
                        <Text
                            style={{
                                color: '#fff',
                                width: '100%',
                                display: 'inline-block',
                                textAlign: 'center '
                            }}
                        >
                            {moment(user.created_at, 'YYYYMMDD').fromNow()}{' '}
                            qeydiyyatdan keçdiniz.{' '}
                            {hasOwnQuiz
                                ? 'Quizinizi dostlarınızla aşağıdakı linkdən paylaşın 😊'
                                : 'Quizinizi yaratmaq üçün aşağıdakı butona tıklayın, quizinizi yaradın və dostlarınızla bölüşün 🤩😊'}
                        </Text>
                    </Col>
                </Row>
            </Col>
            <Col
                xs={20}
                sm={18}
                md={18}
                lg={18}
                xl={16}
                style={{
                    backgroundColor: '#ddd',
                    padding: '10px',
                    borderRadius: '10px',
                    margin: '5px 5px 0 5px'
                }}
            >
                <Row type='flex' justify='center'>
                    <Col
                        xs={22}
                        sm={22}
                        md={20}
                        lg={18}
                        xl={18}
                        style={{ marginBottom: '10px' }}
                    >
                        <Title level={3} style={{ textAlign: 'center' }}>
                            {hasOwnQuiz
                                ? 'Dostlarını hazırladığın quizə dəvət et!'
                                : '🤩 Quizini yarat və dostlarınla paylaş 🥳'}
                        </Title>
                    </Col>
                    {!isCopied ? (
                        <Col
                            xs={16}
                            sm={14}
                            md={12}
                            lg={10}
                            xl={8}
                            style={{ marginBottom: '10px' }}
                        >
                            {hasOwnQuiz ? (
                                <CopyToClipboard
                                    text={`http://localhost:3000/quizzes/${user.quiz_id}`}
                                    onCopy={() => setIsCopied(true)}
                                >
                                    <Button
                                        type='primary'
                                        style={{
                                            width: '100%',
                                            marginBottom: '5px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Linki kopyala
                                    </Button>
                                </CopyToClipboard>
                            ) : (
                                <Link to='/make-quiz'>
                                    <Button
                                        type='primary'
                                        style={{
                                            width: '100%',
                                            marginBottom: '5px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Öz quizini yarat!
                                    </Button>
                                </Link>
                            )}
                        </Col>
                    ) : (
                        <>
                            <Col
                                xs={16}
                                sm={14}
                                md={12}
                                lg={10}
                                xl={8}
                                style={{ marginBottom: '10px' }}
                            >
                                {message.success(
                                    'Linki kopyaladınız, dostlarınıza yollayın 😊'
                                )}
                                <Button
                                    type='ghost'
                                    style={{
                                        width: '100%',
                                        marginBottom: '5px',
                                        textAlign: 'center'
                                    }}
                                    disabled
                                >
                                    Link kopyalandı
                                </Button>
                            </Col>
                            <Col span={24}>
                                <Text
                                    level={2}
                                    style={{
                                        textAlign: 'center',
                                        display: 'inline-block',
                                        width: '100%',
                                        marginBottom: '15px'
                                    }}
                                >
                                    və ya birbaşa aşağıdakı butonlar ilə paylaş
                                </Text>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={10}
                                lg={8}
                                xl={8}
                                style={{ textAlign: 'center' }}
                            >
                                <ShareButtons />
                            </Col>
                            <Col
                                span={24}
                                style={{
                                    textAlign: 'center',
                                    marginTop: '10px'
                                }}
                            >
                                <Link to='my-quiz'>
                                    <Button type='primary'>Mənim quizim</Button>
                                </Link>
                            </Col>
                        </>
                    )}
                </Row>
            </Col>
        </Row>
    );
};

const mapStateToProps = ({ auth: { user } }) => ({
    user
});

export default connect(mapStateToProps, null)(Profile);
