import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export function Home () {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col>
                    <h1>Bem-vindo ao Serviço de Entrega!</h1>
                    <p>Encontre os melhores restaurantes e pratos para entrega.</p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group controlId="formSearch">
                        <Form.Control type="text" placeholder="Digite o que você deseja..." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Buscar
                        </Button>
                    </Form>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                    <h2>Algumas opções populares</h2>
                    {}
                    </Col>
                </Row>
            </Container>
        </>
    );
}