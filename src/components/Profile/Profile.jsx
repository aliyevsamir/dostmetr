import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Button, message } from 'antd';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import ShareButtons from '../utils/Share Buttons/ShareButtons';
import { Typography } from 'antd';
import { loadUser } from '../../redux/actions/auth';
import PropTypes from 'prop-types';
import { getLeaderboard } from '../../redux/actions/leaderboard';
import LeaderboardList from '../Leaderboard/LeaderboardList/LeaderboardList';
import './Profile.scss';
const { Title, Text } = Typography;

const Profile = ({ user, loadUser, getLeaderboard, leaderboard }) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        loadUser().then(() => getLeaderboard(user.quiz_id));
    }, []);
    const hasOwnQuiz = user.quiz_id ? true : false;

    return (
        <Row
            style={{
                backgroundColor: '#F0F2F5',
                minHeight: '100vh'
            }}
        >
            <Col span={24}>
                <Row type='flex' justify='center' gutter={[16, 8]}>
                    <Col
                        xs={20}
                        sm={18}
                        md={16}
                        lg={14}
                        xl={12}
                        style={{ marginTop: '10px', padding: '0' }}
                    >
                        <Row
                            type='flex'
                            justify='center'
                            style={{
                                borderRadius: '.5rem',
                                backgroundColor: '#fff',
                                color: '#110',
                                margin: '1rem 0',
                                boxShadow: '0px 1px 1px rgba(0,0,0,.3)',
                                padding: '1rem'
                            }}
                        >
                            <Col span={24}>
                                <Row type='flex' justify='center'>
                                    <Col span={8}>
                                        <Title
                                            level={3}
                                            style={{
                                                marginBottom: 0,
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
                                        width: '100%',
                                        display: 'inline-block',
                                        textAlign: 'center '
                                    }}
                                >
                                    {moment(
                                        user.created_at,
                                        'YYYYMMDD'
                                    ).fromNow()}{' '}
                                    qeydiyyatdan keçdiniz.{' '}
                                    {hasOwnQuiz
                                        ? 'Quizinizi dostlarınızla aşağıdakı linkdən paylaşın 😊'
                                        : 'Quizinizi yaratmaq üçün aşağıdakı butona tıklayın, quizinizi yaradın və dostlarınızla bölüşün 🤩😊'}
                                </Text>
                            </Col>
                        </Row>
                        <Row
                            type='flex'
                            justify='center'
                            style={{
                                borderRadius: '.5rem',
                                backgroundColor: '#fff',
                                color: '#110',
                                margin: '1rem 0',
                                boxShadow: '0px 1px 1px rgba(0,0,0,.3)',
                                padding: '1rem'
                            }}
                        >
                            <Col
                                xs={22}
                                sm={22}
                                md={20}
                                lg={18}
                                xl={18}
                                style={{ marginBottom: '10px' }}
                            >
                                <Title
                                    level={4}
                                    style={{
                                        textAlign: 'center'
                                    }}
                                >
                                    {hasOwnQuiz
                                        ? 'Dostlarını hazırladığın quizə dəvət et!'
                                        : '🤩 Quizini yarat və dostlarınla paylaş 🥳'}
                                </Title>
                            </Col>
                            {hasOwnQuiz ? (
                                <>
                                    <Col
                                        xs={16}
                                        sm={14}
                                        md={12}
                                        lg={10}
                                        xl={8}
                                        style={{ marginBottom: '10px' }}
                                    >
                                        {!isCopied ? (
                                            <CopyToClipboard
                                                text={`http://localhost:3000/quizzes/${user.quiz_id}`}
                                                onCopy={() => setIsCopied(true)}
                                            >
                                                <Button
                                                    type='primary'
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        color: '#000',
                                                        width: '100%',
                                                        marginBottom: '5px',
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    Linki kopyala
                                                </Button>
                                            </CopyToClipboard>
                                        ) : (
                                            <>
                                                {message.success(
                                                    'Linki kopyaladınız, dostlarınıza yollayın 😊'
                                                )}
                                                <Button
                                                    type='ghost'
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        width: '100%',
                                                        marginBottom: '5px',
                                                        textAlign: 'center'
                                                    }}
                                                    disabled
                                                >
                                                    Link kopyalandı
                                                </Button>
                                            </>
                                        )}
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
                                            və ya birbaşa aşağıdakı butonlar ilə
                                            paylaş
                                        </Text>
                                    </Col>
                                    <Col
                                        span={24}
                                        style={{ textAlign: 'center' }}
                                    >
                                        <ShareButtons />
                                    </Col>
                                    <Col
                                        xs={16}
                                        sm={14}
                                        md={12}
                                        lg={10}
                                        xl={8}
                                        style={{
                                            textAlign: 'center',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <Link to='my-quiz'>
                                            <Button
                                                type='primary'
                                                style={{
                                                    backgroundColor: '#fff',
                                                    color: '#000',
                                                    width: '100%'
                                                }}
                                            >
                                                Mənim quizim
                                            </Button>
                                        </Link>
                                    </Col>
                                </>
                            ) : (
                                // <Col></Col>
                                <Col
                                    xs={20}
                                    sm={16}
                                    md={12}
                                    lg={8}
                                    xl={8}
                                    style={{
                                        textAlign: 'center',
                                        marginTop: '10px'
                                    }}
                                >
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
                                </Col>
                            )}
                        </Row>
                    </Col>

                    {leaderboard.length && (
                        <Col
                            xs={20}
                            sm={18}
                            md={16}
                            lg={14}
                            xl={8}
                            style={{
                                borderRadius: '.5rem',
                                backgroundColor: '#fff',
                                color: '#110',
                                boxShadow: '0px 1px 1px rgba(0,0,0,.3)',
                                padding: '1rem',
                                height: '100%'
                            }}
                            className='leaderboard-side'
                        >
                            <h3
                                style={{
                                    textAlign: 'center',
                                    margin: '5px 30px',
                                    fontFamily: 'Roboto, sans-serif'
                                }}
                            >
                                Quizinizi cavablandıranların sıralaması
                            </h3>
                            <LeaderboardList leaderboard={leaderboard} />
                        </Col>
                    )}
                </Row>
            </Col>
        </Row>
    );
};

const mapStateToProps = ({ auth: { user }, leaderboard }) => ({
    user,
    leaderboard
});

Profile.propTypes = {
    user: PropTypes.object,
    loadUser: PropTypes.func
};

export default connect(mapStateToProps, { loadUser, getLeaderboard })(Profile);
