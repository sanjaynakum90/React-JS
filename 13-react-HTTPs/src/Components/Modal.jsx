import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

const CartModal = ({ cart, onClose, onUpdateQty, onRemove }) => {
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <Modal show onHide={onClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {cart.length === 0 ? (
                    <p className="text-center text-muted">
                        Your cart is empty
                    </p>
                ) : (
                    <ListGroup variant="flush">
                        {cart.map((item) => (
                            <ListGroup.Item key={item.id} className="d-flex align-items-center gap-3"
                            >
                                <Image src={item.image} alt={item.name} width={60} height={60} rounded />

                                <div className="flex-grow-1">
                                    <h6 className="mb-1">{item.name}</h6>
                                    <small>₹{item.price}</small>

                                    <div className="d-flex align-items-center gap-2 mt-2">
                                        <Button size="sm" variant="secondary" disabled={item.qty <= 1} onClick={() => onUpdateQty(item.id, item.qty - 1)}> -
                                        </Button>

                                        <span>{item.qty}</span>

                                        <Button
                                            size="sm" variant="secondary" onClick={() => onUpdateQty(item.id, item.qty + 1)}> +
                                        </Button>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <strong>
                                        ₹{item.price * item.qty}
                                    </strong>
                                    <br />
                                    <Button variant="danger" size="sm" className="mt-2" onClick={() => onRemove(item.id)}>Remove
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Modal.Body>

            {cart.length > 0 && (
                <Modal.Footer className="justify-content-between">
                    <h5>Total: ₹{total.toFixed(2)}</h5>
                    <Button variant="success">
                        Checkout
                    </Button>
                </Modal.Footer>
            )}
        </Modal>
    );
};

export default CartModal;
