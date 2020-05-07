import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    component: Component,
    hasAccess,
    redirectRoute,
    ...rest
}) => (
    <Route
        {...rest}
        render={props =>
            hasAccess ? (
                <Component {...props} />
            ) : (
                <Redirect to={redirectRoute} />
            )
        }
    />
);

PrivateRoute.propTypes = {
    hasAccess: PropTypes.bool.isRequired,
    redirectRoute: PropTypes.string.isRequired
};

export default PrivateRoute;
