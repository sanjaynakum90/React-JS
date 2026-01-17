import { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { ListData } from '../../Data/ListData'
import { useNavigate } from "react-router-dom"

const TourList = () => {
    const navigate = useNavigate()
    const [sortType, setSortType] = useState('all');

    const getSortedTours = () => {
        let sorted = [...ListData];

        switch (sortType) {
            case 'new':
                sorted = sorted.sort((a, b) => b.id - a.id).slice(0, 6);
                break;

            case 'popular':
                sorted = sorted.sort((a, b) => b.rating - a.rating);
                break;

            case 'featured':
                sorted = sorted.sort((a, b) => {
                    const discountA = a.discount || 0;
                    const discountB = b.discount || 0;
                    return discountB - discountA;
                });
                break;

            default:
                break;
        }

        return sorted;
    };

    const sortedTours = getSortedTours();

    return (
        <Container className="py-5 ">
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center mb-2 fw-bold">Explore Our Tours</h1>
                    <p className="text-center text-muted">
                        Discover amazing destinations around the world
                    </p>
                    <div className="d-flex justify-content-center gap-2 my-2 p-2">
                        <Button
                            variant={sortType === 'all' ? 'success' : 'outline-success'}
                            onClick={() => setSortType('all')}
                        >
                            All Tours
                        </Button>
                        <Button
                            variant={sortType === 'new' ? 'success' : 'outline-success'}
                            onClick={() => setSortType('new')}
                        >
                            New
                        </Button>
                        <Button
                            variant={sortType === 'popular' ? 'success' : 'outline-success'}
                            onClick={() => setSortType('popular')}
                        >
                            Popular
                        </Button>
                        <Button
                            variant={sortType === 'featured' ? 'success' : 'outline-success'}
                            onClick={() => setSortType('featured')}
                        >
                            Featured
                        </Button>
                    </div>
                </Col>
            </Row>

            <Row className="g-4">
                {sortedTours.map((tour) => (
                    <Col key={tour.id} xs={12} sm={6} md={4} lg={4}>
                        <Card className="h-100 border-0 shadow-sm rounded-4">
                            <div className="position-relative">
                                <Card.Img
                                    src={tour.image}
                                    className="rounded-top-4"
                                    style={{ height: 220, objectFit: 'cover' }}
                                />
                                <div className="position-absolute top-0 start-0 p-3 d-flex gap-2">
                                    <Badge bg="success" className="px-3 py-2 rounded-pill">
                                        {tour.discount}% Off
                                    </Badge>
                                    <Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill">
                                        {tour.duration}
                                    </Badge>
                                </div>
                            </div>

                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="fw-bold fs-5 mb-2">
                                    {tour.name}
                                </Card.Title>

                                <div className="text-muted mb-3">
                                    <FaMapMarkerAlt className="me-2 text-warning" />
                                    {tour.destination}
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="fw-semibold text-success fs-5">
                                        ₹{tour.price.toLocaleString()}
                                        <span className="text-muted fs-6"> / Person</span>
                                    </div>

                                    <div className="fw-semibold">
                                        <FaStar className="text-warning me-1" />
                                        {tour.rating}
                                    </div>
                                </div>

                                <Button
                                    variant="success"
                                    className="mt-auto w-100 rounded-3 fw-bold py-2"
                                    onClick={() => navigate(`/tour/${tour.id}`)}
                                >
                                    More Details →
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default TourList