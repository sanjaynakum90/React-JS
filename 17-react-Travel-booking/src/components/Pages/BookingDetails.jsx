import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Badge, Button, Spinner, Alert, Table } from 'react-bootstrap';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const BookingDetails = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookings = async () => {
            if (!user) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const q = query(
                    collection(db, 'bookings'),
                    where('userId', '==', user.uid),
                    orderBy('createdAt', 'desc')
                );

                const querySnapshot = await getDocs(q);
                const bookingsData = [];

                querySnapshot.forEach((doc) => {
                    bookingsData.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });

                setBookings(bookingsData);
            } catch (err) {
                console.error('Error fetching bookings:', err);
                setError('Failed to load bookings. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [user]);

    console.log("booking", bookings);
    

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    if (!user) {
        return (
            <Container className="py-5 text-center">
                <Alert variant="warning">
                    <h4>Please login to view your bookings</h4>
                    <Button variant="primary" onClick={() => navigate('/')}>
                        Go to Home
                    </Button>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row className="mb-4">
                <Col>
                    <h1 className="fw-bold mb-2">My Bookings</h1>
                    <p className="text-muted">View and manage all your tour bookings</p>
                </Col>
            </Row>

            {error && (
                <Alert variant="danger" dismissible onClose={() => setError('')}>
                    {error}
                </Alert>
            )}

            {bookings.length === 0 ? (
                <Card className="text-center py-5">
                    <Card.Body>
                        <i className="bi bi-calendar-x" style={{ fontSize: '4rem', color: '#ccc' }}></i>
                        <h3 className="mt-3">No bookings yet</h3>
                        <p className="text-muted">Start exploring our amazing tours!</p>
                        <Button variant="primary" onClick={() => navigate('/tour')}>
                            Browse Tours
                        </Button>
                    </Card.Body>
                </Card>
            ) : (
                <Row className="g-4">
                    {bookings.map((booking) => (
                        <Col key={booking.id} lg={12}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Row>
                                        <Col md={8}>
                                            <h4 className="fw-bold mb-3">{booking.tourName}</h4>

                                            <div className="mb-2">
                                                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                                                <strong>Destination:</strong> {booking.destination}
                                            </div>

                                            <div className="mb-2">
                                                <i className="bi bi-calendar-event text-success me-2"></i>
                                                <strong>Booking Date:</strong> {booking.bookingDate}
                                            </div>

                                            <div className="mb-2">
                                                <i className="bi bi-people-fill text-info me-2"></i>
                                                <strong>Number of People:</strong> {booking.numberOfPeople}
                                            </div>

                                            <div className="mb-2">
                                                <i className="bi bi-clock text-warning me-2"></i>
                                                <strong>Duration:</strong> {booking.duration}
                                            </div>

                                            <div className="mb-3">
                                                <i className="bi bi-person-fill text-secondary me-2"></i>
                                                <strong>Contact:</strong> {booking.fullName} | {booking.phone}
                                            </div>

                                            <div className="d-flex gap-2">
                                                <Badge bg={booking.status === 'confirmed' ? 'success' : 'warning'}>
                                                    {booking.status.toUpperCase()}
                                                </Badge>
                                                <Badge bg={booking.paymentStatus === 'pending' ? 'danger' : 'success'}>
                                                    Payment: {booking.paymentStatus.toUpperCase()}
                                                </Badge>
                                            </div>
                                        </Col>

                                        <Col md={4} className="text-end">
                                            <div className="mb-3">
                                                <p className="text-muted mb-1">Total Amount</p>
                                                <h3 className="text-primary fw-bold">
                                                    ₹{booking.totalAmount.toLocaleString()}
                                                </h3>
                                                <small className="text-muted">
                                                    ₹{booking.pricePerPerson.toLocaleString()} × {booking.numberOfPeople} person(s)
                                                </small>
                                            </div>

                                            <Button
                                                variant="outline-primary"
                                                className="w-100"
                                                onClick={() => navigate(`/tour/${booking.tourId}`)}
                                            >
                                                View Tour Details
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default BookingDetails;