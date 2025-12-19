import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

const OrderCart = () => {
    const [order, setOrder] = useState([])

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const res = await axios("http://localhost:5000/orders");

                const data = res.data;

                if (data.length <= 0) {
                    setError("data not fatching")
                }

                setOrder(data)
            } catch (error) {

                console.log(error);

                if (error.status === 404) {
                    setError("invalid url");
                } else {
                    setError(error.message);
                }
            }
        }
        fetchOrderData();
    }, [])
    return (
        <>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Order
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {order.length === 0 ? (
                        <p> your order is Empty</p>
                    ) : (
                        <ListGroup variant="flush">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Product</th>
                                        <th>status</th>
                                        <th>Total Amount</th>
                                        <th>Crteat At</th>
                                        <th colSpan={2}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.map((order) => (
                                        <>
                                            <tr>
                                                <td>{order.id}</td>
                                                <td>
                                                    {order.cart.map((item)=>(
                                                        <>
                                                        
                                                        </>
                                                    ))}
                                                </td>
                                                <td>{order.id}</td>
                                                <td>{order.id}</td>
                                                <td>{order.id}</td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </Table>
                        </ListGroup>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={""}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default OrderCart