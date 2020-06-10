import React from 'react';
import { Col } from 'antd';
import './Quizzes.scss';

const Quiz = ({ quiz, handleChange, handleDelete }) => {
    return (
        <Col xs={20} sm={18} md={16} lg={14} xl={12} className='quiz'>
            <textarea
                className='quiz-question'
                value={quiz.question}
                onChange={e => handleChange(e, quiz.question_id, true, null)}
            />
            {quiz.answers.map((answer, index) => (
                <textarea
                    rows={1}
                    value={answer}
                    className='quiz-answer'
                    key={index}
                    onChange={e =>
                        handleChange(e, quiz.question_id, false, index)
                    }
                />
            ))}
            <button className='add-option-button'>Variant əlavə et</button>
            <button
                className='delete-button'
                onClick={() => handleDelete(quiz.question_id)}
            >
                <p className='delete-button-text'>Quizi sil</p>
            </button>
        </Col>
    );
};

export default Quiz;
