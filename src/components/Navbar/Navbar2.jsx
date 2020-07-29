import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const Navbar2 = ({ navItems, history }) => {
    return (
        <Menu theme='dark'>
            {navItems.map(({ navLink, navText }) => (
                <Menu.Item onClick={() => history.push(`/${navLink}`)}>
                    <span
                        style={{
                            color: '#fff',
                            fontSize: '1rem',
                            fontFamily: 'Montserrat, sans-serif'
                        }}
                    >
                        {navText}
                    </span>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default withRouter(Navbar2);
