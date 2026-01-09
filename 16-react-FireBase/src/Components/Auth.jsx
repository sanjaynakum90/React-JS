import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { auth } from "../../Firebase/config";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

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
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            setUser(result.user.email);
        } catch (error) {
            console.log(error.message);
            alert(error.message);
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
                                    <Form.Control value={authData.email} onChange={(e) => handleChange("email", e)} placeholder="Email" >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control value={authData.password} placeholder="Password" onChange={(e) => handleChange("password", e)}>
                                    </Form.Control>
                                </Form.Group>

                                <Button className="btn btn-primary btn-success" type="submit">
                                    {isLogin ? "login" : "sign up"}
                                </Button>
                                <button className="btn btn-danger mt-3" type="submit" onClick={handleGoogleLogin} disabled={loading}>
                                    Login with google
                                </button>
                                <Button className="btn btn-primary mt-3" onClick={() => setIsLogin(!isLogin)}>
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