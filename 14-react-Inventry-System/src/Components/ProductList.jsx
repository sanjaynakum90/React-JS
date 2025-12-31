import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  setUpdateState,
} from "../features/product/productSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { FaBoxOpen } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

const ProductList = () => {
  const product = useSelector((state) => state.product.products);

  console.log("product", product);

  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col>
          <Card className="p-4 shadow m-2">
            {product.length <= 0 ? (
              <>
                <div className="text-center">
                  <FaBoxOpen fontSize={50} />
                  <h3>No Data Found</h3>
                  <p>Please Add some data to start</p>
                </div>
              </>
            ) : (
              <>
                <h3>
                  <AiOutlineProduct fontSize={30} /> Product Data
                </h3>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Category</th>
                      <th>Total Price</th>
                      <th colSpan={2} className="text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((prod, index) => (
                      <tr key={prod.id}>
                        <td> {index + 1} </td>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <td>{prod.qty}</td>
                        <td>{prod.category}</td>
                        <td>{prod.price * prod.qty}</td>
                        <td>
                          {
                            <Button
                              variant="outline-warning"
                              onClick={() => dispatch(setUpdateState(prod))}
                            >
                              <MdEdit fontSize={18} />
                            </Button>
                          }
                        </td>
                        <td>
                          <Button
                            variant="outline-danger"
                            onClick={() => dispatch(deleteProduct(prod.id))}
                          >
                            <MdDelete fontSize={18} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
