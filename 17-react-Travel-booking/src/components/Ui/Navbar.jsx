import { useState, useContext } from 'react';
import { Container, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { AuthContext } from '../../Context/AuthContext';
import AuthModal from '../Auth/Auth';
import { auth } from '../../Firebase/config';
import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

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
            <Navbar expand="lg" className="navbar-modern">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="brand-logo">
                        <div className="brand-circle">T</div>
                        <span>rvelo</span>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbar-content" />
                    
                    <Navbar.Collapse id="navbar-content">
                        <Nav className="mx-auto">
                            <Nav.Link
                                as={NavLink}
                                to="/"
                                className="nav-item-modern"
                                end
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/about"
                                className="nav-item-modern"
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/tour"
                                className="nav-item-modern"
                            >
                                Tour
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/services"
                                className="nav-item-modern"
                            >
                                Services
                            </Nav.Link>
                            <Dropdown className="d-inline">
                                <Dropdown.Toggle 
                                    variant="link" 
                                    className="nav-item-modern text-decoration-none"
                                    id="pages-dropdown"
                                >
                                    Pages
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="/page1">Page 1</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/page2">Page 2</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/page3">Page 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link
                                as={NavLink}
                                to="/contact"
                                className="nav-item-modern"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>

                        <div className="d-flex align-items-center gap-3">
                            <div className="call-button">
                                <div className="call-icon-circle">
                                    <Phone size={20} />
                                </div>
                                <div className="call-info">
                                    <span className="call-label">Call Us</span>
                                    <span className="call-number">+8801546857487</span>
                                </div>
                            </div>

                            {!user ? (
                                <Button
                                    onClick={handleShowModal}
                                    className="login-btn-modern"
                                >
                                    Login / Register
                                    <span className="arrow-icon">→</span>
                                </Button>
                            ) : (
                                <div className='d-flex gap-2 align-items-center'>
                                    <Button
                                        as={NavLink}
                                        to="/BookingDetails"
                                        className="booking-btn"
                                    >
                                        📋 My Bookings
                                    </Button>
                                    <Dropdown align="end" className="dropdown-user">
                                        <Dropdown.Toggle id="user-dropdown">
                                            👤 Account
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={NavLink} to="/profile">
                                                Profile
                                            </Dropdown.Item>
                                            <Dropdown.Item as={NavLink} to="/settings">
                                                Settings
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item onClick={handleSignOut} className="text-danger">
                                                Logout
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <AuthModal show={showAuthModal} handleClose={handleCloseModal} />
        </>
    );
}

export default Navigation;