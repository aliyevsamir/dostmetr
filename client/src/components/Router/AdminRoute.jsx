import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../utils/Loading';

const AdminRoute = ({
    component: Component,
    auth: { user, loading },
    ...rest
}) => (
    <Route
        {...rest}
        render={props =>
            loading ? (
                <Loading />
            ) : user ? (
                <Component {...props} />
            ) : (
                <Redirect to='/' />
            )
        }
    />
);

AdminRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps)(AdminRoute);
