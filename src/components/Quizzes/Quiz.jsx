import React from 'react';
import { Col, Row, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const Quiz = ({ quiz, quizIndex, handleChange, handleDelete }) => {
    const handleAddOption = () => {
        // TODO: Add new input to be able to add new option
    };
    return (
        <Row
            type='flex'
            align='middle'
            style={{
                borderRadius: '5px',
                border: '1px solid rgba(0,0,0,.1)',
                boxShadow: '3px 3px 3px rgba(0,0,0,.3)',
                padding: '20px 15px',
                margin: '15px 0',
                backgroundColor: '#005bea'
            }}
        >
            <Col span={24} style={{ marginBottom: '20px' }}>
                <TextArea
                    style={{ minWidth: '100%', fontWeight: '600' }}
                    rows={3}
                    value={quiz.question_content}
                    onChange={e => handleChange(e, quizIndex, true, null)}
                />
            </Col>
            {quiz.options.map((option, index) => (
                <Col span={24} style={{ marginBottom: '10px' }} key={index}>
                    <TextArea
                        style={{ minWidth: '100%', fontWeight: '500' }}
                        rows={1}
                        value={option.option_content}
                        onChange={e => handleChange(e, quizIndex, false, index)}
                    />
                </Col>
            ))}
            <Col span={24} style={{ marginBottom: '5px' }}>
                <Button style={{ minWidth: '100%' }} onClick={handleAddOption}>
                    Variant əlavə et
                </Button>
            </Col>
            <Col span={24}>
                <Button
                    style={{ minWidth: '100%' }}
                    type='danger'
                    onClick={() => handleDelete(quiz.question_id)}
                >
                    Quizi sil
                </Button>
            </Col>
        </Row>
    );
};

export default Quiz;
