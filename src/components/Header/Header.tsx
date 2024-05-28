import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StoreHeader from './StoreHeader';

function Header() {
  return (
    <div className='white-smoke-bg'>
      <StoreHeader />

      <Container>
        <Navbar bg="light" data-bs-theme="light">
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/Ofertas">Ofertas</Nav.Link>
              <Nav.Link as={Link} to="/FaleConosco">Fale conosco</Nav.Link>
            </Nav>
        </Navbar>
    </Container>
    </div>
  );
}

export default Header;