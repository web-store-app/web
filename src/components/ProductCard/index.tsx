import { Card } from "react-bootstrap";
import { Product } from "../../shared/types/types";
import { formatMoney } from "../../utils/formatMoney";
import { QuantityInput } from "../QuantityInput";
import "./styles.scss";

interface ProductProps {
    product: Product;
    style?: React.CSSProperties;
}
export function ProductCard({ product, style }: ProductProps) {
    const formattedPrice = formatMoney(product.price);

    return (
        <Card style={{ ...style }} id={product.id.toString()}>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    R$ {formattedPrice}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="product-card-quantity">
                        <QuantityInput
                            onIncrease={() => console.log("plus")}
                            onDecrease={() => console.log("minus")}
                            quantity={10}
                            size="small"
                        />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;