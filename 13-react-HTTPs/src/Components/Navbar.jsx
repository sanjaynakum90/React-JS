import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';




function BasicExample({ cart, onCartClick }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className="d-flex gap-4">
                            <Button variant="primary" onClick={onCartClick}>
                                <i className="fa-solid fa-cart-shopping"></i>Cart <Badge bg="primary">{cart.length}</Badge>
                            </Button>
                            <Button variant="primary">
                                Your Order
                            </Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;