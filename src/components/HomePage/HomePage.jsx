import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../utils/Loading';
import { Redirect } from 'react-router-dom';

const HomePage = ({ isAuthenticated, loading }) => {
    return loading ? (
        <Loading />
    ) : !isAuthenticated ? (
        <Redirect to='/register' />
    ) : (
        <Redirect to='/profile' />
    );
};

const mapStateToProps = ({ auth: { isAuthenticated, loading } }) => ({
    isAuthenticated,
    loading
});

export default connect(mapStateToProps, null)(HomePage);
