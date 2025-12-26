import { useState } from "react";

const InputForm = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        qty: 10,
    });

    const handleChange = (field, event) => {
        setProduct({
            ...product,
            [field]: event.target.value,
        });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted Product:", product);
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
