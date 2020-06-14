import React from 'react';
import { Radio } from 'antd';

const Answer = ({ option: { option_id, option_content } }) => {
    return (
        <Radio className='option' value={option_id}>
            {option_content}
        </Radio>
    );
};

export default Answer;
