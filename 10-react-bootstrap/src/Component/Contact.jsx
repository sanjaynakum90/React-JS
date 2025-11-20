import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <Container className="my-3">
            <Row className="justify-content-center">
                <Col md={12}>
                    <h2 className="mb-4 text-center">Contact Us</h2>

                    {submitted && (
                        <Alert variant="success">
                            Thank you! Your message has been sent.
                        </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="travelType">
                            <Form.Label>Type of Travel</Form.Label>
                            <Form.Select required>
                                <option value="">Select travel type</option>
                                <option>Adventure</option>
                                <option>Family</option>
                                <option>Luxury</option>
                                <option>Budget</option>
                                <option>Solo</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Write your message..."
                                required
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
