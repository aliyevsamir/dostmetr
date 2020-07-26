import React from 'react';
import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import PropTypes from 'prop-types';

const QuizTemplate2 = ({ questions, type = 'my-quiz' }) => {
    return questions.map(question => (
        <div
            key={question.question_id}
            style={{
                borderRadius: '.5rem',
                backgroundColor: '#fff',
                color: '#110',
                margin: '1rem 0',
                boxShadow: '0px 1px 1px rgba(0,0,0,.3)',
                padding: '1rem'
            }}
        >
            <Text
                style={{
                    fontWeight: '600',
                    fontSize: '18px',
                    padding: '5px',
                    border: '1px solid rgba(0,0,0,.1)',
                    minWidth: '100%',
                    display: 'inline-block',
                    borderRadius: '5px',
                    marginBottom: '10px',
                    minHeight: '65px'
                }}
            >
                {question.question_content}
            </Text>
            {question.options.map(option => (
                <Text
                    style={{
                        fontWeight: '500',
                        fontSize: '.8rem',
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
                        border: '1px solid rgba(0,0,0,.1)',
                        minWidth: '100%',
                        display: 'inline-block',
                        borderRadius: '5px',
                        marginBottom: '5px'
                    }}
                >
                    {option.option_content}
                </Text>
            ))}
        </div>
    ));
};

QuizTemplate2.propTypes = {
    questions: PropTypes.array,
    type: PropTypes.string
};

export default QuizTemplate2;
