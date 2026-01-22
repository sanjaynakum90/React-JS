import { useState, useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../Firebase/config';
import { signOut } from 'firebase/auth';
import AuthModal from '../Auth/Auth';

function Navigation() {
    const { user } = useContext(AuthContext);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleShowModal = () => setShowAuthModal(true);
    const handleCloseModal = () => setShowAuthModal(false);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

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
                            {!user ? (
                                <Nav.Link onClick={handleShowModal} style={{ cursor: 'pointer' }}>
                                    Login
                                </Nav.Link>
                            ) : (
                                <Button variant="danger" onClick={handleSignOut} size="sm">
                                    Logout
                                </Button>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <AuthModal show={showAuthModal} handleClose={handleCloseModal} />
        </>
    );
}

export default Navigation;