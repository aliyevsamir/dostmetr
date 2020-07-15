import React from 'react';
import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import PropTypes from 'prop-types';

const QuizTemplate2 = ({ questions, type = 'my-quiz' }) => {
    return questions.map(question => (
        <Row
            key={question.question_id}
            style={{
                borderRadius: '5px',
                boxShadow: '3px 3px 3px rgba(0,0,0,.3)',
                padding: '20px 15px',
                margin: '15px 0',
                backgroundColor: '#33006F'
            }}
        >
            <Col span={24}>
                <Text
                    style={{
                        fontWeight: '600',
                        fontSize: '18px',
                        padding: '5px',
                        backgroundColor: '#fff',
                        minWidth: '100%',
                        display: 'inline-block',
                        borderRadius: '5px',
                        marginBottom: '10px',
                        minHeight: '65px'
                    }}
                >
                    {question.question_content}
                </Text>
            </Col>
            {question.options.map(option => (
                <Col key={option.option_id} span={24}>
                    <Text
                        style={{
                            fontWeight: '500',
                            fontSize: '14px',
                            padding: '5px',
                            backgroundColor:
                                (type === 'my-quiz' && option.selected) ||
                                (type === 'submission' &&
                                    option.selected &&
                                    option.correct) ||
                                (type === 'submission' &&
                                    option.correct &&
                                    !option.selected)
                                    ? '#0f0'
                                    : type === 'submission' &&
                                      !option.correct &&
                                      option.selected
                                    ? '#f00'
                                    : '#fff',
                            minWidth: '100%',
                            display: 'inline-block',
                            borderRadius: '5px',
                            marginBottom: '5px'
                        }}
                    >
                        {option.option_content}
                    </Text>
                </Col>
            ))}
        </Row>
    ));
};

QuizTemplate2.propTypes = {
    questions: PropTypes.array,
    type: PropTypes.string
};

export default QuizTemplate2;
