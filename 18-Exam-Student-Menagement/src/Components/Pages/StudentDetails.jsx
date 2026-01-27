import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button, Table, Modal, Form, Alert, Spinner, Badge } from 'react-bootstrap';
import { fetchStudents, updateStudentAsync, deleteStudentAsync } from "../../Features/student/studentThunk";

const StudentDetails = () => {
    const dispatch = useDispatch();
    const { students, loading, error } = useSelector((state) => state.student);

    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    const handleEdit = (student) => {
        setEditData({ ...student });
        setShowModal(true);
    };

    const handleUpdate = async () => {
        try {
            await dispatch(updateStudentAsync(editData)).unwrap();
            setShowModal(false);
            setSuccessMessage('Student updated successfully!');

            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (err) {
            console.error('Failed to update student:', err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            try {
                await dispatch(deleteStudentAsync(id)).unwrap();
                setSuccessMessage('Student deleted successfully!');

                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            } catch (err) {
                console.error('Failed to delete student:', err);
            }
        }
    };

    if (loading && students.length === 0) {
        return (
            <Container className='p-4 text-center'>
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p className='mt-3'>Loading students...</p>
            </Container>
        );
    }

    return (
        <Container className='p-4'>
            <Row>
                <Col>
                    <Card className='p-4 shadow'>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2>
                                <i className="bi bi-people-fill me-2"></i>
                                Student List
                            </h2>
                            <Badge bg="primary" pill>
                                Total: {students.length}
                            </Badge>
                        </div>

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

                        {students.length === 0 ? (
                            <div className='text-center p-5'>
                                <i className="bi bi-inbox" style={{ fontSize: '3rem', color: '#6c757d' }}></i>
                                <p className='text-muted mt-3'>No students added yet</p>
                                <p className='text-muted'>Start by adding your first student!</p>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <Table striped bordered hover>
                                    <thead className="table-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Course</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((student, index) => (
                                            <tr key={student.id}>
                                                <td>{index + 1}</td>
                                                <td>{student.id}</td>
                                                <td>
                                                    <i className="bi bi-person-circle me-2"></i>
                                                    {student.name}
                                                </td>
                                                <td>
                                                    <i className="bi bi-envelope me-2"></i>
                                                    {student.email}
                                                </td>
                                                <td>
                                                    <i className="bi bi-book me-2"></i>
                                                    {student.course}
                                                </td>
                                                <td className="text-center">
                                                    <Button
                                                        variant='warning'
                                                        size='sm'
                                                        className="me-2"
                                                        onClick={() => handleEdit(student)}
                                                        disabled={loading}
                                                    >
                                                        <i className="bi bi-pencil-square me-1"></i>
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        variant='danger'
                                                        size='sm'
                                                        onClick={() => handleDelete(student.id)}
                                                        disabled={loading}
                                                    >
                                                        <i className="bi bi-trash me-1"></i>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </Card>
                </Col>
            </Row>

            {/* Edit Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <i className="bi bi-pencil-square me-2"></i>
                        Edit Student
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editData && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-person me-2"></i>
                                    Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-envelope me-2"></i>
                                    Email
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    value={editData.email}
                                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-book me-2"></i>
                                    Course
                                </Form.Label>
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
                    <Button variant="secondary" onClick={() => setShowModal(false)} disabled={loading}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdate} disabled={loading}>
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
                                Saving...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-check-circle me-2"></i>
                                Save Changes
                            </>
                        )}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default StudentDetails;