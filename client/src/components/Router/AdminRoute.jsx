import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../utils/Loading';

const AdminRoute = ({
    component: Component,
    auth: { user, loading },
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                loading ? (
                    <Loading />
                ) : !user ? (
                    <Component {...props} />
                ) : !user.is_admin ? (
                    <Redirect to='/profile' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};
AdminRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps, null)(AdminRoute);
