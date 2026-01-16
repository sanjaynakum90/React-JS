import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge, ListGroup, Accordion, Button, Carousel } from "react-bootstrap";
import { ListData } from "../../Data/ListData";

const TourDetail = () => {
  const { id } = useParams();
  const tour = ListData.find((item) => item.id === Number(id));

  if (!tour) {
    return (
      <Container className="py-5 text-center">
        <h2>Tour not found</h2>
      </Container>
    );
  }

  return (
    <>

     
      <Container className="py-5">
        <Row className="mb-5">
          <Col>
            <div className="d-flex justify-content-between align-items-start flex-wrap">
              <div>
                <h1 className="display-4 fw-bold mb-2">{tour.name}</h1>
                <p className="fs-5 text-muted mb-3">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  {tour.destination}
                </p>
                <Badge bg="warning" text="dark" className="px-3 py-2 fs-6">
                  ⭐ {tour.rating} Rating
                </Badge>
              </div>
            </div>
          </Col>
        </Row>


        <Row className="mb-5 g-4">
          <Col lg={8}>
            <Carousel fade className="shadow-lg">
              {tour.gallery.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={`${tour.name} - ${index + 1}`}
                    style={{
                      height: "500px",
                      objectFit: "cover",
                      borderRadius: "20px"
                    }}
                  />
                  <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                    <h5>{tour.name}</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col lg={4}>
            <Card className="shadow-lg border-0 sticky-top" style={{ top: "20px" }}>
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <p className="text-muted mb-1">Starting from</p>
                  <h2 className="display-5 fw-bold text-primary mb-0">
                    ₹{tour.price.toLocaleString()}
                  </h2>
                  <small className="text-muted">per person</small>
                </div>

                <div className="bg-light rounded p-3 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-clock me-2 text-primary"></i>
                    <span>{tour.duration}</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-people me-2 text-primary"></i>
                    <span>{tour.tourInfo?.groupSize || "Group Tour"}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-calendar-check me-2 text-primary"></i>
                    <span>{tour.tourInfo?.bestSeason || "Available Year Round"}</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 mb-3 py-3 fw-bold shadow"
                >
                  <i className="bi bi-cart-check me-2"></i>
                  Book Now
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="w-100 py-3"
                >
                  <i className="bi bi-envelope me-2"></i>
                  Enquire
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <Row className="mb-5">
          <Col lg={8}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <h3 className="mb-4 fw-bold">
                  <i className="bi bi-info-circle text-primary me-2"></i>
                  About This Tour
                </h3>
                <p className="lead text-muted">{tour.aboutTour}</p>

                <Row className="mt-4 g-3">
                  <Col md={6}>
                    <Card className="bg-light border-0 h-100">
                      <Card.Body>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-tag fs-4 text-primary me-3"></i>
                          <div>
                            <small className="text-muted">Tour Type</small>
                            <p className="mb-0 fw-semibold">{tour.tourInfo?.tourType}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="bg-light border-0 h-100">
                      <Card.Body>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-people fs-4 text-primary me-3"></i>
                          <div>
                            <small className="text-muted">Group Size</small>
                            <p className="mb-0 fw-semibold">{tour.tourInfo?.groupSize}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="bg-light border-0 h-100">
                      <Card.Body>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-speedometer2 fs-4 text-primary me-3"></i>
                          <div>
                            <small className="text-muted">Difficulty</small>
                            <p className="mb-0 fw-semibold">{tour.tourInfo?.difficulty}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="bg-light border-0 h-100">
                      <Card.Body>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-sun fs-4 text-primary me-3"></i>
                          <div>
                            <small className="text-muted">Best Season</small>
                            <p className="mb-0 fw-semibold">{tour.tourInfo?.bestSeason}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="border-0 shadow-sm mb-3">
              <Card.Header className="bg-success text-white py-3">
                <h5 className="mb-0">
                  <i className="bi bi-check-circle me-2"></i>
                  Included
                </h5>
              </Card.Header>
              <ListGroup variant="flush">
                {tour.included?.map((item, i) => (
                  <ListGroup.Item key={i} className="py-3">
                    <i className="bi bi-check2 text-success me-2"></i>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-danger text-white py-3">
                <h5 className="mb-0">
                  <i className="bi bi-x-circle me-2"></i>
                  Excluded
                </h5>
              </Card.Header>
              <ListGroup variant="flush">
                {tour.excluded?.map((item, i) => (
                  <ListGroup.Item key={i} className="py-3">
                    <i className="bi bi-x text-danger me-2"></i>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>


        <Row className="mb-5">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-4 fw-bold">
                  <i className="bi bi-map text-primary me-2"></i>
                  Tour Itinerary
                </h3>
                <Accordion defaultActiveKey="0">
                  {tour.itinerary?.map((day, index) => (
                    <Accordion.Item eventKey={index.toString()} key={day.day} className="mb-2 border-0 shadow-sm">
                      <Accordion.Header>
                        <div className="d-flex align-items-center">
                          <Badge bg="primary" className="me-3 px-3 py-2">
                            Day {day.day}
                          </Badge>
                          <strong>{day.title}</strong>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="bg-light">
                        <p className="mb-0">{day.details}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <Card className="border-0 shadow-sm bg-light">
              <Card.Body className="p-4">
                <h3 className="mb-4 fw-bold">
                  <i className="bi bi-shield-check text-primary me-2"></i>
                  Tour Policies
                </h3>
                <Row>
                  <Col md={6} className="mb-3">
                    <div className="d-flex">
                      <i className="bi bi-x-octagon text-danger fs-4 me-3"></i>
                      <div>
                        <h5 className="fw-bold">Cancellation Policy</h5>
                        <p className="text-muted mb-0">{tour.policies?.cancellation}</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="d-flex">
                      <i className="bi bi-credit-card text-success fs-4 me-3"></i>
                      <div>
                        <h5 className="fw-bold">Payment Terms</h5>
                        <p className="text-muted mb-0">{tour.policies?.payment}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    </>
  );
};

export default TourDetail;