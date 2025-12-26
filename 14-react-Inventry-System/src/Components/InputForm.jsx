import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../futures/Products/productSlice";

const InputForm = () => {

    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        qty: 10,
    });
    const dispatch = useDispatch();

    const handleChange = (field, e) => {
        setProduct((prev) => {
            return {
                ...prev,
                [field]: e.target.value,
            }
        })
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const productsData = {
            id: new Date().getTime(),
            product,
        };

        dispatch(addProduct(productsData));

        setProduct({
            name: "",
            price: "",
            category: "",
            qty:10,
        });

        alert("product added");
    };

    return (
        <>
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

                <button type="submit">Submit</button>
                <br />
            </form>
        </>
    );
};

export default InputForm;
