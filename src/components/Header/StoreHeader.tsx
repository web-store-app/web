import { Form, Button, Image, InputGroup, Container } from 'react-bootstrap';
import Logo from '../../assets/Steak.jpg';
import "./sass/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function StoreHeader() {
    return (
        <>
            <Container>
                <div className='store-header-container'>
                    <div className="store-info">
                        <Image src={Logo} roundedCircle className="store-logo" />
                        <span className="store-name">Nome do Restaurante</span>
                    </div>

                    <InputGroup className="search-bar">
                        <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-button"
                        className="custom-form-control"
                        />
                    <Button variant="outline-secondary" id="search-button" >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                    </InputGroup>

                    <Button variant="outline-secondary" className="cart-button">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Button>
                </div>
            </Container>
        </>
    );
}