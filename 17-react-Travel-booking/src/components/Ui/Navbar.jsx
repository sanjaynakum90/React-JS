import { useState, useContext } from 'react';
import { Container, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { AuthContext } from '../../Context/AuthContext';
import AuthModal from '../Auth/Auth';
import { auth } from '../../Firebase/config';
import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

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
                        <div className="logo">
                            <NavLink to="/">
                                <picture>
                                    {/* <source srcSet="img/logo.webp" type="image/webp" /> */}
                                    <img src="https://preview.colorlib.com/theme/travelo/img/logo.webp" alt="Logo" fetchPriority="high" decoding="sync" />
                                </picture>
                            </NavLink>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-content" />

                    <Navbar.Collapse id="navbar-content">
                        <Nav className="mx-auto">
                            <Nav.Link as={NavLink} to="/Home" className="nav-item-modern" end>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="nav-item-modern">
                                About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/tour" className="nav-item-modern">
                                Tour
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="nav-item-modern">
                                Services
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="nav-item-modern">
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
                                    <span className="call-number">+91 9154685748</span>
                                </div>
                            </div>

                            {!user ? (
                                <Button onClick={handleShowModal} className="login-btn-modern">
                                    Login / Register
                                    <span className="arrow-icon">→</span>
                                </Button>
                            ) : (
                                <div className='d-flex gap-2 align-items-center'>
                                    <Button as={NavLink} to="/BookingDetails" className="booking-btn">
                                        📋 My Bookings
                                    </Button>
                                    <Dropdown align="end" className="dropdown-user">
                                        <Dropdown.Toggle id="user-dropdown">
                                            👤 Account
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                Profile
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