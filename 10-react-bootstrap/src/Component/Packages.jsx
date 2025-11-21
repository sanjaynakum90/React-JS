import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const packages = [
    {
        id: 1,
        title: "Santorini Romantic Escape",
        description:
            "Experience breathtaking sunsets, whitewashed villages, and crystal-clear waters in Greece’s most romantic island.",
        image: "https://images.pexels.com/photos/295772/pexels-photo-295772.jpeg",
        price: "$899",
    },
    {
        id: 2,
        title: "Bali Tropical Retreat",
        description:
            "Discover lush forests, serene beaches, and cultural temples in the tropical paradise of Bali, Indonesia.",
        image: "https://images.pexels.com/photos/2521619/pexels-photo-2521619.jpeg",
        price: "$799",
    },
    {
        id: 3,
        title: "Swiss Alps Adventure",
        description:
            "Embark on a thrilling journey through snowy peaks, scenic trains, and charming alpine villages in Switzerland.",
        image: "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg",
        price: "$1199",
    },
    {
        id: 4,
        title: "Dubai Luxury Tour",
        description:
            "Enjoy the glamour of Dubai with desert safaris, skyscrapers, luxury shopping, and unforgettable experiences.",
        image: "https://images.pexels.com/photos/1619312/pexels-photo-1619312.jpeg",
        price: "$999",
    },
    {
        id: 5,
        title: "Maldives Beach Paradise",
        description:
            "Relax in overwater villas, swim in turquoise lagoons, and enjoy a peaceful island life in the Maldives.",
        image: "https://images.pexels.com/photos/3601424/pexels-photo-3601424.jpeg",
        price: "$1299",
    },
    {
        id: 6,
        title: "Paris Cultural Journey",
        description:
            "Explore iconic landmarks, charming cafes, art museums, and the romance of the City of Lights.",
        image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
        price: "$899",
    },
];

function Packages() {
    return (
        <Container>
            <h1 className="text-center mt-5">Package</h1>
            <hr className="w-25 m-auto" />
            <Row className="g-5 mt-3 text-center">
                {packages.map((p) => {
                    return (
                        <Col md={4} key={p.id}>
                            <Card className="rounded-3 bg-dark text-white border-white" style={{ height: "100%", minHeight: "500px" }}>
                                <Image
                                    className="rounded-3"
                                    src={p.image}
                                    style={{
                                        height: "250px",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text style={{ flexGrow: 1 }}>
                                        {p.description}
                                    </Card.Text>
                                    <Button variant="primary">
                                        Price {p.price}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Packages;
