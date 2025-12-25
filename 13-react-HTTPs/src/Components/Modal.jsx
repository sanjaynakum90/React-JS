import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import useHttp from "../Hooks/http";
// import Product from "./Product";

const CartModal = ({ onShow, cart, onClose, clearCart }) => {


    const url = "http://localhost:5000/orders"

    const { sendRequest, loading } = useHttp({ url, method: "POST" })


    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const handlePlaceOrder = async () => {
        const orderData = {
            cart,
            totalAmount: total,
            status: "pending",
            createdAt: new Date().toISOString()
        };

        try {


            //     await axios.post("http://localhost:5000/orders", orderData);
            //     alert("Order placed successfully");
            //     onClose();
            //     clearCart();
            // } catch (error) {
            //     console.error(error.message);



            sendRequest({
                url: url,
                method: "POST",
                body: orderData
            })
            alert("order placed successfully");
            onClose();
            clearCart();
            // console.log("data", orderData);


        }
        catch (error) {
            console.log(error.message);

        }
    };
    if (loading) {
        return loading;
    }

    return (
        <Modal show={onShow} onHide={onClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {cart.length === 0 ? (
                    <p className="text-center text-muted">Your cart is empty</p>
                ) : (
                    <ListGroup variant="flush">
                        <Table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Sub Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item.id || index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                style={{ maxWidth: "100px" }}
                                                thumbnail
                                            />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.price * item.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </ListGroup>
                )}
            </Modal.Body>

            {cart.length > 0 && (
                <Modal.Footer className="justify-content-between">
                    <h5>Total: ₹{total.toFixed(2)}</h5>
                    <Button variant="success" onClick={handlePlaceOrder}>
                        Place Order
                    </Button>
                </Modal.Footer>
            )}
        </Modal>
    );
};

export default CartModal;
