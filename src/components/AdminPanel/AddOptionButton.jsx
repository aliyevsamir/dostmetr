import React from 'react';
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { connect } from 'react-redux';
import { addOption, loadQuizzes } from '../../redux/actions/quizzes';

const AddOptionButton = ({ questionId, loadQuizzes, addOption }) => {
    const [visible, setVisible] = useState(false);
    const [option, setOption] = useState({ option_content: '' });

    const showModal = () => {
        setVisible(true);
    };

    const onOk = async () => {
        setVisible(false);
        await addOption(questionId, option);
        loadQuizzes();
    };

    const onCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button onClick={showModal} style={{ minWidth: '100%' }}>
                Variant əlavə et
            </Button>
            <Modal
                visible={visible}
                title='Variant əlavə et'
                onOk={onOk}
                onCancel={onCancel}
            >
                <TextArea
                    onChange={e =>
                        setOption({
                            option_content: e.target.value
                        })
                    }
                    value={option.option_content}
                />
            </Modal>
        </>
    );
};

export default connect(null, { addOption, loadQuizzes })(AddOptionButton);
