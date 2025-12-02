import React, { useContext } from "react";
import { expense } from "./ExpenseContext";
import { Card, Row, Col, Container } from "react-bootstrap";

const ExpenseData = () => {
    const { Credit, Debit, balance } = useContext(expense);

    return (
        <Container className="">
            <Row className="my-4 text-center">
                <Col xs={8} className="mb-2">
                    <Card className="p-3 text-center shadow-sm h-100">
                        <h5>Total Credit</h5>
                        <h2 className="text-success">{Credit}</h2>
                    </Card>
                </Col>
            </Row>
            <Row className="my-4 ">
                <Col xs={8} className="mb-2">
                    <Card className="p-3 text-center shadow-sm h-100">
                        <h5>Total Debit</h5>
                        <h2 className="text-danger">{Debit}</h2>
                    </Card>
                </Col>
            </Row>


            <Row className="my-4 ">
                <Col xs={8} className="mb-2">
                    <Card className="p-3 text-center shadow-sm h-100">
                        <h5>Balance</h5>
                        <h2>{balance}</h2>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default ExpenseData;
