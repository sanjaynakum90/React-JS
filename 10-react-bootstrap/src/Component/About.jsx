import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const About = () => {
    return (
        <>
            <Container>
                <h1 className="text-center mt-5">About Us</h1>
                <hr className="w-25 m-auto" />
                <Row className="mt-5 d-flex justify-content-center align-items-center">
                    <Col md={6}>
                        <h1>WonderLust</h1>
                        <p>
                            At Wanderlust, we believe that travel is more than just visiting
                            new places – it’s about discovering yourself through the beauty of
                            the world. Our passion for exploration inspires us to craft
                            unforgettable journeys, filled with culture, adventure, and
                            meaningful experiences. From serene beaches and majestic mountains
                            to vibrant cities and hidden gems, we bring you the best of every
                            destination.
                        </p>
                        <p>
                            Our team of travel enthusiasts and experts work tirelessly to
                            provide personalized itineraries, insider tips, and seamless
                            planning, ensuring every trip is unique and stress-free. Whether
                            you’re a solo traveler, a couple seeking romance, or a family
                            looking for fun, Wanderlust turns your travel dreams into reality.
                        </p>
                        <p>
                            Pack your bags, feed your soul, and let Wanderlust guide you to
                            your next unforgettable story.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Image
                            src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg"
                            alt="about us"
                            className="w-90 rounded-4 float-end"
                            style={{ height: "500px", objectFit: "cover" }}
                            thumbnail
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;