import React from 'react';

const Logo = ({ type = 'light' }) => {
    return (
        <h1
            style={{
                color: type === 'light' ? '#fff' : '#000',
                fontSize: '1.8rem',
                letterSpacing: '1px',
                fontWeight: '900',
                fontFamily: 'Montserrat, sans-serif',
                userSelect: 'none',
                margin: '0'
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
