import { useState } from "react";

import {Container,Row,Col,Form,Card,Button }from "react-bootstrap";

import { auth, googleProvider } from "../../../Firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const [user, setUser] = useState("");

    const [authData, setAuthData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (identifier, e) => {
        setAuthData((prev) => {
            return {
                ...prev,
                [identifier]: e.target.value,
            };
        });
    };

    const handleForm = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            if (isLogin) {
                const result = await signInWithEmailAndPassword(
                    auth,
                    authData.email,
                    authData.password
                );
                setUser(result.user.email);
            } else {
                const result = await createUserWithEmailAndPassword(
                    auth,
                    authData.email,
                    authData.password
                );
                setUser(result.user.email);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);

            setUser(result.user.email);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form
                            className="d-flex justify-content-center align-items-center"
                            style={{ height: "100vh" }}
                            onSubmit={handleForm}
                        >
                            <Card className="shadow p-3 " style={{ width: "30%" }}>
                                <h4 className="text-center">{isLogin ? "Login" : "Sign up"}</h4>
                                {user && <p className="alert alert-primary">{user}</p>}
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        value={authData.email}
                                        onChange={(e) => handleChange("email", e)}
                                        placeholder="Email"
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        value={authData.password}
                                        placeholder="Password"
                                        onChange={(e) => handleChange("password", e)}
                                    ></Form.Control>
                                </Form.Group>

                                <Button
                                    className="btn btn-primary btn-success"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {isLogin ? "login" : "sign up"}
                                </Button>

                                <Button onClick={handleGoogleLogin} disabled={loading} className="mt-3 btn-danger" >
                                    Login With Google
                                </Button>

                                <Button
                                    className="btn btn-primary mt-3"
                                    onClick={() => setIsLogin(!isLogin)}
                                    disabled={loading}
                                >
                                    {isLogin ? "New User ? Sign Up" : "Already User ? Login"}
                                </Button>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Auth;