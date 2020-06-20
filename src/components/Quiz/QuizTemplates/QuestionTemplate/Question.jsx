import React from 'react';
import TextArea from 'antd/lib/input/TextArea';

const Question = ({ question }) => {
    return <TextArea value={question} className='question' readOnly />;
};

export default Question;
