import React, { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/Navbar/Navbar';

//Router stuff
import { Route, Switch } from 'react-router-dom';
import { publicRoutes, privateRoutes, adminRoutes } from './routes';
import PrivateRoute from './components/Router/PrivateRoute';

//Redux stuff
import { connect } from 'react-redux';
import { loadUser } from './redux/actions/auth';
import AdminRoute from './components/Router/AdminRoute';

const App = ({ loadUser, isAuthenticated, user }) => {
    useEffect(() => {
        setAuthToken(localStorage.token);
        loadUser();
    }, []);

    return !isAuthenticated ? (
        <>
            {publicRoutes.map((route, index) => (
                <Route
                    key={`${route.path}-${index}`}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    strict={route.strict}
                    sensitive={route.sensitive}
                />
            ))}
        </>
    ) : (
        <>
            <Navbar />
            <Switch>
                {privateRoutes.map((route, index) => (
                    <PrivateRoute
                        key={`${route.path}-${index}`}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        hasAccess={isAuthenticated}
                        redirectRoute={route.redirectRoute}
                    />
                ))}

                {adminRoutes.map((route, index) => (
                    <AdminRoute
                        key={`${route.path}-${index}`}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        isAdmin={user ? user.is_admin : false}
                        redirectRoute={route.redirectRoute}
                    />
                ))}
            </Switch>
        </>
    );
};

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({
    isAuthenticated,
    user
});

export default connect(mapStateToProps, { loadUser })(App);
