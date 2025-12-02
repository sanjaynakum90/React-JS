import React, { useContext, useState, useEffect } from "react";
import { expense } from "./ExpenseContext";
import {Row,Col, Form, Button, Card, Container } from "react-bootstrap";
import ExpenseData from "./ExpenseData";


const InputForm = () => {
    const [input, setInput] = useState({
        title: "",
        amount: "",
        type: "debit",
        category: "",
    });

    const { Add, editValue } = useContext(expense);

    useEffect(() => {
        if (editValue) setInput(editValue);
    }, [editValue]);

    const handleChange = (name, e) => {
        setInput({ ...input, [name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Add(input);
        setInput({ title: "", amount: "", type: "debit", category: "" });
    };

    return (
        <>
            <Container>

                <Container className="mt-4">
                    <Row>
                        <Col md={6}>
                            <Card md={6} className="p-4 shadow-lg mb-4">
                                <h4 className="mb-3">{editValue ? "Update Expense" : "Add Expense"}</h4>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            value={input.title}
                                            onChange={(e) => handleChange("title", e)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={input.amount}
                                            onChange={(e) => handleChange("amount", e)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Select
                                            value={input.type}
                                            onChange={(e) => handleChange("type", e)}
                                        >
                                            <option value="debit">Debit</option>
                                            <option value="credit">Credit</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Select
                                            value={input.category}
                                            onChange={(e) => handleChange("category", e)}
                                        >
                                            <option value="">Select</option>
                                            <option value="general">General</option>
                                            <option value="travel">Travel</option>
                                            <option value="food">Food</option>
                                            <option value="shopping">Shopping</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Button type="submit" variant="primary" className="w-100">
                                        {editValue ? "Update" : "Add"}
                                    </Button>
                                </Form>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <ExpenseData />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default InputForm;
