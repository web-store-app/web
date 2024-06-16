import React from 'react';
import { Form } from 'react-bootstrap';

interface TextareaProps {
    controlId: string;
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    rows?: number;
}

const Textarea = ({ controlId, label="", value, onChange, rows = 3, placeholder}:TextareaProps) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label className='fw-bold'>{label}</Form.Label>
            <Form.Control
                className='bg-light'
                as="textarea"
                rows={rows}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </Form.Group>
    );
};

export default Textarea;
