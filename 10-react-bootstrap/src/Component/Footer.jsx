import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contact from "./Contact";

const Footer = () => {
  return (
    <Container>
      <h1 className="text-center">Contact</h1>
      <hr className="w-25 mb-5 m-auto" />
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={6}>
          <Contact />
        </Col>
        <Col md={6}>
          <iframe
            className="rounded-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4588.912991979008!2d72.13886067600453!3d21.74645056274093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5100507f9379%3A0x999dfb8e22d5ef4b!2sRed%20and%20White%20Skill%20Education%20-%20Kaliyabid%2C%20Bhavnagar!5e1!3m2!1sen!2sin!4v1763616769658!5m2!1sen!2sin"
            width="600"
            thumbnail
            height="400"
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;