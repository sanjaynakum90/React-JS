import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { ListData } from '../../Data/ListData';
import { AuthContext } from '../../Context/AuthContext';

const BookingForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [bookingData, setBookingData] = useState({
        fullName: "",
        email: user?.email || "",
        phone: "",
        numberOfPeople: 1,
        bookingDate: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const tour = ListData.find((item) => item.id === Number(id));

    if (!tour) {
        return (
            <Container className="py-5 text-center">
                <h2>Tour not found</h2>
                <Button variant="primary" onClick={() => navigate('/tour')}>
                    Back to Tours
                </Button>
            </Container>
        );
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const bookingPayload = {
                fullName: bookingData.fullName,
                email: bookingData.email,
                phone: bookingData.phone,
                userId: user?.uid || null,

                tourId: tour.id,
                tourName: tour.name,
                destination: tour.destination,
                duration: tour.duration,

                numberOfPeople: Number(bookingData.numberOfPeople),
                bookingDate: bookingData.bookingDate,

                pricePerPerson: tour.price,
                totalAmount: tour.price * Number(bookingData.numberOfPeople),

                status: 'confirmed',
                paymentStatus: 'pending',
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };

            const DataCollection = await addDoc(collection(db, 'bookings'), bookingPayload);

            setSubmitted(true);

            setBookingData({
                fullName: "",
                email: user?.email || "",
                phone: "",
                numberOfPeople: 1,
                bookingDate: ""
            });



        } catch (err) {
            console.error('Error saving booking to Firebase:', err);
            setError(err.message || 'Failed to complete booking. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const totalPrice = tour.price * Number(bookingData.numberOfPeople);

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col lg={8}>
                    {submitted ? (
                        <Alert variant="success" className="text-center">
                            <h4>Booking Confirmed!</h4>
                            <p>Thank you for your booking. Redirecting to confirmation page...</p>
                            <Button variant='outline-primary' onClick={()=>navigate("/tour")}>Back To Tour</Button>
                        </Alert>
                    ) : (
                        <Card className="shadow">
                            <Card.Body className="p-4">
                                <h2 className="mb-4">Book Your Tour</h2>

                                {error && (
                                    <Alert variant="danger" dismissible onClose={() => setError('')}>
                                        {error}
                                    </Alert>
                                )}

                                <Card className="mb-4 bg-light">
                                    <Card.Body>
                                        <Row>
                                            <Col md={8}>
                                                <h5>{tour.name}</h5>
                                                <p className="text-muted mb-0">
                                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                                    {tour.destination}
                                                </p>
                                                <p className="text-muted mb-0">
                                                    <i className="bi bi-clock me-2"></i>
                                                    {tour.duration}
                                                </p>
                                            </Col>
                                            <Col md={4} className="text-end">
                                                <p className="text-muted mb-0">Price per person</p>
                                                <h4 className="text-primary">₹{tour.price.toLocaleString()}</h4>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Full Name *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="fullName"
                                            value={bookingData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email *</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={bookingData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your email"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone Number *</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            value={bookingData.phone}
                                            onChange={handleChange}
                                            required
                                            pattern="[0-9]{10}"
                                            placeholder="Enter 10-digit phone number"
                                        />
                                    </Form.Group>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Number of People *</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="numberOfPeople"
                                                    value={bookingData.numberOfPeople}
                                                    onChange={handleChange}
                                                    min="1"
                                                    max="20"
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Preferred Date *</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    name="bookingDate"
                                                    value={bookingData.bookingDate}
                                                    onChange={handleChange}
                                                    min={new Date().toISOString().split('T')[0]}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Card className="mb-4 bg-success text-white">
                                        <Card.Body>
                                            <Row className="align-items-center">
                                                <Col>
                                                    <h5 className="mb-0">Total Amount</h5>
                                                    <small>{bookingData.numberOfPeople} person(s) × ₹{tour.price.toLocaleString()}</small>
                                                </Col>
                                                <Col className="text-end">
                                                    <h3 className="mb-0">₹{totalPrice.toLocaleString()}</h3>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>

                                    <div className="d-grid gap-2">
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? 'Processing...' : 'Confirm Booking'}
                                        </Button>
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() => navigate(`/tour/${id}`)}
                                            disabled={loading}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default BookingForm;