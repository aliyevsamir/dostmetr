import React from 'react';
import { Button } from 'antd';
import { adminLogout } from '../../redux/actions/auth';
import { connect } from 'react-redux';

const LogoutButton = ({ adminLogout }) => {
    return (
        <Button
            type='danger'
            style={{ minWidth: '100%' }}
            onClick={() => adminLogout()}
        >
            Çıxış et
        </Button>
    );
};

export default connect(null, { adminLogout })(LogoutButton);
