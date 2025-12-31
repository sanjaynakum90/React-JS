import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { HiCubeTransparent } from "react-icons/hi2";

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-3">
              <HiCubeTransparent fontSize={50} /> Inventory Management System
            </h1>
            <ProductForm />
            <ProductList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
