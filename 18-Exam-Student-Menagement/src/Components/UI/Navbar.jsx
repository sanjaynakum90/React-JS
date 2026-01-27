import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Student CRUD</Navbar.Brand>
                <Nav>
                    <Nav.Link as={NavLink} to="/">
                        Add Student
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/students">
                        View Students
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;