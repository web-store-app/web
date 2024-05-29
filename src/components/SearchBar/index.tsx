import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";

import "./styles.scss";

export default function SearchBar() {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <Form>
                            <InputGroup className="search-bar">
                                <FormControl
                                    type="search"
                                    placeholder="Pesquisar..."
                                    aria-label="Pesquisar"
                                    className="form-control-lg"
                                />
                                <Button variant="outline-secondary">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}