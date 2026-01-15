import { useParams } from "react-router-dom"

import { ListData } from "../../Data/ListData"

import { Container, Card, Badge, Row, Col } from "react-bootstrap"
import { FaStar } from "react-icons/fa"

const TourDetails = () => {
  const { id } = useParams()
  const tour = ListData.find(item => item.id === Number(id))

  if (!tour) {
    return <h2 className="text-center mt-5">Destination not found </h2>
  }

  return (
    <Container className="py-5">
      <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
        <Card.Img
          src={tour.image}
          style={{ height: "420px", objectFit: "cover" }}
        />

        <Card.Body className="p-4">
          <h2 className="fw-bold">{tour.name}</h2>
          <p className="text-muted">{tour.destination}</p>

          <div className="mb-3">
            <Badge bg="primary" className="me-2">
              {tour.duration}
            </Badge>
            <Badge bg="warning" text="dark">
              <FaStar className="me-1" />
              {tour.rating}
            </Badge>
          </div>

          <h4 className="text-success">
            ₹{tour.price.toLocaleString()}
          </h4>

          <p className="mt-4">{tour.description}</p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default TourDetails
