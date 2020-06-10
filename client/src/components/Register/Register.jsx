import React, { useState } from 'react';
import { Col } from 'antd';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { withRouter } from 'react-router-dom';

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
                <input
                    className='nameInput'
                    type='text'
                    placeholder='Name'
                    onChange={e => setName(e.target.value)}
                    value={name}
                    required
                />
                <input
                    className='submitInput'
                    type='submit'
                    value='Öz quizini yarat'
                />
            </form>
        </Col>
    );
};

export default connect(null, { register })(withRouter(Register));
