import { formatMoney } from "../../../../utils/formatMoney";
import { Button, Card, Col, Row } from "react-bootstrap";
import useCart from "../../../../hooks/useCart";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CartItem } from "../../../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss"
import { useEffect, useState } from "react";
import Textarea from "../../../../components/Textarea";

interface ProductCartCardProps {
    product: CartItem;
}

function ProductCartCard({ product }: ProductCartCardProps) {
    const { changeCartItemQuantity, removeCartItem, updateObservation } = useCart();
    const [observation, setObservation] = useState(product.observation || '');
    const formattedPrice = formatMoney(product.price * product.quantity);

    function handleIncrease() {
        changeCartItemQuantity(product.id, "increase");
    }

    function handleDecrease() {
        changeCartItemQuantity(product.id, "decrease");
    }

    function handleRemove() {
        removeCartItem(product.id);
    }

    function handleObservationChange(newObservation: string) {
        setObservation(newObservation);
        updateObservation(product.id, newObservation);
    }

    useEffect(() => {
        setObservation(product.observation || '');
    }, [product.observation]);

    return (
        <Card className="my-1" id={product.id.toString()}>
            <Card.Body>
                <Row className="align-items-center justify-content-center">
                    <Col xs={4} md={2} lg={2} className="img-thumbnail card-cart-image">
                        <Card.Img src={product.image} />
                    </Col>
                    <Col xs={7} md={2} lg={2}>
                        <Card.Title><span className="fw-bold">{product.name}</span></Card.Title>
                        <Card.Text className="fw-bold">R$ {formattedPrice}</Card.Text>
                    </Col>
                    <Col xs={12} md={4} lg={4} className="my-0 my-md-0">
                        <Textarea
                            controlId="productCartCardObservation"
                            value={observation}
                            onChange={handleObservationChange}
                            placeholder='Detalhes adicionais ...'
                        />
                    </Col>
                    <Col xs={12} md={3} lg={3} className="align-self-center">
                        <div className="d-flex flex-md-row flex-row align-items-center justify-content-center justify-content-md-between">
                            <QuantityInput
                                onIncrease={handleIncrease}
                                onDecrease={handleDecrease}
                                quantity={product.quantity}
                                size="small"
                            />
                            <Button size="sm" variant="outline-danger" className="m-2" onClick={handleRemove}>
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ProductCartCard;