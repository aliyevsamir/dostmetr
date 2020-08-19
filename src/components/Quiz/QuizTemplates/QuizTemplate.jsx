import React from 'react';
import { Col, Radio, Button, Progress } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
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
    quizSubmissionLoading,
    mode,
    name
}) => {
    const canFinish =
        (mode === 'make' && selectedAnswers >= 10) ||
        (mode === 'take' && selectedAnswers === quizLength - 1);
    return (
        <Col
            xs={21}
            sm={14}
            md={11}
            lg={8}
            xl={6}
            className='quiz-container--subcontainer'
        >
            <Progress
                percent={(selectedAnswers / quizLength) * 100}
                showInfo={false}
                strokeColor='#d54'
            />
            <Question question={question_content} name={name} />
            <Radio.Group onChange={handleOptionChange} value={optionValue}>
                {options.map(option => (
                    <Answer option={option} key={option.option_id} />
                ))}
            </Radio.Group>

            <div
                className='action-buttons'
                style={{ marginBottom: canFinish ? '20px' : '0px' }}
            >
                {selectedAnswers < quizLength - 1 && (
                    <Button
                        onClick={nextQuestion}
                        type='primary'
                        className={`action-buttons--button next`}
                    >
                        Növbəti
                    </Button>
                )}
                {(!canFinish && mode === 'take') ||
                (mode === 'make' && selectedAnswers < quizLength - 1) ? (
                    <Button
                        onClick={skipQuestion}
                        className={`action-buttons--button skip`}
                    >
                        <DoubleRightOutlined />
                        <span>Keç</span>
                    </Button>
                ) : null}
                {canFinish ? (
                    <Button
                        type='primary'
                        onClick={handleFinishQuiz}
                        className='action-buttons--button finish-button'
                        loading={quizSubmissionLoading}
                    >
                        Bitir
                    </Button>
                ) : null}
            </div>
        </Col>
    );
};

export default QuizTemplate;
