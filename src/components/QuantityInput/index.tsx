import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: QuantityInputProps) {
  const inputGroupSize = size === 'small' ? 'sm' : undefined;
  const paddingClass = size === 'small' ? 'p-1' : 'p-2';

  return (
    <InputGroup size={inputGroupSize} className={`d-flex align-items-center ${paddingClass}`} style={{ borderRadius: '6px', background: '#f0f0f0' }}>
      <Button 
        variant="outline-secondary" 
        onClick={onDecrease} 
        disabled={quantity <= 1}
        className="d-flex align-items-center justify-content-center"
        style={{ border: 'none', background: 'none', width: '1.75rem', height: '1.75rem' }}
      >
        <FontAwesomeIcon icon={faMinus}/>
      </Button>
      <FormControl 
        type="number" 
        readOnly 
        value={quantity} 
        className="text-center" 
        style={{ border: 'none', background: 'none' }}
      />
      <Button 
        variant="outline-secondary" 
        onClick={onIncrease}
        className="d-flex align-items-center justify-content-center"
        style={{ border: 'none', background: 'none', width: '1.75rem', height: '1.75rem' }}
      >
        <FontAwesomeIcon icon={faPlus}/>
      </Button>
    </InputGroup>
  );
}