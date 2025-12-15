import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loading from "./Loading";
import axios from "axios";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //   useEffect(() => {
    //     const productData = async () => {
    //       setLoading(true);

    //       try {
    //         const res = await fetch("http://localhost:5000/products");

    //         if (!res.ok) {
    //           throw new Error("failed to fetch product data");
    //         }

    //         const data = await res.json();

    //         if (data.length <= 0) {
    //           throw new Error("no product data found");
    //         }

    //         setProduct(data);
    //       } catch (error) {
    //         setError(error.message);
    //       }

    //       setLoading(false);
    //     };

    //     productData();
    //   }, []);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);

                const res = await axios("http://localhost:5000/products");

                const data = res.data;

                if (data.length <= 0) {
                    setError("no data found");
                }

                setProduct(data);
            } catch (error) {
                console.log(error);

                if (error.status === 404) {
                    setError("invalid url");
                } else {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProductData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            {/* {product.map((prod)=>{
        return (    

            <>
            <li key={prod.id}>{prod.name}</li>
            <img src={prod.image} alt={prod.name} width={200} />
            <li>{prod.price}</li>
            </>
        )
    })} */}

            <Container>
                <Row>
                    {product.map((prod) => {
                        return (
                            <>
                                <Col md={3} sm={6} key={prod.id}>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={prod.image}
                                            alt={prod.name}
                                            style={{ maxHeight: "200px" }}
                                        />
                                        <Card.Body>
                                            <Card.Title>{prod.name}</Card.Title>
                                            <Card.Text>{prod.description}</Card.Text>
                                            <Card.Title> ₹{prod.price}</Card.Title>
                                            <Button variant="primary">Add to card</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default Product;