import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addStudent } from '../../Features/student/studentSlice';

const StudentForm = () => {
    const dispatch = useDispatch();

    const [student, setStudent] = useState({
        name: "",
        id: "",
        email: "",
        course: "",
    });

   

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(student));

        setStudent({ name: "", id: "", email: "", course: "" });
        alert("Student added!");
    };

    return (
        <Container className='p-4'>
            <Row>
                <Col md={8} className="mx-auto">
                    <Card className='p-4'>
                        <h2 className='text-center mb-4'>Add Student</h2>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    value={student.name}
                                    onChange={(e) => setStudent({ ...student, name: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>GR ID</Form.Label>
                                <Form.Control
                                    type='text'
                                    value={student.id}
                                    onChange={(e) => setStudent({ ...student, id: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    value={student.email}
                                    onChange={(e) => setStudent({ ...student, email: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Course</Form.Label>
                                <Form.Control
                                    type='text'
                                    value={student.course}
                                    onChange={(e) => setStudent({ ...student, course: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Button type='submit' variant='primary' className="w-100">
                                Add Student
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default StudentForm;