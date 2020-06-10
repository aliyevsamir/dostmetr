import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import plusIcon from '../../../utils/plus.png';
import deleteIcon from '../../../utils/remove.png';
import './MyModal.scss';

const MyModal = () => {
    const [visible, setVisible] = useState(false);
    const [options, setOptions] = useState([{ option_content: '' }]);
    const [question, setQuestion] = useState('');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = e => {
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
        <div className='MyModal'>
            <Button type='primary' className='modal-button' onClick={showModal}>
                Sual tərtib edin
            </Button>
            <Modal
                title='Sualı tərtib edin'
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                className='modal-container'
            >
                <textarea
                    type='text'
                    className='question'
                    placeholder='Sualı yazın'
                    onChange={e => setQuestion(e.target.value)}
                    value={question}
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

export default MyModal;
