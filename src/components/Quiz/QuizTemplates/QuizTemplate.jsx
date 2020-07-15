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
    mode
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
            <span className='countBox'>
                {selectedAnswers} / {quizLength}
            </span>
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
                {selectedAnswers === quizLength - 1 ||
                (mode === 'make' && selectedAnswers >= 10) ? (
                    <Button
                        type='primary'
                        onClick={handleFinishQuiz}
                        action-buttons--button
                    >
                        Bitir
                    </Button>
                ) : (
                    <Button
                        onClick={nextQuestion}
                        type='primary'
                        action-buttons--button
                    >
                        Cavabla
                    </Button>
                )}
            </div>
        </Col>
    );
};

export default QuizTemplate;
