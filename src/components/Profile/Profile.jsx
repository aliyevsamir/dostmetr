import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Button, message, Pagination } from 'antd';
import moment from 'moment';
import 'moment/locale/az';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import ShareButtons from '../utils/Share Buttons/ShareButtons';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import { getLeaderboard } from '../../redux/actions/leaderboard';
import LeaderboardList from '../Leaderboard/LeaderboardList/LeaderboardList';
import './Profile.scss';
import Loading from '../../utils/Loading';
import toSentenceCase from '../../utils/toSentenceCase';
const { Title, Text } = Typography;

const Profile = ({ user, getLeaderboard, leaderboard }) => {
    const [hasLeaderboard, setHasLeaderboard] = useState(false);
    const [loading, setLoading] = useState(true);
    const [leaderboardLoading, setLeaderboardLoading] = useState(false);

    useEffect(() => {
        if (user.quiz_id) {
            getLeaderboard(user.quiz_id).then(res => {
                if (res.data.data.leaderboard.length > 0)
                    setHasLeaderboard(true);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    const handlePageChange = async (pageNum, pageSize) => {
        setLeaderboardLoading(true);
        await getLeaderboard(user.quiz_id, null, pageSize, (pageNum - 1) * 10);
        setLeaderboardLoading(false);
    };

    return loading ? (
        <Loading />
    ) : (
        <Row className='Profile'>
            <Col span={24}>
                <Row type='flex' justify='center'>
                    <Col span={24}>
                        <Row type='flex' justify='center'>
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
                                            <Col span={24}>
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
                                                        justifyContent:
                                                            'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Link to='admin'>
                                                        <Button>
                                                            Admin Panel
                                                        </Button>
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
                                            {toSentenceCase(
                                                moment(
                                                    user.created_at
                                                ).fromNow()
                                            )}{' '}
                                            əvvəl qeydiyyatdan keçdiniz.{' '}
                                            {/* {user.quiz_id
                                                ? 'Quizinizi dostlarınızla aşağıdakı linkdən paylaşın 😊'
                                                : 'Quizinizi yaratmaq üçün aşağıdakı butona tıklayın, quizinizi yaradın və dostlarınızla bölüşün 🤩😊'} */}
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
                                            {user.quiz_id
                                                ? 'Dostluq testini paylaş!'
                                                : '🤩 Öz dostluq testini yarat 🥳'}
                                        </Title>
                                    </Col>
                                    {user.quiz_id ? (
                                        <>
                                            <Col
                                                xs={16}
                                                sm={14}
                                                md={12}
                                                lg={10}
                                                xl={8}
                                                style={{
                                                    marginBottom: '10px',
                                                    display: 'flex'
                                                }}
                                            >
                                                <CopyToClipboard
                                                    text={`${window.location.origin}/quizzes/${user.quiz_id}`}
                                                    onCopy={() => {
                                                        message.destroy();
                                                        message.success({
                                                            content:
                                                                'Linki kopyaladınız, dostlarınıza yollayın 😊',
                                                            duration: 1
                                                        });
                                                    }}
                                                >
                                                    <Button
                                                        type='primary'
                                                        style={{
                                                            backgroundColor:
                                                                '#fff',
                                                            color: '#000',
                                                            margin: '0 auto',
                                                            minWidth: '50%',
                                                            textAlign: 'center',
                                                            borderRadius: '1rem'
                                                        }}
                                                    >
                                                        Linki kopyala
                                                    </Button>
                                                </CopyToClipboard>
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
                                                    və ya birbaşa aşağıdakı
                                                    butonlar ilə paylaş
                                                </Text>
                                            </Col>
                                            <Col
                                                span={24}
                                                style={{ textAlign: 'center' }}
                                            >
                                                <ShareButtons
                                                    url={`${window.location.origin}/quizzes/${user.quiz_id}`}
                                                />
                                            </Col>
                                        </>
                                    ) : (
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
                                                        textAlign: 'center',
                                                        borderRadius: '1rem'
                                                    }}
                                                >
                                                    Öz testini yarat!
                                                </Button>
                                            </Link>
                                        </Col>
                                    )}
                                </Row>
                            </Col>

                            {hasLeaderboard && (
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
                                        padding: '1rem 2rem',
                                        height: '100%',
                                        marginBottom: '1rem 2rem'
                                    }}
                                    className='leaderboard-side'
                                >
                                    <h3
                                        style={{
                                            fontFamily:
                                                'Montserrat, sans-serif',
                                            fontWeight: '600',
                                            textAlign: 'center',
                                            fontSize: '24px',
                                            margin: '5px 30px'
                                        }}
                                    >
                                        Liderlik sıralaması
                                    </h3>
                                    {leaderboardLoading ? (
                                        <Loading />
                                    ) : (
                                        <>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-end'
                                                }}
                                            >
                                                <Pagination
                                                    onChange={handlePageChange}
                                                    total={leaderboard.total}
                                                />
                                            </div>
                                            <LeaderboardList
                                                leaderboard={
                                                    leaderboard.leaderboard
                                                }
                                                showSubmission
                                            />
                                        </>
                                    )}
                                </Col>
                            )}
                        </Row>
                    </Col>
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

export default connect(mapStateToProps, { getLeaderboard })(Profile);
