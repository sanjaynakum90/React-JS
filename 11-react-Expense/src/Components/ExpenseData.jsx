import React, { useContext } from "react";
import { expense } from "./ExpenseContext";
import { Card, Row, Col, Container } from "react-bootstrap";

const ExpenseData = () => {
    const { Credit, Debit, balance } = useContext(expense);

    return (
        <Container>

            <Row className="my-4">
                <Col md={4}>
                    <Card className="p-3 text-center shadow-sm">
                        <h5>Total Credit</h5>
                        <h2 className="text-success">{Credit}</h2>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="p-3 text-center shadow-sm">
                        <h5>Total Debit</h5>
                        <h2 className="text-danger">{Debit}</h2>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="p-3 text-center shadow-sm">
                        <h5>Balance</h5>
                        <h2>{balance}</h2>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ExpenseData;
