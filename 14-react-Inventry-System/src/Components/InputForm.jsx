import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addProduct,
    updateProduct,
    setUpdateState,
} from "../futures/Products/productSlice";

const InputForm = () => {
    const dispatch = useDispatch();
    const updateState = useSelector((state) => state.product.updateState);

    const [product, setProduct] = useState({
        name: "",
        price: "",
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
            alert("product updated");
        } else {
            
            dispatch(
                addProduct({
                    id: new Date().getTime(),
                    product: product,
                })
            );
            alert("product added");
        }

        setProduct({
            name: "",
            price: "",
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
        <form onSubmit={handleOnSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                value={product.name}
                onChange={(e) => handleChange("name", e)}
            />
            <br />

            <input
                type="number"
                placeholder="Price"
                value={product.price}
                onChange={(e) => handleChange("price", e)}
            />
            <br />

            <input
                type="text"
                placeholder="Category"
                value={product.category}
                onChange={(e) => handleChange("category", e)}
            />
            <br />

            <input
                type="number"
                placeholder="Quantity"
                value={product.qty}
                onChange={(e) => handleChange("qty", e)}
            />
            <br />

            <button type="submit">
                {updateState ? "Update" : "Submit"}
            </button>
        </form>
    );
};

export default InputForm;
