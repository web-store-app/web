import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <>
        <footer className="bg-dark text-light py-3 footer">
        <Container>
            <Row>
            <Col>
                <p>© 2024 Shop Whatsapp</p>
            </Col>
            <Col className="text-end">
                <p>Alguma coisa aqui</p>
            </Col>
            </Row>
        </Container>
        </footer>
    </>
  );
}

export default Footer;
