import React from 'react';

//Router stuff
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import PrivateRoute from './components/Router/PrivateRoute';

//Redux stuff
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <Router>
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
                <Switch>
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
            </Router>
        </Provider>
    );
}

export default App;
