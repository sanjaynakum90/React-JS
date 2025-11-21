// TravelFooter.jsx
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaDribbble,
} from "react-icons/fa";

const Mainfooter = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
            <Container>
                <Row className="gy-4">

                    <Col md={4}>
                        <div>
                            <h4 className="fw-bold">WanderWorld</h4>
                            <p className="small mb-2">
                                Discover new places, hidden gems and unforgettable experiences.
                            </p>
                            <p className="small mb-0">
                                ✈️ <span className="text-muted">Your journey starts here.</span>
                            </p>
                        </div>
                        <div>
                            <Nav className="mt-4 gap-4">
                                <Nav.Item>
                                    <Nav.Link href="#" className="text-secondary fs-2 p-0">
                                        <FaFacebook />
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link href="#" className="text-secondary fs-2 p-0">
                                        <FaInstagram />
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link href="#" className="text-secondary fs-2 p-0">
                                        <FaTwitter />
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link href="#" className="text-secondary fs-2 p-0">
                                        <FaGithub />
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link href="#" className="text-secondary fs-2 p-0">
                                        <FaDribbble />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>

                    </Col>


                    <Col md={3}>
                        <h6 className="text-uppercase mb-3">Explore</h6>
                        <Nav className="flex-column">
                            <Nav.Link href="#destinations" className="p-0 mb-1 text-light-50">
                                Popular Destinations
                            </Nav.Link>
                            <Nav.Link href="#deals" className="p-0 mb-1 text-light-50">
                                Flight & Hotel Deals
                            </Nav.Link>
                            <Nav.Link href="#blogs" className="p-0 mb-1 text-light-50">
                                Travel Guides
                            </Nav.Link>
                            <Nav.Link href="#stories" className="p-0 text-light-50">
                                Traveler Stories
                            </Nav.Link>
                        </Nav>
                    </Col>


                    <Col md={3}>
                        <h6 className="text-uppercase mb-3">Support</h6>
                        <Nav className="flex-column">
                            <Nav.Link href="#help" className="p-0 mb-1 text-light-50">
                                Help Center
                            </Nav.Link>
                            <Nav.Link href="#contact" className="p-0 mb-1 text-light-50">
                                Contact Us
                            </Nav.Link>
                            <Nav.Link href="#faq" className="p-0 mb-1 text-light-50">
                                FAQs
                            </Nav.Link>
                            <Nav.Link href="#policy" className="p-0 text-light-50">
                                Privacy & Terms
                            </Nav.Link>
                        </Nav>
                    </Col>


                    <Col md={2}>
                        <h6 className="text-uppercase mb-3">Stay Updated</h6>
                        <p className="small mb-2">
                            Get the latest travel deals & tips.
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                            }}
                        >
                            <div className="mb-2">
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary w-100">
                                Subscribe
                            </button>
                        </form>


                        <div className="d-flex gap-2 mt-3">
                            <a href="#facebook" className="text-light-50 small">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#instagram" className="text-light-50 small">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#twitter" className="text-light-50 small">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="border-secondary my-4" />

                <Row>
                    <Col className="d-flex justify-content-between small text-muted">
                        <span>© {new Date().getFullYear()} WanderWorld. All rights reserved.</span>
                        <span>Made for travel lovers 🌍</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Mainfooter;
