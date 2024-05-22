import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Shop Whatsapp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#faleConosco">Fale conosco</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;