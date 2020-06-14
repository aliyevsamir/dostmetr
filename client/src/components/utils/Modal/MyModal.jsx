import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import plusIcon from '../../../utils/plus.png';
import deleteIcon from '../../../utils/remove.png';
import { createQuizzes } from '../../../redux/actions/quizzes';
import { connect } from 'react-redux';

const MyModal = ({ createQuizzes }) => {
    const [visible, setVisible] = useState(false);
    const [options, setOptions] = useState([{ option_content: '' }]);
    const [question, setQuestion] = useState({ question_content: '' });

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = e => {
        const quiz = {};
        quiz.question = { ...question };
        quiz.options = [...options];
        createQuizzes(quiz);
        setVisible(false);
    };

    const handleCancel = e => {
        setQuestion('');
        setOptions([{ option_content: '' }]);
        setVisible(false);
    };

    const handleAddOptionClick = e => {
        e.preventDefault();
        setOptions([...options, { option_content: '' }]);
    };

    return (
        <div style={{ width: '100%' }}>
            <Button
                type='primary'
                style={{ width: '100%', margin: '10px 0' }}
                onClick={showModal}
            >
                Sual tərtib edin
            </Button>
            <Modal
                title='Sual tərtib edin'
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                className='modal-container'
            >
                <textarea
                    type='text'
                    className='question'
                    placeholder='Sualı yazın'
                    onChange={e =>
                        setQuestion({ question_content: e.target.value })
                    }
                    value={question.question_content}
                />
                <div className='options'>
                    {options.map((option, index) => (
                        <div className='option' key={index}>
                            <input
                                type='text'
                                placeholder='Cavabı yazın'
                                value={option.option_content}
                                className='options-input'
                                key={index}
                                onChange={e => {
                                    let newOptions = [...options];
                                    newOptions[index].option_content =
                                        e.target.value;
                                    setOptions(newOptions);
                                }}
                            />
                            <img
                                className='delete-icon'
                                src={deleteIcon}
                                alt='delete'
                                onClick={() => {
                                    let newOptions = [...options];
                                    newOptions.splice(index, 1);
                                    console.log(newOptions);
                                    setOptions(newOptions);
                                }}
                            />
                        </div>
                    ))}
                </div>
                <a className='add-option-button' onClick={handleAddOptionClick}>
                    <img src={plusIcon} alt='plus-icon' />
                </a>
            </Modal>
        </div>
    );
};

export default connect(null, { createQuizzes })(MyModal);
