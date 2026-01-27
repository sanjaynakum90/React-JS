import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Config/Config';
import LoginModal from '../components/LoginModal';

const Home = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                navigate('/add-student');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="text-center shadow-lg p-4">
                        <Card.Body>
                            <div className="mb-4">
                                <i className="bi bi-mortarboard-fill" style={{ fontSize: '4rem', color: '#0d6efd' }}></i>
                            </div>
                            <Card.Title as="h1" className="mb-3">
                                Student Management System
                            </Card.Title>
                            <Card.Text className="text-muted mb-4">
                                A comprehensive platform to manage student records efficiently.
                                Add, edit, view, and delete student information with ease.
                            </Card.Text>

                            <div className="mb-4">
                                <h5 className="mb-3">Features:</h5>
                                <ul className="list-unstyled text-start">
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Add new student records
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Edit existing student information
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        View all students in a organized table
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Delete student records
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Secure authentication with Firebase
                                    </li>
                                </ul>
                            </div>

                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => setShowLoginModal(true)}
                                className="w-100"
                            >
                                <i className="bi bi-box-arrow-in-right me-2"></i>
                                Get Started
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <LoginModal
                show={showLoginModal}
                handleClose={() => setShowLoginModal(false)}
            />
        </Container>
    );
};

export default Home;