import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import replaceName from '../../../../utils/replaceName';
import Text from 'antd/lib/typography/Text';

const Question = ({ question, name }) => {
    const replacedQuestion = replaceName(question, name);

    return (
        <Text className='question' className='question'>
            {replacedQuestion}
        </Text>
    );
};

export default Question;
