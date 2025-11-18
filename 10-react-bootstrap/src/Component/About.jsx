import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const About = () => {
    return (
        <>
            <Container>
                <h1 className="text-center mt-5 text-decoration-underline">About Us</h1>
                <Row>
                    <Col sm={6}>
                        <Image
                            src="https://images.pexels.com/photos/52526/sign-places-travel-information-52526.jpeg"
                            alt="about us"
                            className="w-50"
                            style={{ height: "600px" }}
                        />
                    </Col>
                    <Col sm={6}>description</Col>
                </Row>
            </Container>
        </>
    );
};

export default About;