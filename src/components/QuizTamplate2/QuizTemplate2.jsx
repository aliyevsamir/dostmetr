import React from 'react';
import Text from 'antd/lib/typography/Text';
import PropTypes from 'prop-types';
import replaceName from '../../utils/replaceName';

const QuizTemplate2 = ({ questions, type = 'my-quiz', name }) => {
    return questions.map(question => (
        <div
            key={question.question_id}
            style={{
                borderRadius: '.5rem',
                backgroundColor: '#fff',
                color: '#110',
                margin: '0.5rem 0 1rem',
                boxShadow: '0px 0px 3px rgba(0,0,0,.3)',
                padding: '1.5rem 1.4rem'
            }}
        >
            <Text
                style={{
                    fontSize: '1.4rem',
                    fontWeight: '900',
                    display: 'inline-block',
                    padding: '0 .2rem',
                    marginBottom: '.5rem',
                    color: '#444',
                    border: 'none'
                }}
            >
                {replaceName(question.question_content, name)}
            </Text>
            {question.options.map(option => (
                <Text
                    key={option.option_id}
                    style={{
                        fontWeight: '600',
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
                                ? '#32CD32'
                                : type === 'submission' &&
                                  !option.correct &&
                                  option.selected
                                ? '#f00'
                                : '#fff',
                        color:
                            (type === 'my-quiz' && option.selected) ||
                            (type === 'submission' && option.selected) ||
                            (type === 'submission' && option.correct)
                                ? '#fff'
                                : '#000',
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
