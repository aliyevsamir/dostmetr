import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className='sk-folding-cube'>
                <div className='sk-cube1 sk-cube'></div>
                <div className='sk-cube2 sk-cube'></div>
                <div className='sk-cube4 sk-cube'></div>
                <div className='sk-cube3 sk-cube'></div>
            </div>
        </div>
    );
};

export default Loading;
