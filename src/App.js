import React, { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';

import Routes from './components/Router/Routes';

//Redux stuff
import { connect } from 'react-redux';
import { loadUser } from './redux/actions/auth';
import { useLocation } from 'react-router-dom';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = ({ loadUser }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        loadUser();
    }, []);

    return <Routes />;
};

export default connect(null, { loadUser })(App);
