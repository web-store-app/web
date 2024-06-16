import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import ProductCartCard from "./components/ProductCartCard";
import { formatMoney } from "../../utils/formatMoney";
import CartEmpty from './components/CartEmpty';

export default function CompleteOrder() {
    const { cartItems, cartItemsTotal } = useCart();
    const navigate = useNavigate();

    const handleFinishOrder = () => {
        navigate("/finish-order");
    };

    if (!cartItems.length)
        return <CartEmpty />

    return (
        <div className="mt-3">
            <h4 className="fw-bold">Itens adicionados</h4>
            <Row className="my-4">
                <Col md={8}>
                    <ListGroup variant="flush">
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.id}>
                                <ProductCartCard product={item} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <div>
                                <span className="fw-bold fs-5">Resumo do pedido</span>
                                <hr />
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col><span className="fw-bold">Total:</span></Col>
                                            <Col><span className="fw-bold">R$ {formatMoney(cartItemsTotal)}</span></Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                                <hr />
                                <div className='d-flex flex-column'>
                                    <Button variant="success" onClick={handleFinishOrder}>
                                        Finalizar pedido
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}