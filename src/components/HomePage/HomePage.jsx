import React from 'react';
import Register from '../Register/Register';
import { connect } from 'react-redux';
import Loading from '../../utils/Loading';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = ({ auth: { isAuthenticated, loading } }) => {
    return loading ? (
        <Loading />
    ) : !isAuthenticated ? (
        <Redirect to='/register' />
    ) : (
        <Redirect to='/profile' />
    );
};

const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps, null)(HomePage);
