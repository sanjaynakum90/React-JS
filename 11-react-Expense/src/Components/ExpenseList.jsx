import React, { useContext, useState } from "react";
import { expense } from "./ExpenseContext";
import { Table, Button, Container, Form, Row, Col } from "react-bootstrap";

const ExpenseList = () => {
    const { list, update, deleteData } = useContext(expense);

    // If list is undefined → use empty array instead
    const safeList = Array.isArray(list) ? list : [];

    const [expenseQuery, setExpenseQuery] = useState({
        search: "",
        type: "all",
        category: "all",
        sortedBy: "latest"
    });

    const handleQuery = (identifier, e) => {
        setExpenseQuery((prev) => ({
            ...prev,
            [identifier]: e.target.value,
        }));
    };

    const filterList = safeList
        .filter((l) =>
            l.title.toLowerCase().includes(expenseQuery.search.toLowerCase())
        )
        .filter((l) =>
            expenseQuery.type === "all" ? true : l.type === expenseQuery.type
        )
        .filter((l) =>
            expenseQuery.category === "all" ? true : l.category === expenseQuery.category
        );

    const sortedList = [...filterList].sort((a, b) => {
        if (expenseQuery.sortedBy === "latest") return b.id - a.id;
        if (expenseQuery.sortedBy === "oldest") return a.id - b.id;
        if (expenseQuery.sortedBy === "ascending") return Number(a.amount) - Number(b.amount);
        if (expenseQuery.sortedBy === "descending") return Number(b.amount) - Number(a.amount);
        return 0;
    });

    return (
        <>
            <Container className="my-3">
                <h4>Filters</h4>

                <Form>
                    <Row className="gy-2">
                        <Col md={3}>
                            <Form.Control
                                type="text"
                                placeholder="Search title..."
                                value={expenseQuery.search}
                                onChange={(e) => handleQuery("search", e)}
                            />
                        </Col>

                        <Col md={3}>
                            <Form.Select
                                value={expenseQuery.type}
                                onChange={(e) => handleQuery("type", e)}
                            >
                                <option value="all">All Types</option>
                                <option value="credit">Credit</option>
                                <option value="debit">Debit</option>
                            </Form.Select>
                        </Col>

                        <Col md={3}>
                            <Form.Select
                                value={expenseQuery.category}
                                onChange={(e) => handleQuery("category", e)}
                            >
                                <option value="all">All Categories</option>
                                <option value="general">General</option>
                                <option value="travel">Travel</option>
                                <option value="food">Food</option>
                                <option value="shopping">Shopping</option>
                            </Form.Select>
                        </Col>

                        <Col md={3}>
                            <Form.Select
                                value={expenseQuery.sortedBy}
                                onChange={(e) => handleQuery("sortedBy", e)}
                            >
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                                <option value="ascending">Money Ascending</option>
                                <option value="descending">Money Descending</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <Container>
                <h3 className="my-3">Expense List</h3>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {sortedList.map((l) => (
                            <tr key={l.id}>
                                <td>{l.title}</td>
                                <td>{l.amount}</td>
                                <td>{l.type}</td>
                                <td>{l.category}</td>

                                <td>
                                    <Button variant="warning" onClick={() => update(l.id)}>
                                        Edit
                                    </Button>
                                </td>

                                <td>
                                    <Button variant="danger" onClick={() => deleteData(l.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default ExpenseList;
