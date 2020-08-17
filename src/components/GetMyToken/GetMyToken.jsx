import React from 'react';
import { Button, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const GetMyToken = () => {
    return (
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
            <Button>Tokeni kopyala</Button>
        </CopyToClipboard>
    );
};

export default GetMyToken;
