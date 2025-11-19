import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaPlaneDeparture } from "react-icons/fa";

function BasicExample() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
       
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <FaPlaneDeparture className="me-2 fs-3" />
          TravelGo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#home" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="px-3">
              About
            </Nav.Link>
            <Nav.Link href="#service" className="px-3">
              Service
            </Nav.Link>
            <Nav.Link href="#contact" className="px-3">
              Contact
            </Nav.Link>

            <Button
              href="#book"
              variant="light"
              className="ms-lg-3 fw-semibold px-4"
            >
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
