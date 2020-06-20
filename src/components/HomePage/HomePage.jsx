import React from 'react';

// CSS
import { Row } from 'antd';

// Router
import Register from '../Register/Register';
import { connect } from 'react-redux';
import Loading from '../../utils/Loading';
import { Redirect } from 'react-router-dom';

const HomePage = ({ auth: { isAuthenticated, loading } }) => {
    return loading ? (
        <Loading />
    ) : !isAuthenticated ? (
        <Row
            type='flex'
            justify='center'
            align='middle'
            style={{ minHeight: '100vh' }}
        >
            <Register />
        </Row>
    ) : (
        <Redirect to='/profile' />
    );
};

const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps, null)(HomePage);
