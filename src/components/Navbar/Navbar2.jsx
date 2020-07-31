import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';

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
                <span
                    style={{
                        color: '#fff',
                        fontSize: '1.8rem',
                        letterSpacing: '1px',
                        fontWeight: '900',
                        fontFamily: 'Montserrat, sans-serif',
                        userSelect: 'none'
                    }}
                >
                    Dost
                    <span
                        style={{
                            color: '#a22'
                        }}
                    >
                        metr
                    </span>
                </span>
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
                                fontSize: '1.1rem',
                                letterSpacing: '1px',
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
