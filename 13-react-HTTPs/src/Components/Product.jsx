import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Product = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {

        const productData = async () => {
            try {
                const res = await fetch("http://localhost:5000/products");
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };

        productData();
    }, []);

    return (
        <Container className="py-4">
          
            <div className="d-flex flex-wrap gap-4 justify-content-center">

                {product.map((prod) => (
                    <Card 
                        key={prod.id} 
                        style={{ width: '18rem' }} 
                        className="shadow-sm border-0"
                    >
                        <Card.Img 
                            variant="top" 
                            src={prod.image} 
                            style={{ height: "200px", objectFit: "cover" }}
                            alt={prod.Title}
                        />

                        <Card.Body>
                            <Card.Title className="fw-bold">{prod.name}</Card.Title>
                            <Card.Text className="text-muted">{prod.description}</Card.Text>

                            <h4 className="text-primary mb-3">${prod.price}</h4>

                            <Button variant="primary" className="w-100">
                                BUY NOW
                            </Button>
                        </Card.Body>
                    </Card>
                ))}

            </div>
        </Container>
    );
};

export default Product;
