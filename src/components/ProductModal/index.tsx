import { useState } from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import { Product } from '../../shared/types/types';
import { formatMoney } from '../../utils/formatMoney';
import { QuantityInput } from '../QuantityInput';
import useCart from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import Textarea from '../Textarea';

interface ModalProps {
  show: boolean,
  onClose: () => void,
  product: Product
}

function ProductModal({ show, onClose, product }: ModalProps) {
  const { addProductToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState('');
  const navigate = useNavigate();

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const handleAddToCart = () => {
    addProductToCart({ ...product, quantity, observation });
    onClose();
  };

  const handleAddAndPay = () => {
    addProductToCart({ ...product, quantity, observation });
    navigate("/complete-order");
  };

  const handleObservationChange = (newObservation:string) => {
    setObservation(newObservation)
  }

  return (
    <Modal show={show} onHide={onClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={6}>
            <div className="img-thumbnail mx-5">
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-between align-items-center">
            <div>
              <p><span className='fw-bold'>Descrição:</span> {product.description}</p>
              <p className='fw-bold'>R$ {formatMoney(product.price)}</p>
              {/* <p>Quantidade disponível: {product.quantityAvailable || 'Indisponível'}</p> */}
              <Textarea 
                label="Observação:"
                controlId="productModalObservation"
                value={observation}
                onChange={handleObservationChange}
                placeholder='Detalhes adicionais ...'
              />
            </div>
            <div className='align-self-end m-2'>
              <QuantityInput
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={quantity}
                size='large'
              />
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button variant="secondary" onClick={handleAddToCart}>
          Adicionar e continuar comprando
        </Button>
        <Button variant="secondary" onClick={handleAddAndPay}>
          Adicionar e finalizar R$ {formatMoney(product.price * quantity)}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
