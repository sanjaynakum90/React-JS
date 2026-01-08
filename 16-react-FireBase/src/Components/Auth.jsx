import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Auth = () => {
    const [isLogin, setIsLogin] = useState("");

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleInput = (identifier, e) => {
        setData((prev) => {
            return {
                ...prev,
                [identifier]: e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

        } catch (error) {

        }
    };

    return (
        <>
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col md={6}>
                        <Form className="border p-3" onSubmit={handleSubmit}>
                            <h2 className="text-center">{isLogin ? "Login" : "Signin"}</h2>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    onChange={(e) => handleInput("email", e)}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-4"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => handleInput("password", e)}
                                />
                            </Form.Group>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <Button className="w-50 mb-3" type="submit"> {isLogin ? "Login" : "Signin"} </Button>
                                <Button className="w-50">{isLogin ? "Welcome" : "Create Account"}</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Auth;