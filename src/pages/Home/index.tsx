import { Row, Col } from 'react-bootstrap';

export function Home () {
    return (
        <>
            <Row className="mt-5">
                    <Col>
                    <h1>Bem-vindo ao Serviço de Entrega!</h1>
                    <p>Encontre os melhores restaurantes e pratos para entrega.</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                    <h2>Algumas opções populares</h2>
                    {}
                    </Col>
            </Row>
        </>
    );
}