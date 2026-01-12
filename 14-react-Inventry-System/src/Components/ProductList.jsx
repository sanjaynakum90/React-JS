import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  setUpdateState,
} from "../features/product/productSlice";

import { Container, Row, Col, Card, Table, Button, Form } from "react-bootstrap";


import { FaBoxOpen } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { useState } from "react";

const ProductList = () => {
  const product = useSelector((state) => state.product.products);
  const [productQuery, setProductQuery] = useState({
    search: "",
    filter: "",
  })

  const dispatch = useDispatch();

  const handleChange = (identifier, e) => {

    setProductQuery((prod) => {
      return {
        ...prod,
        [identifier]: e.target.value
      }
    })
  }




  const filterList = product.filter((prod) =>
    prod.name.toLowerCase().includes(productQuery.search.toLowerCase())
  );

  const sortedList = [...filterList].sort((a, b) => {
    if (productQuery.filter === "ascending") {
      return a.id - b.id;
    }
    if (productQuery.filter === "descending") {
      return b.id - a.id;
    }

    if (productQuery.filter === "priceAsc") {
      return Number(a.price) - Number(b.price);
    }

    if (productQuery.filter === "priceDesc") {
      return Number(b.price) - Number(a.price);
    }
    if (productQuery.filter === "QtyAsc") {
      return Number(a.qty) - Number(b.qty);
    }

    if (productQuery.filter === "QtyDesc") {
      return Number(b.qty) - Number(a.qty);
    }
  });

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

                <div >
                  <form className="d-flex my-2 p-2 gap-2">
                    <Form.Control className="mb-3" placeholder="Search by product name..." value={productQuery.search} onChange={(e) => handleChange("search", e)} />
                    <Form.Select className="mb-3" value={productQuery.filter} onChange={(e) => handleChange("filter", e)}>
                      <option value="">Sort Products</option>
                      <option value="ascending">Ascending</option>
                      <option value="descending">Descending</option>
                      <option value="priceAsc">Price Acsending</option>
                      <option value="priceDesc">Price Descending</option>
                      <option value="QtyAsc">Stock Descending</option>
                      <option value="QtyDesc">Stock Descending</option>
                    </Form.Select>
                  </form>
                </div>
                <Table striped bordered hover >
                  <thead className="bg-dark">
                    <tr >
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
                    {sortedList.map((prod, index) => (
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
