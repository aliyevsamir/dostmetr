import React from 'react';

const Logo = ({ type = 'light' }) => {
    return (
        <h1
            style={{
                color: type === 'light' ? '#fff' : '#000',
                fontSize: '1.8rem',
                letterSpacing: '1px',
                fontWeight: '900',
                margin: '0',
                cursor: 'pointer',
                paddingRight: '25px',
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
        </h1>
    );
};

export default Logo;
