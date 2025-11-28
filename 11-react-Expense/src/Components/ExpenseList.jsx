import React, { useContext } from "react";
import { expense } from "./ExpenseContext";
import { Table, Button, Container } from "react-bootstrap";

const ExpenseList = () => {
    const { list, update, deleteData } = useContext(expense);

    return (
        <>
            <Container><h3 className="my-3">Expense List</h3>
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
                        {list.map((l) => (
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
