import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loading from "./Loading";
import axios from "axios";
import Navbar from "./Navbar"
import CartModal from "./Modal";



const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false);

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
    const handleCartData = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    const handleUpdateQty = (id, qty) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, qty } : item
        ));
    };

    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };



    return (

        <Container>
            <Navbar cart={cart} onCartClick={() => setShowCart(true)} />
            {showCart && (
                <CartModal
                    onShow={showCart}
                    cart={cart}
                    onClose={() => setShowCart(false)}
                    onUpdateQty={handleUpdateQty}
                    onRemove={handleRemove}
                    clearCart={() => setCart([])}
                />
            )}
            <Row>
                {product.map((prod) => (
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
                                <Button
                                    variant="primary"
                                    onClick={() => handleCartData(prod)}
                                >
                                    Add to cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>

    );
};

export default Product;