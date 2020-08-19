import React from 'react';
import { Button, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const GetMyToken = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 64px)'
            }}
        >
            <CopyToClipboard
                text={localStorage.getItem('token')}
                onCopy={() => {
                    message.destroy();
                    message.success({
                        content: 'Token kopyalandı',
                        duration: 1
                    });
                }}
            >
                <Button
                    style={{
                        margin: '5rem'
                    }}
                >
                    Tokeni kopyala
                </Button>
            </CopyToClipboard>
        </div>
    );
};

export default GetMyToken;
