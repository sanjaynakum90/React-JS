import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Badge, ListGroup, Accordion, Button, Carousel } from "react-bootstrap";
import { ListData } from "../../Data/ListData";
import { AuthContext } from "../../Context/AuthContext";

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { user } = useContext(AuthContext);
  
  const tour = ListData.find((item) => item.id === Number(id));

  if (!tour) {
    return (
      <Container className="py-5 text-center">
        <h2>Tour not found</h2>
      </Container>
    );
  }

  const handleBook = () => {
    if (user) {
      navigate(`/booking/${id}`);
    } else {
      navigate('/login', { state: { from: `/booking/${id}` } });
    }
  };

  return (
    <Container className="py-3">
      <Row className="mb-3">
        <Col>
          <h1 className="display-4 fw-bold mb-2">{tour.name}</h1>
          <p className="fs-5 text-muted">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {tour.destination}
          </p>
          <div className="d-flex gap-2 p-2 my-2">
            <Badge className="p-2" bg="warning" text="light">
              ⭐ {tour.rating} Rating
            </Badge>
            <Badge className="p-2" bg="danger" text="light">
              {tour.tourInfo.difficulty}
            </Badge>
            <Badge className="p-2" bg="info" text="white">
              {tour.tourInfo.bestSeason} Best Season
            </Badge>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Carousel fade className="shadow mb-4 " style={{ borderRadius: "20px" }}>
            {tour.gallery.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={tour.name}
                  style={{ height: "500px", objectFit: "cover", borderRadius: "20px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <Row>
            <Col className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h3>About This Tour</h3>
                  <p className="text-muted">{tour.aboutTour}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row >
            <Col lg={12}>
              <Row className="mb-4">
                <Col md={6}>
                  <Card className="mb-3">
                    <Card.Header className="bg-success text-white">
                      Included
                    </Card.Header>
                    <ListGroup variant="flush">
                      {tour.included.map((item, i) => (
                        <ListGroup.Item key={i}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card>
                    <Card.Header className="bg-danger text-white">
                      Excluded
                    </Card.Header>
                    <ListGroup variant="flush">
                      {tour.excluded.map((item, i) => (
                        <ListGroup.Item key={i}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row >
            <Col lg={12} className="mb-5">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h3>Tour Itinerary</h3>
                  <Accordion>
                    {tour.itinerary.map((day, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                          Day {day.day} – {day.title}
                        </Accordion.Header>
                        <Accordion.Body>{day.details}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <div style={{ position: "sticky", top: "50px" }}>
            <Card className="shadow border-0">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <p className="text-muted mb-1">Starting from</p>
                  <h2 className="fw-bold text-primary">
                    ₹{tour.price.toLocaleString()}
                  </h2>
                  <small className="text-muted">per person</small>
                </div>

                <div className="bg-light rounded p-3 mb-4">
                  <p className="mb-2">
                    <i className="bi bi-clock me-2"></i>
                    {tour.duration}
                  </p>
                  <p className="mb-2">
                    <i className="bi bi-people me-2"></i>
                    {tour.tourInfo?.groupSize}
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-calendar-check me-2"></i>
                    {tour.tourInfo?.bestSeason}
                  </p>
                </div>

                <Button className="w-100 mb-3" size="lg" onClick={handleBook}>
                  Book Now
                </Button>
                <Button variant="outline-primary" className="w-100" size="lg">
                  Enquire
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TourDetail;