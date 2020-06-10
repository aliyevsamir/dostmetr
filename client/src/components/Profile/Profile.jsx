import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Loading from '../../utils/Loading';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copyIcon from '../../utils/copy-icon.png';
import okayIcon from '../../utils/okay.png';
import './Profile.scss';
import { useState } from 'react';
import MyModal from '../utils/Modal/MyModal';
import ShareButtons from '../utils/Share Buttons/ShareButtons';

const Profile = ({ user }) => {
    const [isCopied, setIsCopied] = useState(false);

    const template =
        user === null ? (
            <Row className='profile'>
                <Col span={24} className='loading-gif'>
                    <Loading />
                </Col>
            </Row>
        ) : (
            <Row className='profile'>
                <Col
                    xs={20}
                    sm={18}
                    md={18}
                    lg={18}
                    xl={16}
                    className='profile-header'
                >
                    <div className='profile-header--photo'>
                        {user.name[0].toUpperCase()}
                    </div>
                    <div className='profile-header--description'>
                        <div className='profile-header--description-name'>
                            {user.name}
                        </div>
                        <div className='profile-header--description-bio'>
                            {moment(user.created_at, 'YYYYMMDD').fromNow()}{' '}
                            qeydiyyatdan keçdiniz. Quizinizi dostlarınızla
                            aşağıdakı linkdən paylaşın 😊
                        </div>
                    </div>
                </Col>
                <Col
                    xs={20}
                    sm={18}
                    md={18}
                    lg={18}
                    xl={16}
                    className='profile-body'
                >
                    <h2 className='profile-body--heading'>
                        Dostlarını hazırladığın quizə dəvət et!
                    </h2>
                    <div className='profile-body--copy'>
                        {!isCopied ? (
                            <CopyToClipboard
                                text='www.quizmaker.com/user1/quiz'
                                onCopy={() => setIsCopied(true)}
                                className='profile-body--copy-button'
                            >
                                <a>
                                    <p>Linki kopyala</p>
                                    <img src={copyIcon} />
                                </a>
                            </CopyToClipboard>
                        ) : (
                            <div className='profile-body--copy-button'>
                                <p>Linki kopyalandı</p>
                                <img src={okayIcon} />
                            </div>
                        )}
                    </div>
                    <ShareButtons />
                </Col>
                <Col
                    xs={20}
                    sm={18}
                    md={18}
                    lg={18}
                    xl={16}
                    className='profile-body--admin'
                >
                    <MyModal />
                </Col>
            </Row>
        );

    return template;
};

const mapStateToProps = ({ auth: { user } }) => ({
    user
});

export default connect(mapStateToProps, null)(Profile);
