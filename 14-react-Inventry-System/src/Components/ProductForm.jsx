import React, { useEffect, useState } from "react";
import {
  addProduct,
  updateProductData,
} from "../features/product/productSlice";

import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: 10,
    category: "",
  });



  const updateState = useSelector((state) => state.product.updateState);

  useEffect(() => {
    if (updateState) {
      setProduct(updateState);
    }
  }, [updateState]);

  console.log("update state", updateState);

  const dispatch = useDispatch();

  const handleChange = (identifier, e) => {
    setProduct((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateState) {
      dispatch(updateProductData(product));
      setProduct({ name: "", price: "", qty: "", category: "" });
    } else {
      dispatch(
        addProduct({
          id: new Date().getTime(),
          ...product,
        })
      );
      setProduct({ name: "", price: "", qty: "", category: "" });

      alert("product added");
    }
  };


  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="p-4 shadow m-2">
              <h3> + {updateState ? "Update Product Data" : "Add Product"}</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={(e) => handleChange("name", e)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="price"
                    value={product.price}
                    onChange={(e) => handleChange("price", e)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Product Quantity "
                    value={product.qty}
                    onChange={(e) => handleChange("qty", e)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product Category "
                    value={product.category}
                    onChange={(e) => handleChange("category", e)}
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <Button className="btn btn-primary " type="submit">
                    {updateState ? "update" : "Add Product "}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductForm;
