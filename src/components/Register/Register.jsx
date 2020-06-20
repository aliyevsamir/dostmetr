import React, { useState } from 'react';
import { Col, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { withRouter } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';

const Register = ({ register, history }) => {
    const [name, setName] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        register(name);
        history.push('/make-quiz');
    };

    return (
        <Col xs={20} sm={16} md={12} lg={8} xl={6}>
            <form onSubmit={onSubmit}>
                <Input
                    placeholder='Adınızı daxil edin'
                    onChange={e => setName(e.target.value)}
                    style={{ marginBottom: '10px' }}
                    value={name}
                    required
                />
                <Button
                    type='primary'
                    htmlType='submit'
                    style={{ width: '100%' }}
                >
                    <Text style={{ color: '#fff', fontWeight: '600' }}>
                        Öz quizini yarat
                    </Text>
                </Button>
            </form>
        </Col>
    );
};

export default connect(null, { register })(withRouter(Register));
