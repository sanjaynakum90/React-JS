import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../../Context/AuthContext';

import { Container, Spinner } from 'react-bootstrap';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    if (!user) {
        return <Navigate to="/" state={{ showLogin: true, from: location.pathname }} replace />;
    }

    return children;
};

export default ProtectedRoute;