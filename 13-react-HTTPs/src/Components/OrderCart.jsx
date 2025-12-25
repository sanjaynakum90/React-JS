import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import useHttp from '../Hooks/http';

const OrderCart = ({ show, onHide }) => {
    const [orders, setOrders] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    const url = "http://localhost:5000/orders"

    const { sendRequest, loading, error, data } = useHttp({ url, method: "GET" })

    useEffect(() => {
        const fetchOrderData = async () => {


            // try {
            //     setLoading(true);
            //     const res = await axios.get('http://localhost:5000/orders');
            //     setOrders(res.data);
            // } catch (err) {
            //     setError(err.message);
            // } finally {
            //     setLoading(false);
            // }

            sendRequest({
                url: url,
                method: "GET"
            })
        };

        if (show) fetchOrderData();
    }, [show, sendRequest, url]);


    useEffect(() => {
        if (data && data.length > 0) {
            setOrders(data);
        }
    }, [data]);

    const handleUpdateStatus = async (id, status) => {
        try {

            sendRequest({
                url: `${url}/${id}`,
                method: "PATCH",
                body: { status }
            })

            // await axios.patch(`http://localhost:5000/orders/${id}`, {
            //     status,
            // });

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

            sendRequest({
                url: `${url}/${id}`,
                method: "DELETE"
            })

            // await axios.delete(`http://localhost:5000/orders/${id}`);


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
                            {orders.map((ord) => (
                                <tr key={ord.id}>
                                    <td className="text-center">{ord.id}</td>

                                    <td>
                                        <ListGroup variant="flush">
                                            {(ord.cart || []

                                            ).map((item, i) => (
                                                <ListGroup.Item key={i}>
                                                    <div className="fw-semibold">{item.name}</div>
                                                    <small className="text-muted">
                                                        Qty: {item.qty} × ₹{item.price}
                                                    </small>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </td>

                                    <td className="text-center">{ord.status}</td>
                                    <td className="text-center">₹{ord.totalAmount}</td>

                                    <td className="text-center">
                                        {new Date(ord.createdAt).toLocaleString()}
                                    </td>

                                    <td className="text-center">
                                        <Button
                                            variant="success"
                                            size="sm"
                                            disabled={ord.status === 'Completed'}
                                            onClick={() =>
                                                handleUpdateStatus(ord.id, 'Completed')
                                            }
                                        >
                                            Complete
                                        </Button>
                                    </td>

                                    <td className="text-center">
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => handleDeleteOrder(ord.id)}
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
