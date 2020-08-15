import React, { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';

import Routes from './components/Router/Routes';

//Redux stuff
import { connect } from 'react-redux';
import { loadUser } from './redux/actions/auth';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar2 from './components/Navbar/Navbar2';

const { Header, Content } = Layout;

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

    return (
        <Layout>
            <Header>
                <Navbar2 />
            </Header>
            <Content>
                <Routes />
            </Content>
        </Layout>
    );
};

export default connect(null, { loadUser })(App);
