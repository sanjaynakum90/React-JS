import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';

const OrderCart = ({ show, onHide }) => {
    const [order, setOrder] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const res = await axios("http://localhost:5000/orders");
                setOrder(res.data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchOrderData();
    }, []);

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Order</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {error && <p className="text-danger">{error}</p>}

                {order.length === 0 ? (
                    <p>Your order is empty</p>
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Products</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>
                                        <ul>
                                            {order.cart.map((item, i) => (
                                                <li key={i}>
                                                    <div>
                                                        <div className="fw-semibold">{item.name}</div>
                                                        <small className="text-muted">
                                                            Qty: {item.qty} × ₹{item.price}
                                                        </small>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>{order.status}</td>
                                    <td>{order.totalAmount}</td>
                                    <td>
                                        {new Date(order.createAt).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default OrderCart;
