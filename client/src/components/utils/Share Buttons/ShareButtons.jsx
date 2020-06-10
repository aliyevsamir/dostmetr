import React from 'react';
import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon
} from 'react-share';

import './ShareButtons.scss';

const ShareButtons = () => {
    return (
        <div className='mybuttons'>
            <WhatsappShareButton url={'www.google.com'}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <FacebookMessengerShareButton url='www.google.com'>
                <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <FacebookShareButton url={'www.google.com'}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </div>
    );
};

export default ShareButtons;
