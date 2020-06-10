import React from 'react';
import './AnswerTemplate.scss';
import { v4 as generateId } from 'uuid';

const Answer = ({ answer, forEditing }) => {
    const id = generateId();
    return (
        <div className='inputGroup'>
            <input id={id} name='radio' type='radio' value={answer} />
            <label for={id}>{answer}</label>
        </div>
    );
};

export default Answer;
