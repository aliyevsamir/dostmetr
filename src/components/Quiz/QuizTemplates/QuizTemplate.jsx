import React from 'react';
import { Col, Radio, Button } from 'antd';
import Answer from './AnswerTemplate/Answer';
import Text from 'antd/lib/typography/Text';

import './QuizTemplates.scss';
import Question from './QuestionTemplate/Question';

const QuizTemplate = ({
    quiz: { question_content, options },
    currentQuestionID,
    skipQuestion,
    nextQuestion,
    selectedAnswers,
    quizLength,
    optionValue,
    handleOptionChange,
    handleFinishMakeQuiz,
    mode
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
            <span
                style={{
                    color: '#fff',
                    fontSize: '18px',
                    fontFamily: 'Bangers, cursive'
                }}
            >
                {selectedAnswers} / {quizLength}
            </span>
            <Text className='id'>Sual {currentQuestionID + 1}</Text>
            <Question question={question_content} />
            <Radio.Group onChange={handleOptionChange} value={optionValue}>
                {options.map(option => (
                    <Answer option={option} key={option.option_id} />
                ))}
            </Radio.Group>

            <div className='action-buttons'>
                <Button
                    onClick={skipQuestion}
                    className='action-buttons--button'
                >
                    Keç
                </Button>
                {selectedAnswers === quizLength - 1 ? (
                    <Button
                        type='primary'
                        onClick={handleFinishMakeQuiz}
                        action-buttons--button
                    >
                        Quizi tamamla
                    </Button>
                ) : (
                    <Button onClick={nextQuestion} action-buttons--button>
                        Cavabla
                    </Button>
                )}
                {mode === 'make' && selectedAnswers >= 10 ? (
                    <Button
                        type='primary'
                        onClick={handleFinishMakeQuiz}
                        action-buttons--button
                    >
                        Quizi tamamla
                    </Button>
                ) : null}
            </div>
        </Col>
    );
};

export default QuizTemplate;
