import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";
import StockManage from "./Components/StockManage";

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
            <StockManage />
            <ProductForm />
            <ProductList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
