import React from 'react';

// CSS
import './HomePage.scss';
import { Row } from 'antd';

// Router
import { Redirect } from 'react-router-dom';

import Register from '../Register/Register';
import { connect } from 'react-redux';

const HomePage = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/profile' />;
    }

    return (
        <Row className='flex'>
            <Register />
        </Row>
    );
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
    isAuthenticated
});

export default connect(mapStateToProps, null)(HomePage);
