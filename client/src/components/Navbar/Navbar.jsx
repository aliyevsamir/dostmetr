import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import { connect } from 'react-redux';

const Navbar = ({ history, isAuthenticated, user }) => {
    return isAuthenticated ? (
        <Row type='flex' justify='center'>
            <Col xs={24} sm={22} md={20} lg={20} xl={18}>
                <Menu
                    theme='dark'
                    mode='horizontal'
                    className='Navbar'
                    selectable={false}
                    style={{
                        display: 'block',
                        minWidth: '100%',
                        margin: '0px',
                        padding: '0px'
                    }}
                >
                    <Menu.Item
                        onClick={() => {
                            history.push('/profile');
                        }}
                        className='Navbar-item'
                    >
                        Profil
                    </Menu.Item>

                    {user && user.is_admin ? (
                        <Menu.Item
                            onClick={() => {
                                history.push('/admin');
                            }}
                            className='Navbar-item'
                        >
                            Admin Panel
                        </Menu.Item>
                    ) : null}
                </Menu>
            </Col>
        </Row>
    ) : null;
};

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({
    isAuthenticated,
    user
});

export default connect(mapStateToProps, null)(withRouter(Navbar));
