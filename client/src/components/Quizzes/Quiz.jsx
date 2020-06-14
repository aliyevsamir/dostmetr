import React from 'react';
import { Col, Row, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const Quiz = ({ quiz, quizIndex, handleChange, handleDelete }) => {
    return (
        <Row
            type='flex'
            align='middle'
            style={{
                borderRadius: '5px',
                border: '1px solid #000',
                padding: '10px 15px',
                margin: '10px 0',
                backgroundColor: 'ff5'
            }}
        >
            <Col span={24} style={{ marginBottom: '20px' }}>
                <TextArea
                    style={{ minWidth: '100%' }}
                    value={quiz.question_content}
                    onChange={e => handleChange(e, quizIndex, true, null)}
                />
            </Col>
            {quiz.options.map((option, index) => (
                <Col span={24} style={{ marginBottom: '10px' }}>
                    <TextArea
                        style={{ minWidth: '100%' }}
                        rows={4}
                        value={option.option_content}
                        key={index}
                        onChange={e => handleChange(e, quizIndex, false, index)}
                    />
                </Col>
            ))}
            <Col span={24} style={{ marginBottom: '5px' }}>
                <Button type='primary' style={{ minWidth: '100%' }}>
                    Variant əlavə et
                </Button>
            </Col>
            <Col span={24} style={{ marginBottom: '5px' }}>
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
