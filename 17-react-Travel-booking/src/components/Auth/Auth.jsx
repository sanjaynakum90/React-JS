import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { auth, googleProvider } from "../../../Firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const AuthModal = ({ show, handleClose }) => {
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

            handleClose();
            setUser("");
            setAuthData({ email: "", password: "" });

        } catch (error) {
            console.log(error.message);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user.email);
            setTimeout(() => {
                handleClose();
                setUser("");
                setAuthData({ email: "", password: "" });
            }, 1500);
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isLogin ? "Login" : "Sign Up"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleForm}>
                    {user && <p className="alert alert-success">Welcome {user}!</p>}

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={authData.email}
                            onChange={(e) => handleChange("email", e)}
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={authData.password}
                            placeholder="Enter password"
                            onChange={(e) => handleChange("password", e)}
                            required
                        />
                    </Form.Group>

                    <Button
                        className="w-100 btn-success"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
                    </Button>

                    <Button
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="w-100 mt-3 btn-danger"
                    >
                        Login With Google
                    </Button>

                    <Button
                        className="w-100 mt-3"
                        variant="outline-primary"
                        onClick={() => setIsLogin(!isLogin)}
                        disabled={loading}
                    >
                        {isLogin ? "New User? Sign Up" : "Already User? Login"}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;