import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AuthModal from '../Auth/Auth';

function Navigation() {
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleShowModal = () => setShowAuthModal(true);
    const handleCloseModal = () => setShowAuthModal(false);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Trvelo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/tour">Tour</Nav.Link>
                            <Nav.Link onClick={handleShowModal} style={{ cursor: 'pointer' }}>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <AuthModal show={showAuthModal} handleClose={handleCloseModal} />
        </>
    );
}

export default Navigation;