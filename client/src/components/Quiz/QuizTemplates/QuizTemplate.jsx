import React from 'react';
import { Col } from 'antd';
import Answer from './AnswerTemplate/Answer';

const QuizTemplate = ({
    quiz: { question_id, question, answers },
    skipQuestion,
    nextQuestion,
    selectedAnswers
}) => {
    return (
        <Col
            xs={22}
            sm={20}
            md={18}
            lg={18}
            xl={16}
            className='quiz-container--subcontainer'
        >
            <span className='question-id'>Sual {question_id + 1}</span>
            <textarea
                name='question'
                cols='60'
                rows='4'
                value={question}
                className='quiz-container--subcontainer-question'
                readOnly
            />
            {answers.map((answer, index) => (
                <Answer answer={answer} key={index} />
            ))}
            <div className='action-buttons'>
                <button onClick={skipQuestion} className='mybutton skip-button'>
                    Keç
                </button>
                <button onClick={nextQuestion} className='mybutton next-button'>
                    Növbəti
                </button>
                {selectedAnswers >= 10 && (
                    <button className='mybutton finish-quiz-button'>
                        Quizi tamamla
                    </button>
                )}
            </div>
        </Col>
    );
};

export default QuizTemplate;
