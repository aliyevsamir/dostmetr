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
    optionValue,
    handleOptionChange,
    handleFinishQuiz
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
            <Question question={question_content} />
            <Radio.Group onChange={handleOptionChange} value={optionValue}>
                {options.map((option, index) => (
                    <Answer option={option} key={index} />
                ))}
            </Radio.Group>

            <div className='action-buttons'>
                <Button onClick={skipQuestion}>Keç</Button>
                <Button onClick={nextQuestion}>Növbəti</Button>
                {selectedAnswers >= 10 && (
                    <Button type='primary' onClick={handleFinishQuiz}>
                        Quizi tamamla
                    </Button>
                )}
            </div>
        </Col>
    );
};

export default QuizTemplate;
