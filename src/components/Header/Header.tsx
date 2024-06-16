import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../hooks/useStore';
import SearchBar from '../SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import "./sass/styles.scss";
import useCart from '../../hooks/useCart';
import StoreLogo from '../StoreLogo';

function Header() {
  const { store } = useStore();
  const { cartQuantity } = useCart();
  const navigate = useNavigate();
  
  const handleGoToCart = () => {
    navigate("/complete-order");
  }
  
  return (
    <header className='white-smoke-bg'>
      <Container className="py-4 sticky-top white-smoke-bg">
        <Row className="align-items-center">
          <Col xs={12} className="order-3 d-md-none">
            <hr />
          </Col>

          <Col xs={4} md={2} className="order-md-3 d-flex justify-content-end align-items-center order-2">
            <Button 
              variant="outline-secondary" 
              className="cart-button p-2 position-absolute border-0"
              onClick={handleGoToCart}>

              {cartQuantity > 0 &&
                <span className="text-bg-primary text-light fw-bold">{cartQuantity}</span>
              }
              <FontAwesomeIcon icon={faCartShopping} size="2x" />
            </Button>
          </Col>

          <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0 order-3 order-md-1">
            <div className="store-info d-flex align-items-center justify-content-center justify-content-md-start">
              <StoreLogo logo={store?.logo} />
              <span className="store-name fs-4 fw-bold">{store?.name}</span>
            </div>
          </Col>

          <Col xs={12} md={5} className="d-flex justify-content-center align-items-center mb-3 mb-md-0 order-4 order-md-2">
            <SearchBar />
          </Col>

          <Col xs={8} md={8} className="d-md-flex order-md-3 order-sm-1">
            <Navbar bg="light" variant="light" expand="sm">
              <Container className="p-0">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto fw-bold">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
                    <Nav.Link as={Link} to="/fale-conosco">Fale conosco</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;