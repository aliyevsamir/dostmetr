import React, { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';

//Router stuff
import { Route, Switch } from 'react-router-dom';

//Redux stuff
import { connect } from 'react-redux';
import { loadUser } from './redux/actions/auth';
import HomePage from './components/HomePage/HomePage';
import Routes from './components/Router/Routes';

const App = ({ loadUser }) => {
    useEffect(() => {
        setAuthToken(localStorage.token);
        loadUser();
    }, []);

    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route component={Routes} />
        </Switch>
    );
};

export default connect(null, { loadUser })(App);
