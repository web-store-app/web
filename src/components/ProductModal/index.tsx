import React from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import { Product } from '../../shared/types/types';
import { formatMoney } from '../../utils/formatMoney';
import { QuantityInput } from '../QuantityInput';

interface ModalProps {
    show: boolean,
    onClose: () => void,
    product: Product
}

function ProductModal({ show, onClose, product }: ModalProps) {

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
          <Col xs={12} md={6}>
            <div>
              <p>Descrição: {product.description} ksjasdkjsgfjhsadfjkavsdfjkavsdfjk vaskjdfvasjkdfv jasvdfkjasv fjvsajdf vsakjdfvj avj</p>
              <p className='fw-bold'>R$ {formatMoney(product.price)}</p>
              {/* <p>Quantidade disponível: {product.quantityAvailable || 'Indisponível'}</p> */}
            </div>
            <QuantityInput 
              onIncrease={() => console.log()}
              onDecrease={() => console.log()}
              quantity={0}
              size='small'
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button variant="secondary" onClick={onClose}>
          Adicionar e continuar comprando
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Adicionar e pagar
        </Button>
      </Modal.Footer>
    </Modal>
    );
};

export default ProductModal;
