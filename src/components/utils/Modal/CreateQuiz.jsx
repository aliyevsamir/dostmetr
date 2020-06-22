import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import deleteIcon from '../../../utils/remove.png';
import { createQuizzes } from '../../../redux/actions/quizzes';
import { connect } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
import '../../../utils/flexbox.scss';

const CreateQuiz = ({ createQuizzes }) => {
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
        setQuestion({ question_content: '' });
        setOptions([{ option_content: '' }]);
        setVisible(false);
    };

    const handleCancel = e => {
        setQuestion({ question_content: '' });
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
                <TextArea
                    type='text'
                    placeholder='Sualı yazın'
                    rows={3}
                    onChange={e =>
                        setQuestion({ question_content: e.target.value })
                    }
                    value={question.question_content}
                    style={{ marginBottom: '10px' }}
                    required
                />
                <div className='options'>
                    {options.map((option, index) => (
                        <div
                            className='option myFlex'
                            key={index}
                            style={{ alignItems: 'center' }}
                        >
                            <TextArea
                                rows={1}
                                placeholder='Cavabı yazın'
                                value={option.option_content}
                                style={{
                                    marginBottom: '10px'
                                }}
                                key={index}
                                onChange={e => {
                                    let newOptions = [...options];
                                    newOptions[index].option_content =
                                        e.target.value;
                                    setOptions(newOptions);
                                }}
                                required
                            />
                            <img
                                className='delete-icon'
                                src={deleteIcon}
                                alt='delete'
                                style={{
                                    width: '40px',
                                    cursor: 'pointer',
                                    marginBottom: '10px'
                                }}
                                onClick={() => {
                                    let newOptions = [...options];
                                    newOptions.splice(index, 1);
                                    setOptions(newOptions);
                                }}
                            />
                        </div>
                    ))}
                </div>
                <Button onClick={handleAddOptionClick} type='primary'>
                    Variant əlavə et
                </Button>
            </Modal>
        </div>
    );
};

export default connect(null, { createQuizzes })(CreateQuiz);
