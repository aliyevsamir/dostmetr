import React from 'react';

// CSS
import { Row } from 'antd';

// Router
import Register from '../Register/Register';
import { connect } from 'react-redux';

const HomePage = ({ isAuthenticated }) => {
    return (
        <Row type='flex'>
            <Register />
        </Row>
    );
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
    isAuthenticated
});

export default connect(mapStateToProps, null)(HomePage);
