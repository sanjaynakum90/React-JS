import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { addStudentAsync } from '../../Features/student/studentThunk';

const StudentForm = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.student);

    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: "",
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await dispatch(addStudentAsync(student)).unwrap();
            setStudent({ name: "", email: "", course: "" });
            setSuccessMessage('Student added successfully!');

            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (err) {
            console.error('Failed to add student:', err);
        }
    };

    const handleChange = (field, value) => {
        setStudent({ ...student, [field]: value });
        setSuccessMessage('');
    };

    return (
        <Container className='p-4'>
            <Row>
                <Col md={8} className="mx-auto">
                    <Card className='p-4 shadow'>
                        <h2 className='text-center mb-4'>
                            <i className="bi bi-person-plus-fill me-2"></i>
                            Add Student
                        </h2>

                        {successMessage && (
                            <Alert variant="success" dismissible onClose={() => setSuccessMessage('')}>
                                {successMessage}
                            </Alert>
                        )}

                        {error && (
                            <Alert variant="danger">
                                Error: {error}
                            </Alert>
                        )}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    <i className="bi bi-person me-2"></i>
                                    Name
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter student name'
                                    value={student.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    <i className="bi bi-envelope me-2"></i>
                                    Email
                                </Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email address'
                                    value={student.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    <i className="bi bi-book me-2"></i>
                                    Course
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter course name'
                                    value={student.course}
                                    onChange={(e) => handleChange('course', e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </Form.Group>

                            <Button
                                type='submit'
                                variant='primary'
                                className="w-100"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                            className="me-2"
                                        />
                                        Adding...
                                    </>
                                ) : (
                                    <>
                                        <i className="bi bi-plus-circle me-2"></i>
                                        Add Student
                                    </>
                                )}
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default StudentForm;