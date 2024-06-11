import { useState } from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import { Product } from '../../shared/types/types';
import { formatMoney } from '../../utils/formatMoney';
import { QuantityInput } from '../QuantityInput';
import useCart from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  show: boolean,
  onClose: () => void,
  product: Product
}

function ProductModal({ show, onClose, product }: ModalProps) {
  const { addProductToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const handleAddToCart = () => {
    addProductToCart({ ...product, quantity });
    onClose();
  };

  const handleAddAndPay = () => {
    addProductToCart({ ...product, quantity });
    navigate("/complete-order");
  };

  return (
    <Modal show={show} onHide={onClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={6}>
            <div className="img-thumbnail">
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-between">
            <div>
              <p><span className='fw-bold'>Descrição:</span> {product.description}</p>
              <p className='fw-bold'>R$ {formatMoney(product.price)}</p>
              {/* <p>Quantidade disponível: {product.quantityAvailable || 'Indisponível'}</p> */}
            </div>
            <div className='align-self-end'>
              <QuantityInput
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={quantity}
                size='small'
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
