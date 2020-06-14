import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({
    component: Component,
    is_admin,
    redirectRoute,
    ...rest
}) => {
    console.log(is_admin);
    return (
        <Route
            {...rest}
            render={props =>
                is_admin ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={redirectRoute} />
                )
            }
        />
    );
};

AdminRoute.propTypes = {
    is_admin: PropTypes.bool.isRequired,
    redirectRoute: PropTypes.string.isRequired
};

export default AdminRoute;
