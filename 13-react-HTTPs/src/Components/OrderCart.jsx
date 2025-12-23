import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';

const OrderCart = ({ show, onHide }) => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                setLoading(true);
                const res = await axios.get('http://localhost:5000/orders');
                setOrders(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (show) fetchOrderData();
    }, [show]);

    const handleUpdateStatus = async (id, status) => {
        try {
            await axios.patch(`http://localhost:5000/orders/${id}`, {
                status,
            });

            setOrders((prev) =>
                prev.map((order) =>
                    order.id === id ? { ...order, status } : order
                )
            );
        } catch (err) {
            setError('Failed to update order status');
        }
    };


    const handleDeleteOrder = async (id) => {
        try {

            await axios.delete(`http://localhost:5000/orders/${id}`);


            setOrders((prev) => prev.filter((order) => order.id !== id));

        } catch (err) {

            setError('Failed to delete order');
        }
        onHide()
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Orders</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {error && <p className="text-danger">{error}</p>}
                {loading && <p>Loading...</p>}

                {orders.length === 0 ? (
                    <p>No orders found</p>
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Products</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Total</th>
                                <th className="text-center">Created At</th>
                                <th className="text-center" colSpan={2}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td className="text-center">{order.id}</td>

                                    <td>
                                        <ListGroup variant="flush">
                                            {order.cart.map((item, i) => (
                                                <ListGroup.Item key={i}>
                                                    <div className="fw-semibold">{item.name}</div>
                                                    <small className="text-muted">
                                                        Qty: {item.qty} × ₹{item.price}
                                                    </small>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </td>

                                    <td className="text-center">{order.status}</td>
                                    <td className="text-center">₹{order.totalAmount}</td>

                                    <td className="text-center">
                                        {new Date(order.createdAt).toLocaleString()}
                                    </td>

                                    <td className="text-center">
                                        <Button
                                            variant="success"
                                            size="sm"
                                            disabled={order.status === 'Completed'}
                                            onClick={() =>
                                                handleUpdateStatus(order.id, 'Completed')
                                            }
                                        >
                                            Complete
                                        </Button>
                                    </td>

                                    <td className="text-center">
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => handleDeleteOrder(order.id)}
                                        >
                                            Delete
                                        </Button>
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
