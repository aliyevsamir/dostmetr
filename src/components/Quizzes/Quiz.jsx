import React, { useState, useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import AddOptionButton from '../AdminPanel/AddOptionButton';

const Quiz = ({
    quiz,
    quiz: { options },
    quizIndex,
    handleChange,
    handleDelete
}) => {
    return (
        <Row
            type='flex'
            align='middle'
            style={{
                borderRadius: '5px',
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
                    onBlur={() => alert('asdas')}
                />
            </Col>
            {options.map((option, index) => (
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
                <AddOptionButton questionId={quiz.question_id} />
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
