import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { ListData } from '../../Data/ListData';

const BookingForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const tour = ListData.find((item) => item.id === Number(id));

    const [bookingData, setBookingData] = useState({
        name: '',
        email: user?.email || '',
        phone: '',
        numberOfPeople: 1,
        bookingDate: '',
        specialRequests: ''
    });

    if (!user) {
        navigate('/login', { state: { from: `/booking/${id}` } });
        return null;
    }

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking Data:', bookingData);
        alert('Booking submitted successfully!');
        navigate('/tour');
    };

    const totalPrice = tour.price * bookingData.numberOfPeople;

    return (
        <Container className="py-5">
            <Row>
                <Col lg={8} className="mx-auto">
                    <Card className="shadow-sm border-0">
                        <Card.Body className="p-4">
                            <h2 className="mb-4">Book Your Tour</h2>

                            <div className="bg-light rounded p-3 mb-4">
                                <h5 className="mb-2">{tour.name}</h5>
                                <p className="text-muted mb-1">
                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                    {tour.destination}
                                </p>
                                <p className="text-muted mb-0">
                                    <i className="bi bi-clock me-2"></i>
                                    {tour.duration}
                                </p>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Full Name *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={bookingData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={bookingData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Phone Number *</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="phone"
                                                value={bookingData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter your phone number"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Number of People *</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="numberOfPeople"
                                                value={bookingData.numberOfPeople}
                                                onChange={handleChange}
                                                min="1"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Booking Date *</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="bookingDate"
                                        value={bookingData.bookingDate}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Special Requests</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="specialRequests"
                                        value={bookingData.specialRequests}
                                        onChange={handleChange}
                                        placeholder="Any special requirements or requests?"
                                    />
                                </Form.Group>

                                <div className="bg-primary bg-opacity-10 rounded p-3 mb-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Price per person:</span>
                                        <span className="fw-bold">₹{tour.price.toLocaleString()}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Number of people:</span>
                                        <span className="fw-bold">{bookingData.numberOfPeople}</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="fs-5 fw-bold">Total Amount:</span>
                                        <span className="fs-5 fw-bold text-primary">
                                            ₹{totalPrice.toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => navigate(`/tour/${id}`)}
                                        className="px-4"
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="success"
                                        className="flex-grow-1"
                                    >
                                        Confirm Booking
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BookingForm;