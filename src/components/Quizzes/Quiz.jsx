import React from 'react';
import { Col, Row, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import AddOptionButton from '../AdminPanel/AddOptionButton';

const Quiz = ({
    quiz,
    quiz: { options },
    quizIndex,
    handleChange,
    handleDelete,
    handleDeleteOption
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
                backgroundColor: '#33006F'
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
            <Col span={24}>
                {options.map(({ option_id, option_content }, index) => (
                    <Row type='flex' gutter={4} key={option_id}>
                        <Col span={21} style={{ marginBottom: '10px' }}>
                            <TextArea
                                style={{ minWidth: '100%', fontWeight: '500' }}
                                rows={1}
                                value={option_content}
                                onChange={e =>
                                    handleChange(e, quizIndex, false, index)
                                }
                            />
                        </Col>
                        <Col span={3}>
                            <Button
                                type='danger'
                                style={{ minWidth: '100%', cursor: 'pointer' }}
                                onClick={() => handleDeleteOption(option_id)}
                            >
                                Sil
                            </Button>
                        </Col>
                    </Row>
                ))}
            </Col>
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
