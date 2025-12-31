import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, setUpdateState } from "../futures/Products/productSlice";

import { Table, Button, Container } from "react-bootstrap/";


const ProductList = () => {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    const handleUpdate = (prod) => {
        dispatch(setUpdateState(prod));
    };

    return (
        <Container className="m-4 rounded-3">
            <Table striped bordered hover responsive className="shadow-sm ">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Total Price</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod, index) => (
                        <tr key={prod.id}>
                            <td>{index + 1}</td>
                            <td>{prod.product.name}</td>
                            <td>{prod.product.price}</td>
                            <td>{prod.product.qty}</td>
                            <td>{prod.product.category}</td>
                            <td>{prod.product.price * prod.product.qty}</td>
                            <td className="text-center">
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleUpdate(prod)}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(prod.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ProductList;
