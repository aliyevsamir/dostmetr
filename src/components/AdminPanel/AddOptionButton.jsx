import React from 'react';
import { Button } from 'antd';

const AddOptionButton = ({ handleClick }) => {
    return (
        <Button onClick={handleClick} style={{ minWidth: '100%' }}>
            Variant əlavə et
        </Button>
    );
};

export default AddOptionButton;
