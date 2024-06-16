import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

interface QuantityInputProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
  size?: 'small' | 'large';
}

const inputGroupWidths = {
  small: '7rem',
  large: '20rem',
};

const buttonSize = {
  small: '1.8rem',
  large: '2.1rem',
};

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'large',
}: QuantityInputProps) {
  const inputGroupSize = size === 'small' ? 'sm' : 'lg';
  const inputGroupWidth = inputGroupWidths[size];

  return (
    <InputGroup size={inputGroupSize} className="d-flex align-items-center" style={{ width: inputGroupWidth, borderRadius: '6px', background: '#f0f0f0' }}>
      <Button
        variant="outline-secondary"
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="d-flex align-items-center justify-content-center"
        style={{
          border: 'none',
          background: 'none',
          width: buttonSize[size],
          height: buttonSize[size]
        }}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <FormControl
        type="number"
        readOnly
        value={quantity}
        className="text-center"
        style={{
          border: 'none',
          background: 'none',
          width: `calc(${inputGroupWidth} - ${buttonSize[size]} * 2)`,
          padding: 0
        }}
      />
      <Button
        variant="outline-secondary"
        onClick={onIncrease}
        className="d-flex align-items-center justify-content-center"
        style={{
          border: 'none',
          background: 'none',
          width: buttonSize[size],
          height: buttonSize[size]
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </InputGroup>
  );
}
