import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { formatMoney } from "../../../../utils/formatMoney";

interface OrderSummaryProps {
    total: number;
}

const OrderSumary = ({ total }: OrderSummaryProps) => {
    return (
        <Card className="m-2">
            <Card.Body>
                <Card.Title>Detalhes do pedido</Card.Title>
                <hr />
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col><span>Custo dos produtos:</span></Col>
                            <Col><span>R$ {formatMoney(total)}</span></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><span>Taxa:</span></Col>
                            <Col><span>R$ {formatMoney(0.99)}</span></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><span className="fw-bold">Total:</span></Col>
                            <Col><span className="fw-bold">R$ {formatMoney(total + 0.99)}</span></Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default OrderSumary;