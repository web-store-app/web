import { Form, Button, Image, InputGroup, Container } from 'react-bootstrap';
import { Search, Cart } from 'react-bootstrap-icons';
import Logo from '../../assets/Steak.jpg';
import "./sass/styles.scss";

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
                        <Search />
                    </Button>
                    </InputGroup>

                    <Button variant="outline-secondary" className="cart-button">
                        <Cart size={20} />
                    </Button>
                </div>
            </Container>
        </>
    );
}