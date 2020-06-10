import React, { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/Navbar/Navbar';

//Router stuff
import { Route, Switch } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import PrivateRoute from './components/Router/PrivateRoute';

//Redux stuff
import { connect } from 'react-redux';
import { loadUser } from './redux/actions/auth';
import { loadQuizzes } from './redux/actions/quizzes';

const App = ({ loadUser, loadQuizzes }) => {
    useEffect(() => {
        setAuthToken(localStorage.token);
        loadUser();
        loadQuizzes();
    }, []);

    return (
        <div className='App'>
            <Navbar />
            <Switch>
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

                {privateRoutes.map((route, index) => (
                    <PrivateRoute
                        key={`${route.path}-${index}`}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        hasAccess={false} // TODO: Replace prop value with user's role fetched from API
                        redirectRoute={route.redirectRoute}
                    />
                ))}
            </Switch>
        </div>
    );
};

export default connect(null, { loadUser, loadQuizzes })(App);
