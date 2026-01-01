import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";




const StockManage = () => {
    const Products = useSelector((state) => state.product.products);

    const TotalValue = Products.reduce((acc, curr) => {
        return acc += curr.price * curr.qty
    }, 0)

    const HighStock = Products.filter(prod => prod.qty > 10).length;

    const LowStock = Products.filter(prod => prod.qty <= 10).length;

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
                            <h5><FaRupeeSign /> Total Value</h5>
                            <h4>{TotalValue}</h4>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5><FaArrowTrendUp /> High Stock</h5>
                            <h4>{HighStock}</h4>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5><FaArrowTrendDown /> Low Stock</h5>
                            <h4>{LowStock}</h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default StockManage;
