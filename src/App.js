import React, { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';

import Routes from './components/Router/Routes';

//Redux stuff
import { connect } from 'react-redux';
import { loadUser } from './redux/actions/auth';

const App = ({ loadUser }) => {
    useEffect(() => {
        setAuthToken(localStorage.token);
        loadUser();
    }, []);

    return <Routes />;
};

export default connect(null, { loadUser })(App);
