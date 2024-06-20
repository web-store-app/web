import { Col, ListGroup } from "react-bootstrap";
import { CartItem } from "../../../../shared/types/CartItem";
import ProductCartCard from "../ProductCartCard";

interface CartItemsListProps {
    cartItems: CartItem[];
}

const CartItemsList = ({ cartItems }: CartItemsListProps) => (
    <Col md={8}>
        <ListGroup variant="flush">
            {cartItems.map(item => (
                <ListGroup.Item key={item.id}>
                    <ProductCartCard product={item} />
                </ListGroup.Item>
            ))}
        </ListGroup>
    </Col>
);

export default CartItemsList;