import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Divider, message } from 'antd';
import Loading from '../../utils/Loading';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import ShareButtons from '../utils/Share Buttons/ShareButtons';
import { blue } from '@ant-design/colors';
import { Typography } from 'antd';
const { Title, Text } = Typography;

const Profile = ({ user }) => {
    const [isCopied, setIsCopied] = useState(false);

    const template =
        user === null ? (
            <Loading />
        ) : (
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
                        <Col span={24}>
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
                                qeydiyyatdan keçdiniz. Quizinizi dostlarınızla
                                aşağıdakı linkdən paylaşın 😊
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
                            xs={20}
                            sm={18}
                            md={18}
                            lg={18}
                            xl={16}
                            style={{ marginBottom: '10px' }}
                        >
                            <Title level={3} style={{ textAlign: 'center' }}>
                                Dostlarını hazırladığın quizə dəvət et!
                            </Title>
                        </Col>
                        {!isCopied ? (
                            <Col
                                xs={18}
                                sm={16}
                                md={14}
                                lg={14}
                                xl={12}
                                style={{ marginBottom: '10px' }}
                            >
                                <CopyToClipboard
                                    text='www.quizmaker.com/user1/quiz'
                                    onCopy={() => setIsCopied(true)}
                                >
                                    <Button
                                        type='primary'
                                        style={{
                                            width: '100%',
                                            marginBottom: '-5px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Linki kopyala
                                    </Button>
                                </CopyToClipboard>
                            </Col>
                        ) : (
                            message.success('Link kopyalandı')
                        )}
                        <Col span={24}>
                            <Text
                                level={2}
                                style={{
                                    textAlign: 'center',
                                    display: 'inline-block',
                                    width: '100%',
                                    marginBottom: '10px'
                                }}
                            >
                                və ya birbaşa aşağıdakı butonlar ilə paylaş
                            </Text>
                        </Col>
                        <Col
                            xs={8}
                            sm={8}
                            md={8}
                            lg={8}
                            xl={8}
                            style={{ textAlign: 'center' }}
                        >
                            <ShareButtons />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );

    return template;
};

const mapStateToProps = ({ auth: { user } }) => ({
    user
});

export default connect(mapStateToProps, null)(Profile);
