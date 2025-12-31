import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct, setUpdateState, } from "../futures/Products/productSlice";

import { Form, Button, Card, Container } from "react-bootstrap";
const InputForm = () => {
    const dispatch = useDispatch();
    const updateState = useSelector((state) => state.product.updateState);

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        category: "",
        qty: 10,
    });

    const handleChange = (field, e) => {
        setProduct((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (updateState) {
            dispatch(
                updateProduct({
                    id: updateState.id,
                    product: product,
                })
            );
            dispatch(setUpdateState(null));
            alert("Product updated");
        } else {
            dispatch(
                addProduct({
                    id: new Date().getTime(),
                    product: product,
                })
            );
            alert("Product added");
        }

        setProduct({
            name: "",
            price: 0,
            category: "",
            qty: 10,
        });
    };

    useEffect(() => {
        if (updateState) {
            setProduct(updateState.product);
        }
    }, [updateState]);

    return (
        <>
            <Container className=" text-center p-4 m-4">
                <Card className="shadow-sm mb-4">
                    <Card.Body>
                        <Card.Title className="mb-3">
                            {updateState ? "Update Product" : "Add Product"}
                        </Card.Title>

                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Product Name"
                                    value={product.name}
                                    onChange={(e) => handleChange("name", e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="number"
                                    placeholder="Price"
                                    value={product.price}
                                    onChange={(e) => handleChange("price", e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Category"
                                    value={product.category}
                                    onChange={(e) => handleChange("category", e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="number"
                                    placeholder="Quantity"
                                    value={product.qty}
                                    onChange={(e) => handleChange("qty", e)}
                                />
                            </Form.Group>

                            <Button variant={updateState ? "warning" : "primary"} type="submit">
                                {updateState ? "Update" : "Submit"}
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>

            </Container>
        </>
    );
};

export default InputForm;
