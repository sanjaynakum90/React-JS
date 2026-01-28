import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Config";

const NavigationBar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    Student CRUD
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {user && (
                            <>
                                <Nav.Link as={NavLink} to="/add-student">
                                    Add Student
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/students">
                                    View Students
                                </Nav.Link>
                            </>
                        )}
                    </Nav>

                    {user && (
                        <Nav className="align-items-center">
                            <i className="bi bi-person-circle text-light me-2 fs-4"></i>

                            <span className="text-light me-3">
                                {user.displayName || user.email}
                            </span>

                            <Button
                                variant="outline-light"
                                size="sm"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
