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

const ShareButtons = ({ url }) => {
    return (
        <div>
            <WhatsappShareButton url={url}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <FacebookMessengerShareButton url={url}>
                <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <FacebookShareButton url={url}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </div>
    );
};

export default ShareButtons;
