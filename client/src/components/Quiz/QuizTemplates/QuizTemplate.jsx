import React from 'react';
import { Col, Radio, Button } from 'antd';
import Answer from './AnswerTemplate/Answer';
import TextArea from 'antd/lib/input/TextArea';
import Text from 'antd/lib/typography/Text';

import './QuizTemplates.scss';

const QuizTemplate = ({
    quiz: { question_content, options },
    currentQuestionID,
    skipQuestion,
    nextQuestion,
    selectedAnswers,
    optionValue,
    handleOptionChange
}) => {
    return (
        <Col
            xs={20}
            sm={16}
            md={14}
            lg={12}
            xl={10}
            className='quiz-container--subcontainer'
        >
            <Text className='id'>Sual {currentQuestionID + 1}</Text>
            <TextArea value={question_content} className='question' readOnly />
            <Radio.Group onChange={handleOptionChange} value={optionValue}>
                {options.map((option, index) => (
                    <Answer option={option} key={index} />
                ))}
            </Radio.Group>

            <div className='action-buttons'>
                <Button
                    onClick={skipQuestion}
                    // className='my-button skip-button'
                >
                    Keç
                </Button>
                <Button
                    onClick={nextQuestion}
                    className='my-button next-button'
                >
                    Növbəti
                </Button>
                {selectedAnswers >= 10 && (
                    <Button
                        type='primary'
                        className='my-button finish-quiz-button'
                    >
                        Quizi tamamla
                    </Button>
                )}
            </div>
        </Col>
    );
};

export default QuizTemplate;
