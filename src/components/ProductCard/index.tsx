import { Card } from "react-bootstrap";
import { Product } from "../../shared/types/types";
import { formatMoney } from "../../utils/formatMoney";
import "./styles.scss";

interface ProductProps {
    product: Product;
    style?: React.CSSProperties;
}

export function ProductCard({ product, style }: ProductProps) {
    const formattedPrice = formatMoney(product.price);

    return (
        <Card style={{ ...style }} id={product.id.toString()}>
            <Card.Body className="d-flex justify-content-between align-items-center">
                <div className='col'>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="truncated-text">
                        {product.description}
                        asjdhakdga bdkasbdkasb dkhasbdkhbasjhkd bakdbla dkabsdhkab kjldbaskdb ljadbkhabdkj abdkab dkbakjdbakj dbkjabd kabd kjadkjab kdbakd bakjb kabdkasbd ka
                    </Card.Text>
                    <Card.Text>
                        <span className="fw-bold">
                            R$ {formattedPrice}
                        </span>
                    </Card.Text>
                </div>
                <div className="col card-image">
                    <Card.Img src={product.image} />
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;