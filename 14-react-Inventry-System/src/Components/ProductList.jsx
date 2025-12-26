import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct} from "../futures/Products/productSlice";

const ProductList = () => {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

   
    return (
        <Table bordered striped hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((prod) => (
                    <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.product.name}</td>
                        <td>{prod.product.price}</td>
                        <td>{prod.product.category}</td>
                        <td>{prod.product.qty}</td>
                        <td>
                            <button onClick={() => handleUpdate(prod)}>Update</button>{" "}
                            <button onClick={() => handleDelete(prod.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ProductList;
