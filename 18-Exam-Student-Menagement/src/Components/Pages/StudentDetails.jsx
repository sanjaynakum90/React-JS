import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import { deleteStudent, updateStudent } from "../../Features/student/studentSlice";

const StudentDetails = () => {
    const dispatch = useDispatch();
    const students = useSelector((state) => state.student.students);

    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState(null);

   
    const handleEdit = (student) => {
        setEditData({ ...student });
        setShowModal(true);
    };

    
    const handleUpdate = () => {
        dispatch(updateStudent(editData));
        setShowModal(false);
        alert("Student updated!");
    };

    
    const handleDelete = (id) => {
        if (window.confirm("Delete this student?")) {
            dispatch(deleteStudent(id));
            alert("Student deleted!");
        }
    };

    return (
        <Container className='p-4'>
            <Row>
                <Col>
                    <Card className='p-4'>
                        <h2 className='text-center mb-4'>Student List</h2>

                        {students.length === 0 ? (
                            <p className='text-center text-muted'>No students added yet</p>
                        ) : (
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>GR ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Course</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student, index) => (
                                        <tr key={student.id}>
                                            <td>{index + 1}</td>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                            <td>{student.course}</td>
                                            <td>
                                                <Button
                                                    variant='warning'
                                                    size='sm'
                                                    className="me-2"
                                                    onClick={() => handleEdit(student)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant='danger'
                                                    size='sm'
                                                    onClick={() => handleDelete(student.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    </Card>
                </Col>
            </Row>

          
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editData && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={editData.email}
                                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Course</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editData.course}
                                    onChange={(e) => setEditData({ ...editData, course: e.target.value })}
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default StudentDetails;