import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Aarav Mehta",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "My trip to Bali was a dream come true! The arrangements were flawless, and the local guides were super friendly. Highly recommend this travel agency!",
        },
        {
            id: 2,
            name: "Sofia Rodrigues",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "Amazing experience! From hotel bookings to adventure activities, everything was perfectly organized. I felt safe and enjoyed every moment.",
        },
        {
            id: 3,
            name: "Michael Carter",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            text: "I booked my honeymoon trip through them, and it was simply magical. Beautiful destinations, luxury stays, and top-class service!",
        },
        {
            id: 4,
            name: "Priya Sharma",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "Wonderful service! They customized my Europe tour exactly how I wanted. Great customer support and unforgettable memories.",
        },
    ];

    return (
        <>
            <h1 className="text-center  mt-3">Testimonials</h1>
            <hr className="w-25 m-auto mb-5" />
            <Container>
                <Row>
                    {testimonials.map((t) => {
                        return (
                            <Col md={3} key={t.id} className="text-center">
                                <Image src={t.image} roundedCircle thumbnail className="mb-2"></Image>
                                <Card style={{ border: "none" }}>
                                    <Card.Body>
                                        <Card.Title>{t.name}</Card.Title>
                                        <Card.Text>{t.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default Testimonials;