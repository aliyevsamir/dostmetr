import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import Logo from '../utils/Logo/Logo';

const Navbar2 = ({ navItems, history }) => {
    return (
        <Menu
            theme='dark'
            mode='horizontal'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Menu.Item onClick={() => history.push(`/profile`)}>
                <Logo />
            </Menu.Item>
            {navItems &&
                navItems.map(({ navLink, navText }) => (
                    <Menu.Item
                        key={navLink}
                        onClick={() => history.push(`/${navLink}`)}
                    >
                        <span
                            style={{
                                color: '#fff',
                                fontSize: '.8rem',
                                letterSpacing: '.3rem',
                                fontFamily: 'Montserrat, sans-serif',
                                textTransform: 'uppercase'
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
