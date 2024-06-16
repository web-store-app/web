import { Card } from "react-bootstrap";
import { Product } from "../../shared/types/types";
import { formatMoney } from "../../utils/formatMoney";
import "./styles.scss";
import { useState } from "react";
import ProductModal from "../ProductModal";

interface ProductProps {
    product: Product;
    style?: React.CSSProperties;
}

function ProductCard({ product, style }: ProductProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const formattedPrice = formatMoney(product.price);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Card style={{ ...style }} id={product.id.toString()} onClick={handleOpenModal}>
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className='col'>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text className="truncated-text">
                            {product.description}
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
            <ProductModal show={showModal} onClose={handleCloseModal} product={product} />
        </>
    );
}

export default ProductCard;