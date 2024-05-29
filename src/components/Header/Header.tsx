import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StoreHeader from './StoreHeader';

function Header() {
  return (
    <div className='white-smoke-bg'>
      <StoreHeader />

      <Container>
        <Navbar bg="light" data-bs-theme="light">
          <Nav className="me-auto fw-bold">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/categorias">Categorias</Nav.Link>
              <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
              <Nav.Link as={Link} to="/fale-conosco">Fale conosco</Nav.Link>
            </Nav>
        </Navbar>
    </Container>
    </div>
  );
}

export default Header;