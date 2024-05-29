import { Button, Image, Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/Steak.jpg';
import "./sass/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../SearchBar';

const cartQuantity = 10;

export default function StoreHeader() {
    return (
        <div className='border-bottom'>
            <Container className="py-3 sticky-top">
                <Row className="store-header-container align-items-center">
                    <Col xs={8} md={4} className="d-flex align-items-center justify-content-start justify-content-md-start mb-3 mb-md-0 order-md-1">
                        <div className="store-info d-flex align-items-center">
                            <Image src={logo} roundedCircle className="store-logo me-3" />

                            <span className="store-name fs-4 fw-bold d-block d-md-inline-block text-center text-md-start">
                                {"Nome do Restaurante"}
                            </span>
                        </div>
                    </Col>
                    <Col xs={12} md={5} className="d-flex justify-content-center mb-3 mb-md-0 order-3 order-md-2">
                        <SearchBar />
                    </Col>
                    <Col xs={4} md={2} className="d-flex justify-content-center justify-content-md-end order-md-3">
                        <Button variant="outline-secondary" className="cart-button p-2 position-relative">
                            <span className="text-bg-primary text-light">{cartQuantity}</span>
                            <FontAwesomeIcon icon={faCartShopping} size="lg" />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}