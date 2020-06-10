import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import './Navbar.scss';

const Navbar = ({ history }) => {
    return (
        <Menu mode='horizontal' className='Navbar' selectable={false}>
            <Menu.Item
                onClick={() => {
                    history.push('/profile');
                }}
                className='Navbar-item'
            >
                Profil
            </Menu.Item>

            <Menu.Item
                onClick={() => {
                    history.push('/admin');
                }}
                className='Navbar-item'
            >
                Admin Panel
            </Menu.Item>
        </Menu>
    );
};

export default withRouter(Navbar);
