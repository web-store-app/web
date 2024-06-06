import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-dark text-light py-3 mt-auto footer">
        <Container>
          <Row>
            <Col>
              <p><FontAwesomeIcon icon={faCopyright} />  {currentYear} Shop Whatsapp</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
