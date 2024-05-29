import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Card } from 'react-bootstrap';

export function Home() {
    return (
        <>
            <div className="categorias">
                <Row>
                    <Col md={10} sm={10} xs={10}>
                        <span className="title">Produtos 1</span>
                    </Col>
                    <Col md={2} sm={2} xs={2}>
                        <a className="vertudo" href="">
                        <FontAwesomeIcon icon={faArrowRight} color='black'/>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '24rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={10} sm={10} xs={10}>
                        <span className="title">Produtos 1</span>
                    </Col>
                    <Col md={2} sm={2} xs={2}>
                        <a className="vertudo" href="">
                        <FontAwesomeIcon icon={faArrowRight} color='black'/>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '24rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}