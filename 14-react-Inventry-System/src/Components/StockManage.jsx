import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const StockManage = () => {
    const Products = useSelector((state) => state.product.products);

    const TotalValue = Products.reduce((acc, curr) => {
        return acc + curr.price * curr.qty
    }, 0)


    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5>Total Products</h5>
                            <h4>{Products.length}</h4>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5>Total Value</h5>
                            <h4>{TotalValue}</h4>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5>High Stock</h5>
                            <h4></h4>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5>Low Stock</h5>
                            <h4></h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default StockManage;
