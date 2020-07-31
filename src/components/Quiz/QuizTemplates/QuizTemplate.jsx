import React from 'react';
import { Col, Radio, Button } from 'antd';
import Answer from './AnswerTemplate/Answer';

import './QuizTemplates.scss';
import Question from './QuestionTemplate/Question';

const QuizTemplate = ({
    quiz: { question_content, options },
    skipQuestion,
    nextQuestion,
    selectedAnswers,
    quizLength,
    optionValue,
    handleOptionChange,
    handleFinishQuiz,
    mode,
    name
}) => {
    return (
        <Col
            xs={20}
            sm={16}
            md={12}
            lg={8}
            xl={8}
            className='quiz-container--subcontainer'
        >
            <span className='countBox'>Cavablandınız: {selectedAnswers}</span>
            <Question question={question_content} name={name} />
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
                {selectedAnswers < quizLength - 1 && (
                    <Button
                        onClick={nextQuestion}
                        type='primary'
                        className='action-buttons--button'
                    >
                        Cavabla
                    </Button>
                )}
                {(mode === 'make' && selectedAnswers >= 10) ||
                (mode === 'take' && selectedAnswers === quizLength - 1) ? (
                    <Button
                        type='primary'
                        onClick={handleFinishQuiz}
                        className='action-buttons--button'
                    >
                        Bitir
                    </Button>
                ) : null}
            </div>
        </Col>
    );
};

export default QuizTemplate;
